import './NewListing.css'
export default function NewListing() {
    return (
        <div className="listingContainer ">
            <form>
                <div className="listingForm shadow-sm">
                    <h1>Add a New Listing </h1>
                    <div className="form-floating mb-1 w-100">
                        <input
                            type="text"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Listing name"
                        />
                        <label htmlFor="floatingInput">Listing name</label>
                    </div>

                    <select
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option>Appartment</option>
                        <option>House</option>
                        <option>Hostel</option>
                    </select>
                    <div className="form-floating mb-1 mt-2 w-100">
                        <input
                            type="text"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Listing name"
                        />
                        <label htmlFor="floatingInput">Address</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <input
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
                            min="1"
                            max="10"
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Rooms"
                        />
                        <label htmlFor="floatingInput">Rooms</label>
                    </div>
                    <div className="form-floating mb-1  w-100">
                        <input
                            min="1"
                            max="10"
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Guests"
                        />
                        <label htmlFor="floatingInput">Guests</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFileSm" className="form-label">
                            Small file input example
                        </label>
                        <input
                            className="form-control form-control-sm"
                            id="formFileSm"
                            type="file"
                        />
                    </div>
                    <br />
                    <button className="btn btn-danger w-100">Submit</button>
                </div>
            </form>
        </div>
    )
}
