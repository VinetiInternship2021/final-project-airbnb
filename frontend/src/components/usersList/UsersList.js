import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { reqRed } from '../../api/api'
import { info } from '../../notification/notiication'
import UserCard from './UserCard'

function UsersList({ currentUser, usersId }) {
    const redirect = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (currentUser.user.role !== 'admin') {
            info("You haven't permission in this page")
            return redirect.push('/results')
        }
        reqRed('/userLists').then((e) => {
            setUsers(() => e)
        })
    }, [])

    const changeStatus = (e) => {
        console.log(e)
    }
    return (
        <div>
            <button onClick={changeStatus} className="btn btn-danger mt-2">
                Change status
            </button>
            {users.map((el) => {
                return <UserCard users={el} key={el[0]} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
        usersId: state.usersId,
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
