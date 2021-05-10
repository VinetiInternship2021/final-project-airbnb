import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { reqRed } from '../../api/api'
import MyApartmentCard from './MyApartmentCard'

const MyApartments = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const data = await reqRed('properties')
            setData(data)
            console.log(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            {data &&
                data.map((property) => (
                    <MyApartmentCard data={property} key={property.id} />
                ))}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartments)
