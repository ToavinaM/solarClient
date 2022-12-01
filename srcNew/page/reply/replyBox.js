import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Dashboard } from '../../component/dashboard'
import { Navbar } from '../../component/navbar'

import { useLocation } from 'react-router-dom';
import './replyBox.css';
import { UserProfile } from '../../component/userProfile';
import { deleteTicket, getTicket, saveTicket, update } from '../../service';
import Ticket from '../../component/ticket/ticket';
import Reply from '../../components/Reply/Reply';

export default function ReplyBox() {
    // console.log(state);
    let { state } = useLocation();
    const user = state.user;
    const ticket = state.ticket;
    const [tickets, settickets] = useState([]);


    return (
        <div className="container">
            <div className="row h-100">
                <Col md={1}>
                    <Navbar></Navbar>
                </Col>


                <Col className="user-container py-3 px-5 px-md-3">
                    <div className="row">
                        <h3 className="col py-3  ">User Profile</h3>
                    </div>
                    <Row>
                        <UserProfile user={user}></UserProfile>
                    </Row>
                </Col>


                <Col md={8} className='px-5'>

                    <Row className="ticket-container py-2">
                        <h3 className="col-md-12 py-3">{ticket.title}</h3>
                        <div>
                            <Row>
                                <Reply reply={ticket} user={user}></Reply>
                            </Row>
                        </div>
                    </Row>
                </Col>

            </div>
        </div>
    )
}
