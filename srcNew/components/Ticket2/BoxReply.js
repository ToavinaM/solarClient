import React, { useEffect, useState } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import ModalAddTache from '../ModalAddTicket/ModalAddTicket';
import Reply from '../Reply/Reply';
import Service from '../Ticket/service';
import './styles.css';

import ServiceTicket from '../Ticket/service';

export default function BoxReply({ mother, user }) {
    // console.log(mother);
    const [reply, setreply] = useState([]);


    // function handleSave({ data, files }) {

    //     ServiceTicket.saveTicket({ data, files })
    //         .then(rep => {
    //             setreply([...reply, rep.data])
    //         })
    //         .catch(err => {
    //             // console.log('some erro', err);
    //         })
    // }

    useEffect(() => {
        // let where = state.user.roles.id === 1 ? { idUsers: state.user.id, idMother: null } : { idMother: null };
        Service.getTicket({ idMother: mother.id })
            .then(rep => {

                setreply(rep.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [mother])


    function handleSave({ data, files }) {
        console.log('FFFFFFFFFFF', data);
        ServiceTicket.saveTicket({ data, files })
            .then(rep => {
                // console.log('KKK', rep);
                setreply([...reply, rep.data])
            })
            .catch(err => {
                console.log('some erro', err);
            })
    }
    return (
        <Col md={12}>
            <h1>kjh</h1>
            <div className="ticket px-4" >
                <Row>
                    <div className="d-flex align-items-center title " style={{ color: "#8f8f8f" }}>
                        <Col md={4}><h5>{mother.title}</h5></Col>
                        <Col md={4}><ModalAddTache handleSave={handleSave} user={user} mother={mother}></ModalAddTache></Col>
                        <Col md={4} className=" text-end p-0">
                            {/* <b>{mother.status}</b> */}
                            <Badge>Open</Badge>
                        </Col>
                        {/* <Col md={6} className=" text-end p-0"><b>status</b></Col> */}
                    </div>
                </Row>
                <Row className="detail">
                    <Reply user={mother.users} reply={mother}></Reply>
                    {

                        (reply || []).map(r => {
                            return <Reply user={mother.users} reply={r}></Reply>
                        })
                    }
                </Row>
            </div>
        </Col >
    )
}
