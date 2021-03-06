import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from './../../redux/actions'
import { error } from '../../../notification/notification'
import Spinner from 'react-bootstrap/Spinner'
import { reqCreate } from './../../../api/api'

import Swal from 'sweetalert2'
import './signup.css'
function SignUp({ createUser, currentUser }) {
    const [load, setLoad] = useState(true)

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        isActive: false,
        role: 'host',
        password: '',
        rePassword: '',
    })

    function getForm(e) {
        if (e.target.type === 'radio') {
            e.target.defaultChecked = true
            return setForm((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
            }))
        }
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    async function setUser(e) {
        e.preventDefault()
        setLoad((prev) => !prev) // bootstrap spinner for btn  turn on
        if (!form.password.length) {
            setLoad((prev) => !prev)
            return error('Password should not be empty')
        }

        if (form.password !== form.rePassword) {
            setLoad((prev) => !prev)
            return error("Password don't match")
        }

        const user = await reqCreate('users', form)
        if (!user.user) {
            Object.entries(user).forEach((msg) => {
                error(msg[0] + ' ' + msg[1].join(' '))
            })
            return setLoad((prev) => !prev)
        }
        setLoad((prev) => !prev) // bootstrap spinner for btn  turn on
        Swal.fire({
            icon: 'warning',
            title: 'Just a sec!',
            text: 'Our admins will be activate your profile ASAP!',
        })
        setForm((prev) => ({
            firstName: '',
            lastName: '',
            email: '',
            isActive: false,
            role: 'host',
            password: '',
            rePassword: '',
        }))
    }

    return (
        <div>
            <form onSubmit={setUser}>
                <div className="sign_up_container">
                    <div className="sign_up_form">
                        <br />
                        <h1 className="text-center">Sign Up</h1>
                        <div className="radio_btn">
                            <label
                                className="form-check-label"
                                htmlFor="hostel"
                            >
                                Host
                            </label>
                            <input
                                data-cy="host"
                                defaultChecked="true"
                                onChange={getForm}
                                value="host"
                                id="hostel"
                                className="radio-light form-check-input"
                                type="radio"
                                name="role"
                            />

                            <label
                                className="form-check-label"
                                htmlFor="reg_user"
                            >
                                Reg User
                            </label>

                            <input
                                data-cy="reg"
                                onChange={getForm}
                                value="reg"
                                id="reg_user"
                                className="radio-light form-check-input"
                                type="radio"
                                name="role"
                            />
                        </div>
                        <br />
                        <div className="form-floating mb-3">
                            <input
                                data-cy="firstName"
                                value={form.firstName}
                                name="firstName"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                onChange={getForm}
                            />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                data-cy="lastName"
                                value={form.lastName}
                                name="lastName"
                                type="text"
                                className="form-control"
                                placeholder="Sur Name"
                                onChange={getForm}
                            />
                            <label htmlFor="floatingInput">SurName</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                data-cy="email"
                                value={form.email}
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="email"
                                onChange={getForm}
                            />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                data-cy="password"
                                type="password"
                                className="form-control"
                                name="password"
                                value={form.password}
                                onChange={getForm}
                                maxLength="21"
                                minLength="6"
                            />
                            <label htmlFor="floatingInput"> Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                data-cy="rePassword"
                                maxLength="21"
                                minLength="6"
                                value={form.rePassword}
                                name="rePassword"
                                type="password"
                                className="form-control"
                                onChange={getForm}
                            />
                            <label htmlFor="floatingInput">
                                Repeat Password
                            </label>
                        </div>

                        <button
                            data-cy="Sign_up"
                            className="btn btn-danger signBtn"
                        >
                            {load ? (
                                'Sign up'
                            ) : (
                                <>
                                    <Spinner animation="border" role="status" />
                                    <span className="sr-only">Loading...</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
