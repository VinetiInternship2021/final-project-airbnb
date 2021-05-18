import React, { useState } from 'react'
import { connect } from 'react-redux'
import { reqCreateToken } from '../../api/api'
import { success } from '../../notification/notification'
import Slider from '../slider/Slider'
import Modal from 'react-bootstrap/Modal'
import ReactStars from "react-rating-stars-component";

const Order = ({ datePicker, property, currentUser }) => {
    const [modalShow, setModalShow] = React.useState(false);

    const [load, setLoad] = useState(false)
    const order = (e) => {
        setLoad((prev) => !prev)
        const data = {
            user_id: currentUser.user.id,
            property_id: property.id,
            priceNight: property.price,
            totalAmount: datePicker.duration * property.price,
            start_date: datePicker.start_date,
            end_date: datePicker.end_date,
        }
        reqCreateToken('orders', data, currentUser.token)
        setLoad((prev) => !prev)
        success('Success')
    }

    const Review = (props) => {
      setLoad((prev) => !prev)
      // const data = {
      //     user_id: currentUser.user.id,
      //     property_id: property.id
      // }
      // reqCreateToken('review', data, currentUser.token)
      
      const ratingChanged = (newRating) => {
        console.log(newRating);
      };

      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{opacity:1}}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Your review's title input here</h4>
            <p>
              And descriotion: Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={props.onHide}>Submit</button>
          </Modal.Footer>
        </Modal>
      );
    }

    return (
        <div className="d-flex justify-content-lg-center mt-4">
            <div className="card" style={{ width: '60rem' }}>
                <Slider imgList={property.img_lists} />
                <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        {property.address}
                    </h6>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Type : {property.propType}
                        </li>
                        <li className="list-group-item">
                            Rooms : {property.rooms}
                        </li>
                        <li className="list-group-item">
                            Beds : {property.beds}
                        </li>
                        <li className="list-group-item">
                            Day price : ${property.price}
                        </li>
                        <li className="list-group-item">
                            Start date: {datePicker.start_date}
                        </li>
                        <li className="list-group-item">
                            End date:{datePicker.end_date}
                        </li>
                        <li className="list-group-item">
                            Total Price: ${datePicker.duration * property.price}
                        </li>
                        <li className="list-group-item">
                            {property.description}
                        </li>
                    </ul>
                    <button
                        href="/"
                        className="btn btn-danger w-50"
                        onClick={order}
                    >
                        {!load ? 'Order' : 'Loading...'}
                    </button>
                    <button 
                        href="/"
                        class="btn btn-success w-50"
                        onClick={() => setModalShow(true)}
                    >
                        Review
                    </button>
                    <Review
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        datePicker: state.user.datePicker,
        property: state.user.propID[0],
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
