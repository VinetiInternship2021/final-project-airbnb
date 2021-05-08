import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { clearIds } from './../redux/actions'
import { reqRed, reqUpdate } from '../../api/api'
import { info } from '../../notification/notiication'
import UserCard from './UserCard'

function UsersList({ currentUser, usersId, clearIds }) {
    const redirect = useHistory()
    const [updateList, setUpdateList] = useState(false)
    const [users, setUsers] = useState([])
    useEffect(() => {
        if (currentUser.user.role !== 'admin') {
            info("You haven't permission in this page")
            return redirect.push('/results')
        }
        clearIds()
        reqRed('/userLists').then((e) => {
            setUsers(() => e)
        })
    }, [updateList])

    const changeStatus = async (e) => {
        const ids = usersId.join(',')
        await reqUpdate(`updateStatus?ids=${ids}&status=${e.target.name}`)
        setUpdateList((prev) => !prev)
    }

    return (
        <div>
            <button
                onClick={changeStatus}
                name="true"
                className="btn btn-success mt-2"
            >
                Change Active
            </button>
            <button
                onClick={changeStatus}
                name="false"
                className="btn btn-danger mt-2"
            >
                Change InActive
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
        usersId: state.user.usersID,
    }
}

const mapDispatchToProps = {
    clearIds,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
