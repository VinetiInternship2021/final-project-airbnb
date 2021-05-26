import React, { useState } from 'react'
import { connect } from 'react-redux'
import { reqDelete, deleteImgRails } from './../../api/api'
import Swal from 'sweetalert2'
import Slider from '../slider/Slider'
import ModalPop from './Modal'

const MyApartmentCard = ({ data, currentUser }) => {
    const [load, setLoad] = useState(true)
    let { title, id, guests, beds, description, rooms, img_lists } = data

    const deleteProperty = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `${load ? 'Yes, delete it!' : 'Loading...'}`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoad((prev) => !prev)
                await deleteImgRails('img_lists', img_lists, currentUser.token)
                await reqDelete('properties', id, currentUser.token)
                setLoad((prev) => !prev)
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
            }
        })
    }
    return (
        <div className="card mt-3 pb-4">
            <h2 className="card-title container"> {title} </h2>
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
                            style={{ marginLeft: '10px' }}
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
