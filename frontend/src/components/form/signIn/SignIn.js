import React, { useState } from 'react'
import { createUser } from './../../redux/actions'
import { connect } from 'react-redux'
import { reqCreate } from './../../../api/api'
import Swal from 'sweetalert2'
import Spinner from 'react-bootstrap/Spinner'
import './signin.css'
import { useHistory } from 'react-router'
import { error, success } from '../../../notification/notiication'
function SignIn({ currentUser, createUser }) {
    const [load, setLoad] = useState(true)
    const redirect = useHistory()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    function handleInputChange(e) {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    async function loginUser(e) {
        e.preventDefault()
        setLoad((prev) => !prev)
        const user = await reqCreate('/login', form) //fetch to login or create user
        if (!user.user.isActive) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your account deactivated by admins!',
                footer: `<a href=''>Write a message to support</a>`,
            })
            return setLoad((prev) => !prev)
        }
        if (!user.user) {
            setLoad((prev) => !prev)
            return Object.values(user).forEach((msg) => {
                //error handle
                error(msg)
            })
        }
        createUser(user) //add in redux store
        redirect.push('/results') //React Router redirect
        setLoad((prev) => !prev)
        success('Log in ') //notification
    }

    if (currentUser) {
        redirect.push('/results')
    }

    return (
        <div className="signIncontainer">
            <div className="siginForm">
                <form onSubmit={loginUser}>
                    <div className="radio_btn">
                        <label htmlFor="regular">Regular user</label>
                        <input
                            defaultChecked="true"
                            onChange={handleInputChange}
                            type="radio"
                            value="reg"
                            name="role"
                            id="regular"
                        />
                        <label htmlFor="host">Host user</label>
                        <input
                            onChange={handleInputChange}
                            type="radio"
                            value="host"
                            name="role"
                            id="host"
                        />
                    </div>

                    <div className="form-floating mb-3 mt-2">
                        <input
                            data-cy="email"
                            onChange={handleInputChange}
                            value={form.email}
                            type="email"
                            name="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Name"
                        />
                        <label htmlFor="floatingInput">email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            data-cy="password"
                            onChange={handleInputChange}
                            value={form.password}
                            minLength="6"
                            maxLength="21"
                            name="password"
                            type="password"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingInput">password</label>
                    </div>

                    <button
                        data-cy="saignin"
                        className="btn btn-danger w-100 signBtn"
                    >
                        {load ? (
                            'Sign in'
                        ) : (
                            <>
                                <Spinner animation="border" role="status" />
                                <span className="sr-only">Loading...</span>
                            </>
                        )}{' '}
                    </button>
                    <br />
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {
    createUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
