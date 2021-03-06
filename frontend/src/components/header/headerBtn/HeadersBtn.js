import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser } from '../../redux/actions'

import { useHistory } from 'react-router-dom'
import { success } from '../../../notification/notification'

const HeadersBtn = ({ currentUser, createUser }) => {
    const redirect = useHistory()
    function logOut() {
        createUser()
        redirect.push('/')
        success('Log out')
    }

    if (!currentUser.status.length || !currentUser.status[0]) {
        return (
            <>
                <Link className="btn btn-light reg" type="submit" to="/sign_in">
                    Sign in
                </Link>
                <Link
                    className="btn btn-danger reg"
                    type="submit"
                    to="/sign_up"
                >
                    Sign up
                </Link>
            </>
        )
    }
    if (currentUser.status[0].user.role === 'host') {
        return (
            <>
                <Link className="btn btn-light reg" type="submit" to="/results">
                    <img
                        width="25"
                        src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
                    />
                </Link>
                <Link className="btn btn-light reg" type="submit" to="/add_new">
                    Add new
                </Link>
                <Link
                    className="btn btn-light reg"
                    type="submit"
                    to="/my_apartments"
                >
                    My Apartments
                </Link>
                <Link className="btn btn-danger reg" to="/" onClick={logOut}>
                    Log out
                </Link>
            </>
        )
    }

    if (currentUser.status[0].user.role === 'reg') {
        return (
            <>
                <Link className="btn btn-light reg" type="submit" to="/results">
                    <img
                        width="25"
                        src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
                    />
                </Link>
                <Link
                    className="btn btn-light reg"
                    type="submit"
                    to="/order_list"
                >
                    My Orders
                </Link>
                <Link className="btn btn-danger reg" to="/" onClick={logOut}>
                    Log out
                </Link>
            </>
        )
    }
    if (currentUser.status[0].user.role === 'admin') {
        return (
            <>
                <Link className="btn btn-light reg" to="/users">
                    Users
                </Link>
                <Link className="btn btn-danger reg" to="/" onClick={logOut}>
                    Log out
                </Link>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user?.currentUser,
    }
}
const mapDispatchToProps = {
    createUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadersBtn)
