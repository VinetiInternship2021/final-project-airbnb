import React, { useState } from 'react'
import { connect } from 'react-redux'
import Slider from '../slider/Slider'

const list = [
    {
        src:
            'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    },
    {
        src:
            'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
    },
]

const MyApartmentCard = (props) => {
    const [edit, setEdit] = useState(false)
    const [form, setForm] = useState({
        title: 'Good home in yerevan',
        id: 45,
        guests: 8,
        beds: 7,
        rooms: 1,
        description: 'God home in yerevan Best place ever',
    })
    const editApartment = (e) => {
        setEdit((prev) => !prev)
        console.log(e.target)
    }
    const deleteApartment = (e) => {
        console.log(e.target)
    }

    return (
        <div className="card">
            <h5 className="card-title"> {form.title} </h5>
            <div className="card-body d-flex flex-row">
                <div className="w-25">
                    <Slider imgList={list} />
                </div>
                <div className="p-2 d-flex flex-column w-50">
                    {!edit ? (
                        <>
                            <span>id: {form.id}</span>
                            <span>Guests - {form.guests}</span>
                            <span>Beds - {form.beds}</span>

                            <span>Rooms - {form.rooms}</span>
                            <p>
                                <b>Description</b> | {form.description}
                            </p>
                        </>
                    ) : (
                        <>
                            <input className="form-control w-100" />
                            <input className="form-control  w-100" />
                            <input className="form-control w-100" />
                            <input className="form-control w-100" />
                            <textarea className="form-control  w-100" />
                        </>
                    )}

                    <div>
                        {!edit ? (
                            <>
                                <button
                                    onClick={editApartment}
                                    className="btn btn-info"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={deleteApartment}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </>
                        ) : (
                            <button
                                className="btn btn-success"
                                onClick={editApartment}
                            >
                                Save changes
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartmentCard)
