import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MyApartmentCard from './MyApartmentCard'

const MyApartments = (props) => {
    useEffect(() => {
        
    }, [])
    return (
        <div>
            <MyApartmentCard />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartments)
