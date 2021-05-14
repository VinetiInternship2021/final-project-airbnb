import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { reqCreateToken } from '../../api/api'
import { success } from '../../notification/notiication'
import Slider from '../slider/Slider'

const Order = ({ datePicker, property, currentUser }) => {
    const [load, setLoad] = useState(false)
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
