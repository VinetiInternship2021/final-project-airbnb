import "./NewListing.css";
export default function NewListing() {
  return (
    <div className="listingContainer">
      <form>
        <div className="listingForm">
          <h1>Add a New Listing </h1>
          <input type="text" name="propName" placeholder=" Listing Name" />
          <select>
            <option>Appartment</option>
            <option>House</option>
            <option>Hostel</option>
          </select>
          <input type="text" name="adress" placeholder="Address" />
          <input name="price" type="number" placeholder="Price /USD" min="1" />
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="10"
            placeholder="Beds"
          />
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="10"
            placeholder="Rooms"
          />
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="15"
            placeholder="Guests"
          />
          <br />
          <button className="btn btn-danger w-100">Submit</button>
        </div>
      </form>
    </div>
  );
}
