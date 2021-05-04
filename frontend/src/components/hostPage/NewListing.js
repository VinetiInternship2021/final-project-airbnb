import { useState } from 'react'
import { connect } from 'react-redux'
import { info } from './../../notification/notiication'

import './NewListing.css'
import Preview from './Preview'
function NewListing() {
    const [imgList, setImgList] = useState([])
    const [form, setForm] = useState({
        title: '',
        propType: 'Room',
        address: '',
        price: '',
        beds: '',
        rooms: '',
        guests: '',
        description: '',
    })

    const handleGetImage = async (e) => {
        setImgList((prev) => [...prev, URL.createObjectURL(e.target.files[0])])
    }

    const handleFormaChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const createNewProperty = (e) => {
        e.preventDefault()
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
                        <option value="Apartment"> Apartment</option>
                        <option selected value="Room">
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
                    <div className="mb-3">
                        <label htmlFor="formFileSm" className="form-label">
                            Upload your img - max 5 / jpeg or png
                        </label>
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
                    <button className="btn btn-danger w-100">Submit</button>
                </div>
            </form>

            <Preview
                imgList={imgList}
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

export default connect()(NewListing)
