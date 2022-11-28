import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import Navbar from '../Nav/Navbar';
import Header from '../header/Header';
//redux
import { BeatLoader } from 'react-spinners';
//service

import { Service } from './service';
import moment from 'moment/moment';
import ModalAddTicket from '../ModalAddTicket/ModalAddTicket';

const tickets = [
    {
        id: 1,
        idMother: null,
        code: 'TKx022',
        status: false,
        createdAt: moment(),
        idUsers: 1
    },
    {
        id: 2,
        idMother: null,
        code: 'TKx023',
        status: false,
        createdAt: moment(),
        idUsers: 1
    }
]
export default function Projet() {
    const [ticket, setticket] = useState(tickets);

    // let initiation = localStorage.getItem('users');


    useEffect(() => {
        // Service.getTicket()
        //     .then(rep => {
        //         console.log(rep.data);
        //         setticket(rep.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }, [])



    return (
        <Row className='container-fluid'>

            <Col md={12} className={'container'}>
                <Row>
                    <Navbar></Navbar>
                </Row>
                <Row>
                    <div className='bodyContainer bg-info'>
                        <ModalAddTicket></ModalAddTicket>
                        {
                            ticket.map(rep => {
                                return (
                                    <p>{rep.contenus}</p>
                                )
                            })
                        }
                    </div>
                </Row>
            </Col>
        </Row >
    )
}
