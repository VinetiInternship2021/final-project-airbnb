import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

import React, { useState } from 'react'
import DatePicker from './DatePicker'
import searchIcon from './search.svg'
import './find.css'

export default function Find() {
    const [pickerDate, setPickerDate] = useState()
    


    return (
        <div className="findFormContainer mt-2">
            <form>
                <div className="findForm ">
                    <input placeholder="Location" id="name" />
                    <DatePicker datePicker={setPickerDate} />
                    <input placeholder="Guests" />
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
