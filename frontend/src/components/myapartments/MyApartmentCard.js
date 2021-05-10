import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Slider from '../slider/Slider'
import ModalPop from './Modal'

const list = [
    {
        src: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
    },
    {
        src: 'https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg',
    },
]

const MyApartmentCard = ({ data }) => {
    const { title, id, guests, beds, description, rooms, img_lists } = data
    const [ulImg, setUrlImg] = useState()
    const deleteApartment = () => {}
    useEffect(() => {}, [data])
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
                        <ModalPop buttonLabel="Edit" />
                        <button
                            onClick={deleteApartment}
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyApartmentCard)
