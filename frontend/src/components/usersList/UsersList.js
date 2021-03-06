import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { clearIds } from './../redux/actions'
import { reqRed, reqUpdate } from '../../api/api'
import { info } from '../../notification/notification'
import UserCard from './UserCard'

function UsersList({ currentUser, usersId, clearIds }) {
    const redirect = useHistory()
    const [updateList, setUpdateList] = useState(false)
    const [users, setUsers] = useState([])
    if (currentUser.user.role !== 'admin') {
        info("You haven't permission in this page")
        redirect.push('/results')
    }

    useEffect(() => {
        clearIds()
        reqRed('/userLists').then((e) => {
            setUsers(() => e)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateList])

    const changeStatus = async (e) => {
        const ids = usersId.join(',')
        await reqUpdate(`updateStatus?ids=${ids}&status=${e.target.name}`)
        setUpdateList((prev) => !prev)
        info('Status changed')
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
                Change In-Active
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
