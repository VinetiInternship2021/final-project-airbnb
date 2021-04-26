import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'

import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

import React, { useState } from 'react'
import DatePicker from './DatePicker'
export default function Find() {
    const [pickerDate, setPickerDate] = useState()

    return (
        <div>
            <div>
                <form>
                    <input />
                    <input />

                    <button className="btn btn-danger">Find </button>
                </form>
            </div>
            <DatePicker datePicker={setPickerDate} />
        </div>
    )
}
