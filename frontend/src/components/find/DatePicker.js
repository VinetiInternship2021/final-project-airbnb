import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'
import { ownDatePicker } from './../redux/actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
        }
    }
    handleChangeDate = ({ startDate, endDate }) => {
        const { ownDatePicker } = this.props
        this.setState(() => ({ startDate, endDate }))
        const datePicker = {
            start_date: startDate?._d.toLocaleDateString().split('/').join('-'),
            end_date: endDate?._d.toLocaleDateString().split('/').join('-'),
            duration:
                (new Date(endDate?._d.toLocaleDateString()) -
                    new Date(startDate?._d.toLocaleDateString())) /
                (1000 * 60 * 60 * 24),
        }
        ownDatePicker(datePicker) //redux
    }
    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    'z-index': '15',
                }}
            >
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    // onDatesChange={({ startDate, endDate }) =>
                    //     this.setState({ startDate, endDate })
                    // } // PropTypes.func.isRequired,
                    onDatesChange={this.handleChangeDate}
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={(focusedInput) =>
                        this.setState({ focusedInput })
                    } // PropTypes.func.isRequired,
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    ownDatePicker,
}

export default connect(null, mapDispatchToProps)(DatePicker)
