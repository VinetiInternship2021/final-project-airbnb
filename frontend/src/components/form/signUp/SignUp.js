import React, { useState, useRef } from 'react'
import { error, success } from './../../../notification/notiication'
import { reqCreate } from './../../../api/api'
import './signup.css'
export default function SignUp() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        isActive: true,
        role: '',
        password: '',
        rePassword: '',
    })

    function checked(e) {
        e.preventDefault()
        e.target.defaultChecked = true
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    function getForm(e) {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    async function creatUser(e) {
        e.preventDefault()
        if (form.password.length < 1) {
            return error('Password should not be empty')
        }
        if (form.password !== form.rePassword) {
            return error("Password don't match")
        }
        const user = await reqCreate('aper')
    }

    return (
        <div>
            <form onSubmit={creatUser}>
                <div className="sign_up_container">
                    <div className="sign_up_form">
                        <br />
                        <div className="radio_btn">
                            <label
                                className="form-check-label"
                                htmlFor="hostel"
                            >
                                Hostel
                            </label>
                            <input
                                defaultChecked="true"
                                onChange={checked}
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
                                onChange={checked}
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
                        <button className="btn btn-danger">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
