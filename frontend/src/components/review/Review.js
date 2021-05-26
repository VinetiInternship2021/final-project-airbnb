import React, { useState } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import ReactStars from 'react-rating-stars-component'
import { reqCreateToken } from '../../api/api'
import Swal from 'sweetalert2'

const Review = (props) => {
    const [form, setForm] = useState({
        rate: -1,
        title: '',
        description: '',
        property_id: props.property.id,
        user_id: props.currentUser.user.id,
    })
    const handleFormChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const rate = (newRating) => {
        form.rate = newRating
    }

    const addReview = (e) => {
        e.preventDefault()
        return reqCreateToken('add-review', form, props.currentUser.token).then(
            (res) => {
                form.rate = -1
                if (res.id) {
                    props.onHide()
                    alert('Thank you for your feedback!')
                    window.location.reload()
                } else {
                    if (res.errors) {
                        let errors = ''
                        Object.entries(res.errors).forEach((msg) => {
                            errors += msg[0] + ' ' + msg[1].join(' ') + '\n'
                        })
                        Swal.fire({
                            icon: 'error',
                            title: 'Hey!',
                            text: errors,
                        })
                    } else {
                        const errorMsg = res.exception.split('>')[1]
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: errorMsg || 'Something went wrong',
                        })
                    }
                }
            }
        )
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ opacity: 1 }}
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
                <div className="container">
                    <form onSubmit={addReview} className="row">
                        <label>
                            <input
                                required
                                name="title"
                                placeholder="Title"
                                onChange={handleFormChange}
                                className="w-100"
                            ></input>
                        </label>
                        <br />
                        <br />
                        <label>
                            <textarea
                                className="w-100"
                                required
                                name="description"
                                cols="90"
                                rows="7"
                                placeholder="Tell us about your experience in this property."
                                onChange={handleFormChange}
                            />
                        </label>
                        <button className="btn btn-danger">Submit</button>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return {
        property: state.user.propID[0],
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Review)
