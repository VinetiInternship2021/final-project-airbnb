import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { OverlayTrigger, Popover } from 'react-bootstrap'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

import React, { useState } from 'react'
import DatePicker from './DatePicker'
import searchIcon from './search.svg'
import './find.css'

function Find() {
    const [pickerDate, setPickerDate] = useState()

    const filter = (e) => {
        e.preventDefault()
    }

    return (
        <div className="findFormContainer mt-2">
            <form onSubmit={filter}>
                <div className="findForm ">
                    <input placeholder="Location" id="name" />
                    <DatePicker datePicker={setPickerDate} />

                    <OverlayTrigger
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
                    </OverlayTrigger>

                    <button className="btn btn-danger findBtn">
                        <svg
                            width="30"
                            height="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <image href={searchIcon} height="30" width="30" />
                        </svg>
                    </button>
                </div>
            </form>
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
            <div class="incButtons">
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

export default Find
