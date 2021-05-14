import React from 'react'
import { connect } from 'react-redux'
import OrderCard from './OrderCard'

const OrderList = (props) => {
    return (
        <div>
            <OrderCard />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList)
