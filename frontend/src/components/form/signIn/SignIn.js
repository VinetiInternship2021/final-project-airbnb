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

                    <input
                        className="input-group"
                        type="mail"
                        placeholder="Mail"
                    />

                    <input
                        className="input-group "
                        type="password"
                        placeholder="password"
                    />
                    <br />
                    <button className="btn btn-danger w-100">Sign in </button>
                    <br />
                </form>
            </div>
        </div>
    )
}
