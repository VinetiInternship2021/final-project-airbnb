import React from 'react'
import { addIds, removeIds } from './../redux/actions'
import { connect } from 'react-redux'

function UserCard({ addIds, removeIds, user }) {
    user = { id: 1 }
    let id = 1
    const appendIds = (e) => {
        if (e.target.checked) {
            addIds(id)
            id++
        } else {
            // removeIds(id)
        }
    }
    return (
        <div className="card p-3 d-flex flex-row align-items-center">
            <input type="checkbox" onClick={appendIds} />
            <div className="align-items-center p-sm-2 justify-content-evenly d-flex w-100">
                <h5 className="card-title">id 21</h5>
                <h5 className="card-title">Jhon Malkhovich</h5>
                <h5 className="card-title">Status false</h5>
                <h5>Type: Host</h5>
                <h5>email: blabla@gmail.com</h5>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { addIds, removeIds }

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
