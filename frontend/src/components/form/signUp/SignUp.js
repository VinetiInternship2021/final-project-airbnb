import React, { useState } from 'react'
import { error } from './../../../notification/notiication'
// import { sha256 } from 'js-sha256'
import './signup.css'
export default function SignUp() {
    const [form, setForm] = useState({
        password: '',
        rePassword: '',
    })

    function validatePassword(e) {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    function creatUser(e) {
        e.preventDefault()
        if (form.password === form.rePassword) {
            return error('Password should not be empty')
        }
        if (form.password.length < 1) {
            return error("Password don't match")
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
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Name"
                            />
                            <label for="floatingInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="Sur Name"
                            />
                            <label for="floatingInput">SurName</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="email"
                            />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="floatingInput"
                                name="password"
                                value={form.password}
                                onChange={validatePassword}
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
                                id="floatingInput"
                                onChange={validatePassword}
                            />
                            <label for="floatingInput">Repeat Password</label>
                        </div>

                        <button className="btn btn-danger">Sign up </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
