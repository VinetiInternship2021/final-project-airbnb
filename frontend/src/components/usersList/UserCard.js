import React from 'react'
import { addIds, removeIds } from './../redux/actions'
import { connect } from 'react-redux'

function UserCard({ addIds, removeIds, users }) {
    const { id, firstName, lastName, email, isActive, role } = users

    const appendIds = (e) => {
        if (e.target.checked) {
            addIds(id)
        } else {
            removeIds(id)
        }
    }
    return (
        <div
            className={`card p-3 d-flex flex-row align-items-center mt-1 border ${
                isActive ? 'border-success' : 'border-danger'
            }`}
        >
            <input type="checkbox" onClick={appendIds} />
            <div className="align-items-center p-sm-2 justify-content-between d-flex w-100">
                <h5 className="card-title">id {id}</h5>
                <h5 className="card-title">{firstName + lastName}</h5>
                <h5 className="card-title">Status {isActive}</h5>
                <h5>Type: {role}</h5>
                <h5>email: {email}</h5>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { addIds, removeIds }

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
