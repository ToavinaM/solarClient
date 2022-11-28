import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import Navbar from '../Nav/Navbar';
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
    }
]
export default function Projet() {
    const [ticket, setticket] = useState(tickets);

    // let initiation = localStorage.getItem('users');
    const [statut, setstatut] = useState('');
    const [priority, setpriority] = useState('');
    // console.log('statut=--------==', priority);
    //task formater
    const [todo, settodo] = useState(null);
    const [inProgress, setinProgress] = useState(null);
    const [doing, setdoing] = useState(null);
    const [retard, setretard] = useState([]);

    /////////nombre stat\
    const [nombreTodo, setnombreTodo] = useState(0);
    const [nombreProgress, setnombreProrgess] = useState(0);
    const [nombreDoing, setnombreDoing] = useState(0);
    ////////////drag
    const [overTodo, setoverTodo] = useState(false);
    const [overProgress, setoverProgress] = useState(false);
    const [overDoing, setoverDoing] = useState(false);

    return (
        <Row className='container-fluid'>

            <Col md={12} className={'container'}>
                <Row>
                    <Navbar></Navbar>
                </Row>
                <br></br>
                <Row>
                    <div className='bodyContainer'>
                        <ModalAddTicket></ModalAddTicket>
                    </div>
                </Row>
                <Row>
                    <div className='all'>
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
