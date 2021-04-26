import React, { useState } from 'react'
// import { sha256 } from 'js-sha256'
import './signup.css'
export default function SignUp() {
    const [form, setForm] = useState({})

    return (
        <div>
            <form>
                <div className="sign_up_container">
                    <div className="sign_up_form">
                        <br />
                        <div className="radio_btn">
                            <label htmlFor="hostel">Hostel</label>
                            <input
                                id="hostel"
                                className="radio-light"
                                type="radio"
                                name="type"
                            />

                            <label htmlFor="reg_user">Reg User</label>

                            <input
                                id="reg_user"
                                className="radio-light"
                                type="radio"
                                name="type"
                            />
                        </div>
                        <br />
                        <input className="input-group " placeholder="Name" />
                        <input
                            className="input-group "
                            placeholder="Sur Name"
                        />
                        <input className="input-group " placeholder="mail" />
                        <input
                            className="input-group "
                            placeholder="password"
                        />
                        <input
                            className="input-group "
                            placeholder="repeatPassword"
                        />
                        <button className="btn btn-danger">Sign up </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
