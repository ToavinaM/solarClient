import React, { useState } from 'react';
import { Button, Col, Modal, Row, Form, FloatingLabel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import ServiceTicket from '../Ticket/service';

import './style.css';
//date
// import DatePicker from 'react-date-picker'
import Swal from 'sweetalert2';
import useSound from 'use-sound';
import Upload from '../Upload/Upload';
// import create from '../sound/create.mp3';
const options = [
    { id: 1, name: "Bas" },
    { id: 2, name: "Moyen" },
    { id: 3, name: "Urgent" },
];


export default function ModalAddTache({ handleSave }) {
    //sound
    // const [play] = useSound(create, { volume: 1 });
    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //formulaire
    const [titre, settitre] = useState(null);
    const [description, setdescription] = useState(null);
    //data generer
    //function
    const handleSaveLocal = () => {
        let data = {
            "title": titre,
            "description": description,
            "user": {
                "id": 2 //this is yet static
            }
        }
        console.log(data);
        ServiceTicket.saveTicket(data)
            .then(rep => {
                console.log('ticket save', rep);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <>

            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-end`}>
                        <strong>Ajout Tache</strong>.
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
                        <Upload></Upload>
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
