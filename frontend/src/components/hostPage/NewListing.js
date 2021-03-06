import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    imgUploadToServer,
    reqCreateToken,
    uploadImgRails,
} from './../../api/api'
import Spinner from 'react-bootstrap/Spinner'
import { error, info, success } from '../../notification/notification'

import './NewListing.css'
import Preview from './Preview'
function NewListing({ currentUser }) {
    const redirect = useHistory()
    const [load, setLoad] = useState(false)
    const [imgList, setImgList] = useState([])
    const [imgsPreview, setImgPreview] = useState([])
    const [form, setForm] = useState({
        title: '',
        propType: 'room',
        address: '',
        currency: 'USD',
        price: '',
        beds: '',
        rooms: '',
        guests: '',
        description: '',
        user_id: currentUser[0]?.user.id,
    })

    if (!currentUser[0]?.user.role) {
        redirect.push('/')
        return info('For create property register as hosts')
    } else if (currentUser[0].user.role !== 'host') {
        redirect.push('/find')
        return info('Create property can only hosts')
    }

    const handleGetImage = (e) => {
        Array.from(e.target.files).forEach((el) => {
            setImgPreview((prev) => [...prev, URL.createObjectURL(el)])
        })
        setImgList((prev) => [...prev, ...e.target.files])
    }

    const handleFormaChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    function requestFilter(imgResponse) {
        const arr = []
        imgResponse.forEach(({ data }) => {
            arr.push(data.display_url)
        })
        return arr
    }

    const createNewProperty = async (e) => {
        e.preventDefault()
        setLoad((prev) => !prev) //btn loader on
        const newProp = await reqCreateToken(
            'create_property',
            form,
            currentUser[0].token
        ) //create property
        if (!newProp.id) {
            Object.entries(newProp).forEach((msg) => {
                error(msg[0] + ' ' + msg[1].join(' '))
            })
            return setLoad((prev) => !prev)
        }
        const backData = await imgUploadToServer(imgList) //img upload to imgbb
        const filtered = requestFilter(backData) // filler imgbb data only urls
        await uploadImgRails(
            'img_lists',
            filtered,
            newProp.id,
            currentUser[0].token
        ) //add to rails table ;)
        success('Property successfully created')
        redirect.push('/my_apartments')
        setLoad((prev) => !prev) //btn loader off
    }

    return (
        <div className="listingContainer ">
            <form onSubmit={createNewProperty}>
                <h1>Add a New Listing </h1>
                <div className="listingForm shadow-sm ">
                    <div className="form-floating mb-1 w-100">
                        <input
                            onChange={handleFormaChange}
                            name="title"
                            type="text"
                            className="form-control "
                            id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <select
                        onChange={handleFormaChange}
                        name="propType"
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option value="apartment"> Apartment</option>
                        <option selected value="room">
                            Room
                        </option>
                    </select>
                    <div className="form-floating mb-1 mt-2 w-100">
                        <input
                            onChange={handleFormaChange}
                            name="address"
                            type="text"
                            className="form-control "
                            id="floatingInput"
                        />
                        <label htmlFor="floatingInput">Address</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <input
                            onChange={handleFormaChange}
                            name="price"
                            min="1"
                            type="number"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Price /USD"
                        />
                        <label htmlFor="floatingInput">Price /USD</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <input
                            onChange={handleFormaChange}
                            name="beds"
                            min="1"
                            max="10"
                            type="number"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Beds"
                        />
                        <label htmlFor="floatingInput">Beds</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <input
                            onChange={handleFormaChange}
                            min="1"
                            max="10"
                            type="number"
                            id="quantity"
                            name="rooms"
                            className="form-control "
                            placeholder="Rooms"
                        />
                        <label htmlFor="floatingInput">Rooms</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <input
                            onChange={handleFormaChange}
                            min="1"
                            max="10"
                            type="number"
                            id="quantity"
                            name="guests"
                            className="form-control "
                            placeholder="Guests"
                        />
                        <label htmlFor="floatingInput">Guests</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <textarea
                            onChange={handleFormaChange}
                            min="8"
                            max="256"
                            type="text"
                            id="description"
                            name="description"
                            className="form-control "
                            placeholder="description"
                        />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="mb-3">
                        <input
                            onChange={handleGetImage}
                            accept="image/png, image/jpeg"
                            className="form-control w-100"
                            id="formFileSm"
                            type="file"
                            multiple
                            required
                        />
                    </div>

                    <br />
                    <button className="btn btn-danger w-100">
                        {!load ? (
                            'Submit'
                        ) : (
                            <>
                                <Spinner animation="border" role="status" />
                                <span className="sr-only">Loading...</span>
                            </>
                        )}
                    </button>
                </div>
            </form>

            <Preview
                imgList={imgsPreview}
                title={form.title}
                price={form.price}
                propType={form.propType}
                address={form.address}
                beds={form.beds}
                rooms={form.rooms}
                guests={form.guests}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status,
    }
}
export default connect(mapStateToProps, null)(NewListing)
