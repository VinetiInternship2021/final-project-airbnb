import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ownDatePicker } from './../redux/actions'
import 'antd/dist/antd.css'
import { DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker

const DateRange = ({ disabledRanges }) => {
    const format = 'YYYY-MM-DD'
    const getDate = (date, dateString) => {
        const days =
            (new Date(dateString[1]) - new Date(dateString[0])) /
            (24 * 60 * 60 * 1000)
        const reduxDATE = {
            start_date: dateString[0],
            end_date: dateString[1],
            duration: days,
        }
        ownDatePicker(reduxDATE)
    }
    let disabledDates = disabledRanges
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
