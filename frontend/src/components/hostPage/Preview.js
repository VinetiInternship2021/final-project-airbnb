import React, { useState } from 'react'
import { connect } from 'react-redux'
import AutoplaySlider from './../slider/Slider'

function Preview(props) {
    const {
        title,
        price,
        address,
        beds,
        rooms,
        guests,
        propType,
        imgList,
    } = props
    const [prevCover, setPrevCover] = useState(
        'https://www.airbnbsecrets.com/wp-content/uploads/2016/12/Airbnb-co-host-1132x670.jpg'
    )
    const handleCoverChange = (e) => {
        setPrevCover(imgList[e.target.name])
    }
    return (
        <div className="preview col-8">
            <h1 className="header">Preview</h1>
            <div>
                <p className="h3">Title: {title} </p>
                <div className="previewImg row col-6 shadow-lg center w-100">
                    <img
                        className="col-8 shadow-lg"
                        src={prevCover}
                        alt="chka nkar "
                    />
                    <div className="col-8 d-flex justify-content-center">
                        {imgList &&
                            imgList.map((el, index) => {
                                return (
                                    <div className="w-50" key={el}>
                                        {/* <button className="btn">x</button> */}
                                        <img
                                            onClick={handleCoverChange}
                                            key={el}
                                            name={index}
                                            className="col-8 "
                                            src={el}
                                            alt="Please upload your img"
                                        />
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <p className="h4">Pice </p>
                        <p className="h4">Address </p>
                        <p className="h4">Property type </p>
                        <p className="h4">Beds </p>
                        <p className="h4">Rooms </p>
                        <p className="h4">Guests </p>
                    </div>
                    <div className="col-5">
                        <p className="h4">: {price} $</p>
                        <p className="h4">: {address}</p>
                        <p className="h4">: {propType}</p>
                        <p className="h4">: {beds}</p>
                        <p className="h4">: {rooms}</p>
                        <p className="h4">: {guests}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        imageList: state.localImgList,
    }
}

export default connect(mapStateToProps)(Preview)
