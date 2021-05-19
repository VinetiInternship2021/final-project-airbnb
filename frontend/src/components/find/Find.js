import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import Card from './../card/Card'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import { clearOrderedDates } from '../redux/actions'
import React, { useState, useEffect } from 'react'
import DatePicker from './../datPicker/DateRange'
import './find.css'
import { connect } from 'react-redux'
import { info } from '../../notification/notification'
import { reqGetToken } from '../../api/api'
import moment from 'moment'

function Find({ datePicker, currentUser, clearOrderedDates, orderedDates }) {
    const [results, setResults] = useState([])
    const [form, setFrom] = useState({
        title: '',
        guests: '',
    })
    const format = 'YYYY-DD-MM'
    const filter = async (e) => {
        e.preventDefault()

        if (!datePicker.start_date || !datePicker.end_date) {
            return info('Please choose correct date')
        }

        const url = `search?guests=${form.guests}&title=${form.title}&start=${datePicker.start_date}&end=${datePicker.end_date}`
        const property = await reqGetToken(url, currentUser.token)
        setResults(() => property)
    }
    useEffect(() => {
        clearOrderedDates()
    }, [datePicker])
    
    const changeSearchData = (e) => {
        setFrom((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div>
            <div className="findFormContainer mt-2">
                <div className="findForm">
                    <input
                        onChange={changeSearchData}
                        value={form.title}
                        name="title"
                        placeholder="Search anything"
                        id="name"
                    />
                    <DatePicker
                        disabledRanges={[
                            {
                                start: moment('2021-05-22', format),
                                end: moment('2021-05-26', format),
                            },
                        ]}
                    />
                    <input
                        type="number"
                        placeholder="Guests"
                        name="guests"
                        value={form.guests}
                        onChange={changeSearchData}
                        min="1"
                        max="10"
                    />

                    <button className="btn btn-danger findBtn" onClick={filter}>
                        <img
                            width="20"
                            src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png"
                            alt="Can't Upload img"
                        />
                    </button>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {!results.length ? (
                    <div className="w-100">
                        <h1 className="text-center">No result </h1>
                    </div>
                ) : (
                    results.map((el) => {
                        return <Card data={el} key={el.id} />
                    })
                )}
            </div>
        </div>
    )
}

const mapDispatchToProps = { clearOrderedDates }
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
        datePicker: state.user.datePicker,
        orderedDates: state.user.orderedDates,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)
