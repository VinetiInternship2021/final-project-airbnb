import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { reqGetToken } from '../../api/api'
import { info } from '../../notification/notification'

const OrderCard = ({ currentUser }) => {
    const redirect = useHistory()
    const [data, setData] = useState([])

    useEffect(() => {
        if (!currentUser) {
            redirect.push('/')
            return info('Pleas login ')
        }
        const url = `userOrders?id=${currentUser?.user.id}`
        console.log(currentUser, 'currentUser')
        async function getOrders() {
            const orders = await reqGetToken(url, currentUser.token)
            setData(() => orders)
        }
        getOrders()
    }, [])

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Order number</th>
                    <th scope="col">Property Title</th>
                    <th scope="col">Started Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Price Night</th>
                </tr>
            </thead>
            <tbody>
                {!data.length ? (
                    <p>Have not orders yet</p>
                ) : (
                    data.map((el) => (
                        <tr>
                            <th scope="row">{el.id}</th>
                            <td>{el.property.title}</td>
                            <td>{el.start_date}</td>
                            <td>{el.end_date}</td>
                            <td>{el.totalAmount}$</td>
                            <td>{el.priceNight}$</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCard)
