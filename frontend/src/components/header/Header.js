import React from 'react'
import './header.css'

export default function Header() {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between header">
            <a className="navbar-brand" href="/">
                Airbnbnbnb
            </a>
            <form className="form-inline">
                <a
                    className="btn btn-success reg"
                    type="submit"
                    href="/sign_in"
                >
                    Sign in
                </a>
                <a
                    className="btn btn-warning reg"
                    type="submit"
                    href="/sign_up"
                >
                    Sign up
                </a>
            </form>
        </nav>
    )
}
