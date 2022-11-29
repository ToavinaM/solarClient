import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import FileViwer from '../FileViewer.js/FileViwer';
import Reply from '../Reply/Reply';
import Service from '../Ticket/service';
import './styles.css'
export default function BoxReply({ toReply }) {
    const [reply, setreply] = useState([]);
    useEffect(() => {
        Service.getTicket({ idMother: toReply.id })
            .then(rep => {

                setreply(rep.data);
            })
            .catch(err => { // console.log(err); 
            })
    }, [])

    return (
        <Col md={12}>
            <h1>kjh</h1>
            <div className="ticket px-4" >
                <Row>
                    <div className="d-flex align-items-center title " style={{ color: "#8f8f8f" }}>
                        <Col md={6}><h5>{toReply.title}</h5></Col>
                        <Col md={6} className=" text-end p-0">
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
