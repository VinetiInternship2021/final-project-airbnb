import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { reqGetToken } from '../../api/api'
import MyApartmentCard from './MyApartmentCard'

const MyApartments = ({ currentUser }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log(currentUser.token)
        async function req() {
            const result = await reqGetToken(
                `myPropertyies?id=${currentUser.user.id}`,
                currentUser.token
            )
            setData(result)
        }
        req()
    }, [])

    return (
        <div>
            {data.map((property) => (
                <MyApartmentCard data={property} key={property.id} />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartments)
