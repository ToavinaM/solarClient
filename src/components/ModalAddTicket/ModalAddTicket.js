import React, { useState } from 'react';
import { Button, Col, Modal, Row, Form, FloatingLabel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './style.css';
//date
// import DatePicker from 'react-date-picker'
// import create from '../sound/create.mp3';
export default function ModalAddTache({ handleSave, user, mother }) {
    //sound;
    //modal
    // console.log('MOOOOTHER', mother);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //formulaire
    const [titre, settitre] = useState(null);
    const [description, setdescription] = useState(null);
    const [files, setfiles] = useState([]);
    //data generer
    //function
    const handleSaveLocal = () => {
        let data = {
            "title": titre,
            "description": description,
            "users": {
                "id": user.id //this is yet static
            },
            "mother": {
                "id": mother !== undefined ? mother.id : null
            }
        }
        // console.log('SSSSASASAS', data);
        let formdata = new FormData();
        formdata.set('fileSolar', files);
        handleSave({ data, files });
        handleClose();
    }
    return (
        <>
            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-end`}>
                        <strong>Add Ticket</strong>.
                    </Tooltip>
                }
            >
                <img onClick={handleShow} className='logoAdd' src='../ajoutTask.jpg' />
            </OverlayTrigger>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-success' closeButton>
                    <Modal.Title style={{ color: 'white' }}>Add new Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label required>Title *</Form.Label>
                                <Form.Control required onChange={(rep) => { settitre(rep.target.value) }} rows={3} />
                            </Form.Group>
                        </Form.Group>

                        <FloatingLabel controlId="floatingTextarea2" label="Déscription*">
                            <Form.Control onChange={(rep) => { setdescription(rep.target.value) }} as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                        </FloatingLabel>
                        <br></br>
                        <div className="form-group">
                            <input onChange={(rep) => { setfiles(rep.target.files) }} type="file" multiple />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleSaveLocal}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
