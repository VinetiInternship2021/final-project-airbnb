import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import ReactStars from "react-rating-stars-component"
import { reqCreateToken } from '../../api/api'

const Review = (props) => {
  const [form, setForm] = useState({
      rate: 1,
      title: '',
      description: '',
      property_id: props.property.id,
      user_id: props.currentUser.user.id
  })
  const handleFormChange = (e) => {
    setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }))
  }
  let reviewContent = {}
  const rate = (newRating) => {
    reviewContent.rate = newRating
  }

  const addReview = (e) => {
    e.preventDefault()
    return reqCreateToken(
        'add-review',
        form,
        props.currentUser.token)
    .then(res => console.log('~res~', res))
    .catch(err => alert(err.message))
  }

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
          onChange={rate}
          size={24}
          activeColor="#ffd700"
        />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={addReview}>
          <label>
            <input
            name="title"
            placeholder="Title"
            onChange={handleFormChange}>
            </input>
          </label>
          <br/>
          <br/>
          <br/>
          <label>
            <textarea
            name="description"
            cols="50" rows="7"
            placeholder="Tell us about your experience in this property."
            onChange={handleFormChange}
            />
          </label>
          <button onClick={props.onHide}>Submit</button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        
      </Modal.Footer> */}
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    property: state.user.propID[0],
    currentUser: state.user.currentUser.status[0],
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
