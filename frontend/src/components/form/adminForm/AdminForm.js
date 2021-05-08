import React, { useState } from 'react'
import { reqCreate } from './../../../api/api'
import { createUser } from './../../redux/actions'
import Spinner from 'react-bootstrap/Spinner'
import { connect } from 'react-redux'

export const AdminForm = ({ createUser }) => {
    const [load, setLoad] = useState(false)
    const [adminForms, setAdminForms] = useState({
        email: '',
        password: '',
    })
    const changeAdminForms = (e) => {
        setAdminForms((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const signInAsAdmin = async (e) => {
        e.preventDefault()
        setLoad((prev) => !prev)
        const admin = await reqCreate('/login', adminForms)
        console.log(admin)
        createUser(admin)
        setLoad((prev) => !prev)
    }

    return (
        <div>
            <h1 className="text-center">Admin</h1>
            <div className="d-flex justify-content-center">
                <div className="col-6">
                    <form onSubmit={signInAsAdmin}>
                        <div className="form-floating mb-3 mt-2">
                            <input
                                onChange={changeAdminForms}
                                value={adminForms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="email"
                            />
                            <label htmlFor="floatingInput">UserName</label>
                        </div>
                        <div className="form-floating mb-3 mt-2">
                            <input
                                onChange={changeAdminForms}
                                value={adminForms.password}
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="password"
                            />
                            <label htmlFor="floatingInput">Password</label>
                        </div>
                        <button className="btn btn-danger w-100">
                            {!load ? (
                                'Sign in'
                            ) : (
                                <>
                                    <Spinner animation="border" role="status" />
                                    <span className="sr-only">Loading...</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    createUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminForm)
