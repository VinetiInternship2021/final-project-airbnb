import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createUser } from '../../redux/actions'

import { useHistory } from 'react-router-dom'
import { success } from '../../../notification/notiication'

const HeadersBtn = ({ isLoggedIn, role, createUser }) => {
    const redirect = useHistory()
    function logOut() {
        createUser()
        redirect.push('/')
        success('Log out')
    }

    return (
        <>
            {!isLoggedIn.length || !isLoggedIn[0] ? (
                <>
                    <Link
                        className="btn btn-success reg"
                        type="submit"
                        to="/sign_in"
                    >
                        Sign in
                    </Link>
                    <Link
                        className="btn btn-warning reg"
                        type="submit"
                        to="/sign_up"
                    >
                        Sign up
                    </Link>
                </>
            ) : role === 'host' ? (
                <>
                    <Link
                        className="btn btn-success reg"
                        type="submit"
                        to="/sign_in"
                    >
                        Add new
                    </Link>
                    <Link
                        className="btn btn-success reg"
                        to="/"
                        onClick={logOut}
                    >
                        Log out
                    </Link>
                </>
            ) : (
                <>
                    <Link
                        className="btn btn-success reg"
                        type="submit"
                        to="/sign_in"
                    >
                        My Apartment
                    </Link>
                    <Link
                        className="btn btn-success reg"
                        to="/"
                        onClick={logOut}
                    >
                        Log out
                    </Link>
                </>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.currentUser.status,
        role: state.user.currentUser?.status[0]?.role,
    }
}
const mapDispatchToProps = {
    createUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeadersBtn)
