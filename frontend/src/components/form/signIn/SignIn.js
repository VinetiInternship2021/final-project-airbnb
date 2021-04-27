import React from 'react'
import './signin.css'
export default function SignIn() {
    return (
        <div class="signIncontainer">
            <div className="siginForm">
                <form>
                    <div className="radio_btn">
                        <label htmlFor="regular">Regular user</label>
                        <input type="radio" name="type" id="regular" />
                        <label htmlFor="host">Host user</label>
                        <input type="radio" name="type" id="host" />
                    </div>

                    <div class="form-floating mb-3 mt-2">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Name"
                        />
                        <label for="floatingInput">email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            minLength="6"
                            maxLength="21"
                            type="password"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Password"
                        />
                        <label for="floatingInput">password</label>
                    </div>

                    <button className="btn btn-danger w-100">Sign in </button>
                    <br />
                </form>
            </div>
        </div>
    )
}
