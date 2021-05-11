import React from 'react'
import { connect } from 'react-redux'
import { reqDelete } from './../../api/api'
import Swal from 'sweetalert2'
import Slider from '../slider/Slider'
import ModalPop from './Modal'

const MyApartmentCard = ({ data, currentUser }) => {
    let { title, id, guests, beds, description, rooms, img_lists } = data

    const deleteProperty = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await reqDelete('properties', id, currentUser.token)
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            }
        })
    }
    return (
        <div className="card">
            <h5 className="card-title"> {title} </h5>
            <div className="card-body d-flex flex-row">
                <div className="w-25">
                    <Slider imgList={img_lists} />
                </div>
                <div className="p-2 d-flex flex-column w-50">
                    <span>id: {id}</span>
                    <span>Guests - {guests}</span>
                    <span>Beds - {beds}</span>

                    <span>Rooms - {rooms}</span>
                    <p>
                        <b>Description</b> | {description}
                    </p>

                    <div className="d-flex flex-row">
                        <ModalPop buttonLabel="Edit" data={data} />
                        <button
                            onClick={deleteProperty}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartmentCard)
