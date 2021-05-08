import React from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

function UsersList(props) {
    return (
        <div>
            <UserCard />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
