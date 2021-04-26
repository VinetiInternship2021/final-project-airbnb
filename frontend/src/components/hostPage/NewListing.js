import './NewListing.css'
export default function NewListing() {
    return (
        <div className="listingContainer ">
            <form>
                <div className="listingForm shadow-sm">
                    <h1>Add a New Listing </h1>
                    <div class="form-floating mb-1 w-100">
                        <input
                            type="text"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Listing name"
                        />
                        <label for="floatingInput">Listing name</label>
                    </div>

                    <select
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option>Appartment</option>
                        <option>House</option>
                        <option>Hostel</option>
                    </select>
                    <div class="form-floating mb-1 mt-2 w-100">
                        <input
                            type="text"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Listing name"
                        />
                        <label for="floatingInput">Address</label>
                    </div>
                    <div class="form-floating mb-1  w-100">
                        <input
                            min="1"
                            type="number"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Price /USD"
                        />
                        <label for="floatingInput">Price /USD</label>
                    </div>
                    <div class="form-floating mb-1  w-100">
                        <input
                            min="1"
                            max="10"
                            type="number"
                            className="form-control "
                            id="floatingInput"
                            placeholder="Beds"
                        />
                        <label for="floatingInput">Beds</label>
                    </div>
                    <div class="form-floating mb-1  w-100">
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
                        <label for="floatingInput">Rooms</label>
                    </div>
                    <div class="form-floating mb-1  w-100">
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
                        <label for="floatingInput">Guests</label>
                    </div>
                    <div className="mb-3">
                        <label for="formFileSm" class="form-label">
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
