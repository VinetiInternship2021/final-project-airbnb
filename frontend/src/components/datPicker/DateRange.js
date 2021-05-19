import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ownDatePicker } from '../redux/actions'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker
const disabled = 'YYYY-MM-DD'
const format = 'YYYY-DD-MM'
// 'YYYY-DD-MM' format for rails

const DateRange = ({ disabledRanges, ownDatePicker }) => {
    const [disabledDates, setDisabledDates] = useState([
        ...disabledRanges,
        {
            start: moment(new Date(0).toLocaleDateString(), disabled),
            end: moment(new Date(), disabled),
        },
    ])
    const getDate = (date, dateString) => {
        //first argument from momentJS second correct dates
        const days =
            (new Date(dateString[1]) - new Date(dateString[0])) /
            (24 * 60 * 60 * 1000)
        const reduxDATE = {
            start_date: dateString[0],
            end_date: dateString[1],
            duration: days,
        }
        ownDatePicker(reduxDATE) //redux
    }

    //disabled before today and props dates

    const getDisabledHours = (date, type) => {
        const array = []
        if (date[0]) {
            if (type === 'start') {
                disabledDates.forEach((values) => {
                    if (date[0].isSame(values.start, 'day')) {
                        for (let i = 0; i <= values.start.hour(); i++) {
                            array.push(i)
                        }
                    }
                    if (date[0].isSame(values.end, 'day')) {
                        for (let i = 0; i <= values.end.hour(); i++) {
                            array.push(i)
                        }
                    }
                })
            }
        }

        return array
    }
    return (
        <div className="d-flex align-items-center">
            <RangePicker
                onChange={getDate}
                defaultValue={[moment(), moment()]}
                disabledTime={(date, type) => ({
                    disabledHours: () => getDisabledHours(date, type),
                })}
                disabledDate={(current) =>
                    disabledDates.some((date) =>
                        current.isBetween(
                            moment(date['start'], format),
                            moment(date['end'], format),
                            'day'
                        )
                    )
                }
            />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { ownDatePicker }

export default connect(mapStateToProps, mapDispatchToProps)(DateRange)
