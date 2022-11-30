import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { FileViewer } from 'react-file-viewer';
import ServiceFile from './serviceFile';

export default function FilesTicket(ticket) {


    console.log('getTicket', ticket);

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const onError = e => {
    //     console.log(e, "error in file-viewer");
    // };
    useEffect(() => {
        ServiceFile.getFilePathById(ticket.files).then(rep => {
            console.log(rep);
        })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const file = "localhost:8090/uploads/files-1669796556937.pdf";
    const type = "pdf";

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

                <img onClick={handleShow} className='logos' src='../files.png' />
            </OverlayTrigger>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='bg-info' closeButton>
                    <Modal.Title style={{ color: 'white' }}>All files</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <FileViewer
                        fileType={type}
                        filePath={file}
                    // onError={onError}
                    /> */}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
