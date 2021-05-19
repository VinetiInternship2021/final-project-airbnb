import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { reqCreateToken, reqRed } from '../../api/api'
import { success } from '../../notification/notification'
import Slider from '../slider/Slider'
import moment from 'moment'
import DateRange from './../datPicker/DateRange'

const Order = ({ datePicker, property, currentUser }) => {
    const [load, setLoad] = useState(false)
    const [orderedDates, setOrderedDates] = useState([])
    const order = (e) => {
        setLoad((prev) => !prev)
        const data = {
            user_id: currentUser.user.id,
            property_id: property.id,
            priceNight: property.price,
            totalAmount: datePicker.duration * property.price,
            start_date: datePicker.start_date,
            end_date: datePicker.end_date,
        }
        reqCreateToken('orders', data, currentUser.token)
        setLoad((prev) => !prev)
        success('Success')
    }

    const disableDates = (start, end) => {
        //during the disable, these {start,end} are not excluded there
        //for this we increase and decrease one day
        const disabled = 'YYYY-MM-DD'
        let datesObj = {}
        let day = new Date(start)
        let prevDay = new Date(day)
        prevDay.setDate(day.getDate() + 1)
        let start_day = new Date(end)
        let nextDay = new Date(start_day)
        nextDay.setDate(day.getDate() + 1)
        datesObj.start = moment(prevDay, disabled)
        datesObj.end = moment(nextDay, disabled)
        return datesObj
    }

    useEffect(() => {
        async function getAllOrderedDates() {
            const deActiveDates = []
            let datesList = await reqRed(`/currentDatesList?id=${property.id}`)
            console.log(datesList)
            datesList.forEach(([start_date, end_date]) => {
                if (start_date !== null || start_date !== null) {
                    deActiveDates.push(disableDates(start_date, end_date))
                }
            })
            setOrderedDates(deActiveDates)
        }
        getAllOrderedDates()
    }, [])
    return (
        <div className="d-flex justify-content-lg-center mt-4">
            <div className="card" style={{ width: '60rem' }}>
                <Slider imgList={property.img_lists} />
                <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        {property.address}
                    </h6>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <DateRange disabledRanges={orderedDates} />
                        </li>
                        <li className="list-group-item">
                            Type : {property.propType}
                        </li>
                        <li className="list-group-item">
                            Rooms : {property.room}
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
                        {!load ? 'Order' : 'Loading...'}
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

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
