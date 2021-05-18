import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import Card from './../card/Card'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

import React, { useState } from 'react'
import DatePicker from './DatePicker'
import searchIcon from './search.svg'
import './find.css'
import { connect } from 'react-redux'
import { info } from '../../notification/notification'
import { reqGetToken } from '../../api/api'

function Find({ datePicker, currentUser }) {
    const [results, setResults] = useState([])
    const [form, setFrom] = useState({
        title: '',
        guests: '',
        start_date: datePicker?.start_date,
        end_date: datePicker?.end_date,
    })
    const filter = async (e) => {
        e.preventDefault()
        if (!datePicker.start_date || !datePicker.end_date) {
            info('Please choose correct date')
        }

        const url = `search?guests=${form.guests}&title=${form.title}&start=${form.start_date}&end=${form.end_date}`
        const property = await reqGetToken(url, currentUser.token)
        setResults(() => property)
        console.log(property)
    }
    const changeSearchData = (e) => {
        setFrom((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div>
            <div className="findFormContainer mt-2">
                <div className="findForm ">
                    <input
                        onChange={changeSearchData}
                        value={form.title}
                        name="title"
                        placeholder="Find anything"
                        id="name"
                    />
                    <DatePicker />
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
                        <svg
                            width="30"
                            height="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <image href={searchIcon} height="30" width="30" />
                        </svg>
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

const mapDispatchToProps = {}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
        datePicker: state.user.datePicker,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)
