import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import MyNavbar from '../Nav/MyNavbar';
//redux
import { BeatLoader, FadeLoader } from 'react-spinners';
//service

import moment from 'moment/moment';
import ModalAddTicket from '../ModalAddTicket/ModalAddTicket';
import Ticket from '../Ticket/Ticket';


import Swal from 'sweetalert2';


const tickets = [
    {
        title: 'testTitle',
        id: 1,
        idMother: null,
        code: 'TKx022',
        status: false,
        createdAt: moment(),
        idUsers: 1,
        description: 'descriptionTest',
    },
    {
        id: 2,
        idMother: null,
        code: 'TKx023',
        status: false,
        createdAt: moment(),
        idUsers: 1,
        description: 'descriptionTest2',
    },
    {
        id: 2,
        idMother: null,
        code: 'TKx023',
        status: false,
        createdAt: moment(),
        idUsers: 1,
        description: 'descriptionTest2',
    }
]
export default function Projet() {
    const [ticket, setticket] = useState(tickets);

    return (
        <Row className='container-fluid'>

            <Col md={12} className={'container'}>
                <Row>
                    <MyNavbar></MyNavbar>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <div className='buttonAddTicket'>
                        <ModalAddTicket></ModalAddTicket>
                    </div>
                </Row>
                <Row>
                    <div className='boxTicket'>
                        {
                            tickets.map(ticket => {
                                return (
                                    <Ticket ticket={ticket}></Ticket>
                                )
                            })
                        }
                    </div>
                </Row>
            </Col>
        </Row >
    )
}
