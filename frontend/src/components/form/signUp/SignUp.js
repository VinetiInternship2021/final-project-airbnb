import React, { useState } from 'react'
import { error, success } from './../../../notification/notiication'
import { reqCreate, reqRed } from './../../../api/api'
import { sha256 } from 'js-sha256'
import './signup.css'
export default function SignUp() {
    const [form, setForm] = useState({
        password: '',
        rePassword: '',
        firstName: '',
        lastName: '',
        email: '',
    })

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
        const data = JSON.parse(JSON.stringify(form))
        data.password = sha256(data.password)
        try {
            await reqCreate('hosts', data)
            return success('Success')
        } catch (e) {
            console.log('Messages')
            return error(e)
        }
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
                                id="hostel"
                                className="radio-light form-check-input"
                                type="radio"
                                name="type"
                            />

                            <label
                                className="form-check-label"
                                htmlFor="reg_user"
                            >
                                Reg User
                            </label>

                            <input
                                id="reg_user"
                                className="radio-light form-check-input"
                                type="radio"
                                name="type"
                            />
                        </div>
                        <br />
                        <div class="form-floating mb-3">
                            <input
                                value={form.firstName}
                                name="firstName"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                onChange={getForm}
                            />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                value={form.lastName}
                                name="lastName"
                                type="text"
                                className="form-control"
                                placeholder="Sur Name"
                                onChange={getForm}
                            />
                            <label for="floatingInput">SurName</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                value={form.email}
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="email"
                                onChange={getForm}
                            />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={form.password}
                                onChange={getForm}
                                maxLength="21"
                                minLength="6"
                            />
                            <label for="floatingInput"> Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                maxLength="21"
                                minLength="6"
                                value={form.rePassword}
                                name="rePassword"
                                type="password"
                                className="form-control"
                                onChange={getForm}
                            />
                            <label for="floatingInput">Repeat Password</label>
                        </div>
                        <button className="btn btn-danger">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
