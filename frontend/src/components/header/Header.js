import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'
import HeadersBtn from './headerBtn/HeadersBtn'
import logo from './img/airbnbnbnb.png'

function Header({ state }) {
    return (
        <nav className="navbar navbar-dark bg-dark justify-content-between header">
            <Link className="navbar-brand" to="/">
                <img
                    alt="Low connection"
                    style={{ width: '200px' }}
                    src={logo}
                />
            </Link>
            <div className="form-inline">
                <HeadersBtn />
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

export default connect(mapStateToProps)(Header)
