import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {
    addOrderedDates,
    clearOrderedDates,
    clearDatePicker,
} from './../redux/actions'
import { reqCreateToken, reqGetToken } from '../../api/api'
import Swal from 'sweetalert2'
import Slider from '../slider/Slider'
import Review from '../review/Review'
import PropertyReviews from '../review/PropertyReviews'

import moment from 'moment'
import DateRange from '../datePicker/DateRange'
import { info } from '../../notification/notification'

const disabled = 'YYYY-MM-DD'

const Order = (props) => {
    const [modalShow, setModalShow] = React.useState(false)
    const [orderedDays, setOrderedDAYS] = useState([])
    const {
        datePicker,
        property,
        currentUser,
        addOrderedDates,
        clearOrderedDates,
        clearDatePicker,
    } = props
    const order = (e) => {
        // if (currentUser.role !== 'reg') {
        //     return Swal.fire(
        //         'Ooops!',
        //         'You need to be a regular user',
        //         'warning'
        //     )
        // }
        if (!datePicker.start_date || !datePicker.end_date) {
            return info('Please choose your preferred date for your order')
        }

        if (orderedDays.length) {
            for (let [start, end] of orderedDays) {
                const start_date = moment(start).isBetween(
                    datePicker.start_date,
                    datePicker.end_date
                )
                const end_date = moment(end).isBetween(
                    datePicker.start_date,
                    datePicker.end_date
                )
                if (start_date || end_date) {
                    return info('Your selected dates are unavailable')
                }
            }
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'Please confirm your order',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Order',
        }).then((result) => {
            if (result.isConfirmed) {
                const data = {
                    user_id: currentUser.user.id,
                    property_id: property.id,
                    priceNight: property.price,
                    totalAmount: datePicker.duration * property.price,
                    start_date: datePicker.start_date,
                    end_date: datePicker.end_date,
                }
                reqCreateToken('orders', data, currentUser.token)
                Swal.fire(
                    'Order accepted!',
                    'Your order has been successfully completed.',
                    'success'
                )
            }
        })
    }

    const disableDates = (start, end) => {
        //during the disable, these {start,end} are not excluded there
        //for this we increase or decrease one day

        let datesObj = {}

        let start_day = new Date(start)
        let prevDay = new Date(start_day)
        prevDay.setDate(start_day.getDate() - 1)
        prevDay = new Date(prevDay)

        datesObj.start = moment(prevDay, disabled)
        datesObj.end = moment(new Date(end), disabled)
        return datesObj
    }

    useEffect(() => {
        clearOrderedDates()
        clearDatePicker()
        async function getAllOrderedDates() {
            const deActiveDates = []

            let datesList = await reqGetToken(
                `/currentDatesList?id=${property.id}`,
                currentUser.token
            )
            setOrderedDAYS(() => datesList)
            datesList.length &&
                datesList.forEach(([start_date, end_date]) => {
                    if (start_date || end_date) {
                        deActiveDates.push(disableDates(start_date, end_date))
                    }
                })
            addOrderedDates(deActiveDates) //redux
        }
        getAllOrderedDates()
    }, [])

    return (
        <>
            <div className="d-flex justify-content-lg-center mt-4">
                <div className="card" style={{ width: '60rem' }}>
                    <Slider imgList={property.img_lists} />
                    <div className="card-body">
                        <h5 className="card-title">{property.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {property.address}
                        </h6>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <DateRange
                                    selectedRange={
                                        datePicker.start_date && [
                                            moment(
                                                datePicker.start_date,
                                                disabled
                                            ),
                                            moment(
                                                datePicker.end_date,
                                                disabled
                                            ),
                                        ]
                                    }
                                />
                            </li>
                            <li className="list-group-item">
                                Type : {property.propType}
                            </li>
                            <li className="list-group-item">
                                Rooms : {property.rooms}
                            </li>
                            <li className="list-group-item">
                                Beds : {property.beds}
                            </li>
                            <li className="list-group-item">
                                Day price : ${property.price}
                            </li>
                            <li className="list-group-item">
                                Start date: {datePicker.start_date}
                            </li>
                            <li className="list-group-item">
                                End date:{datePicker.end_date}
                            </li>
                            <li className="list-group-item">
                                Total Price: $
                                {datePicker.duration * property.price}
                            </li>
                            <li className="list-group-item">
                                {property.description}
                            </li>
                            <li className="list-group-item">
                                Description: {datePicker.description}
                            </li>
                        </ul>
                        <button
                            href="/"
                            className="btn btn-danger w-50"
                            onClick={order}
                        >
                            Order
                        </button>
                        <button
                            href="/"
                            className="btn btn-success w-50"
                            onClick={() => setModalShow(true)}
                        >
                            Review
                        </button>
                        <Review
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
            <PropertyReviews />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        datePicker: state.user.datePicker,
        property: state.user.propID[0],
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {
    addOrderedDates,
    clearOrderedDates,
    clearDatePicker,
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
