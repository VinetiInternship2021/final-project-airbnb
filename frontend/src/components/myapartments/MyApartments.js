import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { reqGetToken } from '../../api/api'
import MyApartmentCard from './MyApartmentCard'

const MyApartments = ({ currentUser }) => {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        async function req() {
            const result = await reqGetToken(
                `myProperties?id=${currentUser.user.id}`,
                currentUser.token
            )
            setData(result)
        }
        req()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update])

    return (
        <div>
            {!data.length ? (
                <h1 className="text-center">
                    To see your property please add at least one
                </h1>
            ) : (
                data.map((property) => (
                    <MyApartmentCard
                        data={property}
                        key={property.id}
                        setUpdate={setUpdate}
                    />
                ))
            )}
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
