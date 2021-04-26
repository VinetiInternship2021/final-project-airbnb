import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import React, { Component } from 'react'

export default class DatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
        }
    }
    componentDidUpdate() {
        const { datePicker } = this.props
        const startDate = this.state.startDate?._d
        const endDate = this.state.endDate?._d
        datePicker((prev) => ({
            ...prev,
            startDate,
            endDate,
        }))
    }

    render() {
        return (
            <div>
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) =>
                        this.setState({ startDate, endDate })
                    } // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={(focusedInput) =>
                        this.setState({ focusedInput })
                    } // PropTypes.func.isRequired,
                />
                <button onClick={this.log}>click me</button>
            </div>
        )
    }
}
