import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { OverlayTrigger, Popover } from 'react-bootstrap'
import Card from './../card/Card'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

import React, { useState } from 'react'
import DatePicker from './DatePicker'
import searchIcon from './search.svg'
import './find.css'
import { connect } from 'react-redux'
import { info } from '../../notification/notiication'
import { reqGetToken } from '../../api/api'

function Find({ datePicker, currentUser }) {
    const [results, setResults] = useState([])
    const [form, setFrom] = useState({
        title: '',
        guests: 1,
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
                    {/* <OverlayTrigger
                    trigger="click"
                    key={'bottom'}
                    placement={'bottom'}
                    overlay={
                        <Popover id={`popover-positioned-bottom'`}>
                            <Popover.Content>
                                <div>
                                    <Count name="Adults" />
                                    <Count name="Children" />
                                    <Count name="Infants" />
                                </div>
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <button className="btn btn-outline-secondary hover-btn-outline-secondary">
                        Guests
                    </button>
                </OverlayTrigger> */}

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
            <div>
                {!results.length ? (
                    <h1 className="text-center">No result </h1>
                ) : (
                    results.map((el) => {
                        return <Card data={el} key={el.id} />
                    })
                )}
            </div>
        </div>
    )
}

function Count(props) {
    const [num, setNum] = useState(0)
    const increment = () => {
        if (num < 13) {
            setNum((prev) => prev + 1)
        }
    }
    const decrement = () => {
        if (num > 0) {
            setNum((prev) => prev - 1)
        }
    }
    return (
        <div className="increment">
            <span>{props.name}</span>
            <div className="incButtons">
                <button
                    onClick={decrement}
                    className="btn btn-outline-danger rounded-circle inc"
                >
                    -
                </button>
                <span>{num}</span>
                <button
                    onClick={increment}
                    className="btn btn-outline-success rounded-circle inc"
                >
                    +
                </button>
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
