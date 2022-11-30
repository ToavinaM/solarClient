import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import FileViwer from '../FileViewer.js/FileViwer';
import ModalAddTache from '../ModalAddTicket/ModalAddTicket';
import Reply from '../Reply/Reply';
import Service from '../Ticket/service';
import './styles.css';

import ServiceTicket from '../Ticket/service';

export default function BoxReply({ toReply }) {
    // console.log(toReply);
    const [reply, setreply] = useState([]);


    function handleSave({ data, files }) {

        ServiceTicket.saveTicket({ data, files })
            .then(rep => {
                setreply([...reply, rep.data])
            })
            .catch(err => {
                // console.log('some erro', err);
            })
    }

    useEffect(() => {
        Service.getTicket({ idMother: toReply.id })
            .then(rep => {

                console.log(toReply.id);
                setreply(rep.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [toReply])

    return (
        <Col md={12}>
            <h1>kjh</h1>
            <div className="ticket px-4" >
                <Row>
                    <div className="d-flex align-items-center title " style={{ color: "#8f8f8f" }}>
                        <Col md={4}><h5>{toReply.title}</h5></Col>
                        <Col md={4}><ModalAddTache handleSave={handleSave} ></ModalAddTache></Col>
                        <Col md={4} className=" text-end p-0">
                            {/* <b>{toReply.status}</b> */}
                            <Badge>Open</Badge>
                        </Col>
                        {/* <Col md={6} className=" text-end p-0"><b>status</b></Col> */}
                    </div>
                </Row>
                <Row className="detail">
                    {

                        (reply || []).map(r => {
                            return <Reply user={toReply.users} reply={r}></Reply>
                        })
                    }
                </Row>
            </div>
        </Col >
    )
}
