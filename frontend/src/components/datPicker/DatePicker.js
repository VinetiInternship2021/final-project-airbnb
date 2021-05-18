import React, { useState } from 'react'
import { connect } from 'react-redux'
import 'antd/dist/antd.css'

import { DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker

function onChange(date, dateString) {
    console.log(date, dateString)
}

const format = 'DD-MM-YYYY'
const disabledDates = [
    {
        start: moment('19-05-2021', format),
        end: moment('22-05-2021', format),
    },
    {
        start: moment('25-05-2021', format),
        end: moment('29-05-2021', format),
    },
]
const getDisabledHours = (date, type) => {
    const array = []

    if (date[0]) {
        if (type === 'start') {
            disabledDates.forEach((values) => {
                if (date[0].isSame(values.start, 'day')) {
                    for (let i = 0; i < values.start.hour(); i += 1) {
                        array.push(i)
                    }
                }

                if (date[0].isSame(values.end, 'day')) {
                    for (let i = 0; i < values.end.hour(); i += 1) {
                        array.push(i)
                    }
                }
            })
        } else {
            disabledDates.forEach((values) => {
                if (date[1].isSame(values.start, 'day')) {
                    for (let i = values.start.hour(); i < 24; i += 1) {
                        array.push(i)
                    }
                }

                if (date[1].isSame(values.end, 'day')) {
                    for (let i = 0; i < values.end.hour(); i += 1) {
                        array.push(i)
                    }
                }
            })
        }
    }

    return array
}
const Date = (props) => {
    return (
        <div className="d-flex align-items-center">
            <RangePicker
                onChange={onChange}
                defaultValue={[moment(), moment()]}
                showTime
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Date)
