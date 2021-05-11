import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Slider from '../slider/Slider'
import ModalPop from './Modal'

const MyApartmentCard = ({ data }) => {
    let { title, id, guests, beds, description, rooms, img_lists } = data
    const [urlImg, setUrlImg] = useState([])
    const deleteApartment = () => {}
    useEffect(() => {
        img_lists = img_lists.map((el) => (el = el.imgUrl))
        setUrlImg(img_lists)
        console.log(urlImg)
    }, [data])
    return (
        <div className="card">
            <h5 className="card-title"> {title} </h5>
            <div className="card-body d-flex flex-row">
                <div className="w-25">
                    <Slider imgList={urlImg} />
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
