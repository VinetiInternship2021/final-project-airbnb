import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { reqUpdate } from '../../api/api'
import { error, success } from '../../notification/notiication'

const ModalPop = ({ buttonLabel, className, openModal, data, currentUser }) => {
    const [form, setForm] = useState(data)
    const [modal, setModal] = useState(openModal)
    const toggle = () => setModal(!modal)

    const handleChangeFrom = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const updateProperty = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const update = await reqUpdate(
                    `properties/${data.id}`,
                    form,
                    currentUser.token
                )
                if (!update.id) {
                    return Object.entries(update).forEach((msg) => {
                        error(msg[0] + msg[1])
                    })
                }
                toggle()
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
        console.log(form)
    }

    return (
        <div>
            <Button color="warning" onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit Property</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label for="title">Title</label>
                        <input
                            onChange={handleChangeFrom}
                            name="title"
                            value={form.title}
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="emailHelp"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <select
                            onChange={handleChangeFrom}
                            name="propType"
                            value={form.propType}
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option value="apartment"> Apartment</option>
                            <option selected value="room">
                                Room
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="Address">Address</label>
                        <input
                            onChange={handleChangeFrom}
                            name="address"
                            value={form.address}
                            type="text"
                            className="form-control"
                            id="Address"
                            aria-describedby="emailHelp"
                            placeholder="Address"
                        />
                    </div>
                    <div className="form-group">
                        <label for="Beds">Beds</label>
                        <input
                            onChange={handleChangeFrom}
                            name="beds"
                            value={form.beds}
                            type="number"
                            min="1"
                            max="10"
                            className="form-control"
                            id="Beds"
                            aria-describedby="emailHelp"
                            placeholder="Beds"
                        />
                    </div>
                    <div className="form-group">
                        <label for="Rooms">Rooms</label>
                        <input
                            onChange={handleChangeFrom}
                            name="rooms"
                            value={form.rooms}
                            type="number"
                            min="1"
                            max="10"
                            className="form-control"
                            id="Rooms"
                            aria-describedby="emailHelp"
                            placeholder="Rooms"
                        />
                    </div>
                    <div className="form-group">
                        <label for="Guests">Guests</label>
                        <input
                            onChange={handleChangeFrom}
                            name="guests"
                            value={form.guests}
                            type="number"
                            min="1"
                            max="10"
                            className="form-control"
                            id="Guests"
                            aria-describedby="emailHelp"
                            placeholder="Guests"
                        />
                    </div>
                    <div className="form-group">
                        <label for="Description">Description</label>
                        <textarea
                            onChange={handleChangeFrom}
                            name="description"
                            value={form.description}
                            type="text"
                            className="form-control"
                            id="Description"
                            aria-describedby="emailHelp"
                            placeholder="Description"
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={updateProperty} color="primary">
                        Save changes
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser.status[0],
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPop)
