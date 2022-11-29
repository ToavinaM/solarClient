import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import MyNavbar from '../Nav/MyNavbar';
//redux
import { BeatLoader, FadeLoader } from 'react-spinners';
//service

import moment from 'moment/moment';
import ModalAddTicket from '../ModalAddTicket/ModalAddTicket';
import Ticket from '../Ticket/Ticket';
//service
import serviceTicket from '../Ticket/service';

import Swal from 'sweetalert2';


export default function Projet() {
    const [tickets, setticket] = useState([]);

    useEffect(() => {
        serviceTicket.getTicket()
            .then(rep => {
                setticket(rep.data);
                console.log(rep.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


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
