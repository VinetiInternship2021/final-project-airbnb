import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { reqRed } from '../../api/api'
import MyApartmentCard from './MyApartmentCard'

const MyApartments = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function req() {
            const result = await reqRed('myPropertyies?id=95')
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartments)
