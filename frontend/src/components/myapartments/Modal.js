import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'

const ModalPop = ({ buttonLabel, className, openModal }) => {
    const [form, setForm] = useState({
        title: 'Good home in yerevan',
        id: 45,
        propType: 'room',
        address: 'Lav tun yerevanum',
        guests: 8,
        beds: 7,
        rooms: 1,
        description: 'God home in yerevan Best place ever',
    })
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
        }).then((result) => {
            if (result.isConfirmed) {
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
                        <label for="Property">Property type</label>
                        <input
                            onChange={handleChangeFrom}
                            name="propType"
                            value={form.propType}
                            type="text"
                            className="form-control"
                            id="Property"
                            aria-describedby="emailHelp"
                            placeholder="Address"
                        />
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
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <label for="Beds">Beds</label>
                        <input
                            onChange={handleChangeFrom}
                            name="beds"
                            value={form.beds}
                            type="text"
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
                            type="text"
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
                            type="text"
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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ModalPop)
