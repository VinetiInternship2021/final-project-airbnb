import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addOrderedDates, clearOrderedDates } from './../redux/actions'
import { reqCreateToken, reqRed } from '../../api/api'
import Swal from 'sweetalert2'
import Slider from '../slider/Slider'
import moment from 'moment'
import DateRange from './../datPicker/DateRange'

const Order = (props) => {
    const {
        datePicker,
        property,
        currentUser,
        addOrderedDates,
        clearOrderedDates,
    } = props

    const order = (e) => {
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

    const changeFormat = (day) => {
        const [DD, MM, YYYY] = day.split('/')
        return YYYY + '-' + MM + '-' + DD
    }
    const disableDates = (start, end) => {
        //during the disable, these {start,end} are not excluded there
        //for this we increase and decrease one day

        const disabled = 'YYYY-MM-DD'
        let datesObj = {}

        let start_day = new Date(start)
        let prevDay = new Date(start_day)
        prevDay.setDate(start_day.getDate() - 1)
        prevDay = new Date(prevDay)
        // prevDay = changeFormat(prevDay)

        let end_day = new Date(end)
        let nextDay = new Date(end_day)
        nextDay.setDate(end_day.getDate() - 1)
        nextDay = new Date(nextDay)
        // nextDay = changeFormat(nextDay)

        datesObj.start = moment(new Date(prevDay), disabled)
        datesObj.end = moment(new Date(nextDay), disabled)
        return datesObj
    }

    useEffect(() => {
        clearOrderedDates()
        async function getAllOrderedDates() {
            const deActiveDates = []
            let datesList = await reqRed(`/currentDatesList?id=${property.id}`)
            console.log(property.id)
            datesList.forEach(([start_date, end_date]) => {
                if (start_date || end_date) {
                    deActiveDates.push(disableDates(start_date, end_date))
                }
            })
            console.log(deActiveDates)
            addOrderedDates(deActiveDates) //redux
        }
        getAllOrderedDates()
    }, [])
    return (
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
                            <DateRange />
                        </li>
                        <li className="list-group-item">
                            Type : {property.propType}
                        </li>
                        <li className="list-group-item">
                            Rooms : {property.rooms}
                        </li>
                        <li className="list-group-item">
                            Beds : {property.bads}
                        </li>
                        <li className="list-group-item">
                            Day price : {property.price}$
                        </li>
                        <li className="list-group-item">
                            Start date: {datePicker.start_date}
                        </li>
                        <li className="list-group-item">
                            End date:{datePicker.end_date}
                        </li>
                        <li className="list-group-item">
                            Total Price: {datePicker.duration * property.price}$
                        </li>
                        <li className="list-group-item">
                            Description: {datePicker.description}
                        </li>
                    </ul>
                    <button
                        href="/"
                        className="btn btn-danger w-100"
                        onClick={order}
                    >
                        Order
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        datePicker: state.user.datePicker,
        property: state.user.propID[0],
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = { addOrderedDates, clearOrderedDates }

export default connect(mapStateToProps, mapDispatchToProps)(Order)
