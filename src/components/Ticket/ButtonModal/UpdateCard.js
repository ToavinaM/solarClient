import React, { useState } from 'react';
// import { BsPlusCircle } from "react-icons/bs";
import { Button, Modal, Form, OverlayTrigger, Tooltip, FloatingLabel } from 'react-bootstrap';

export default function UpdateCard({ handleUpdate, tache, retard }) {
  // console.log('RRRRRRRRRRRr', retard);
  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //formulaire
  const [titre, settitre] = useState(null);

  const handleSaveLocal = () => {
    alert('test');
  }

  return (
    <>
      <OverlayTrigger
        key='top'
        placement='top'
        overlay={
          <Tooltip id={`tooltip-top`}>
            <strong>Update</strong>.
          </Tooltip>
        }
      >

        <img onClick={handleShow} className='logos' src='../edit.png' />
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
                <Form.Label >Title *</Form.Label>
                <Form.Control required rows={3} />
              </Form.Group>
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Déscription*">
              <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
            </FloatingLabel>
            <br></br>
            {/* <Upload></Upload> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSaveLocal}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}