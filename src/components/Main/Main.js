import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import MyNavbar from '../Nav/MyNavbar';
// import { BeatLoader, FadeLoader } from 'react-spinners';
//service
import ServiceTicket, { Service } from '../Ticket/service';

// import moment from 'moment/moment';
import ModalAddTicket from '../ModalAddTicket/ModalAddTicket';
import Ticket from '../Ticket/Ticket';
//service
import serviceTicket from '../Ticket/service';

// import Swal from 'sweetalert2';
import BoxReply from '../Ticket2/BoxReply';
// import Ticket2 from '../Ticket2/Ticket2';


export default function Projet() {
    // state
    const [tickets, setticket] = useState([]);
    const [toReply, setToReply] = useState(null);
    //data
    const [replyTickets, setreplyTickets] = useState([]);
    //fetch
    useEffect(() => {
        serviceTicket.getTicket()
            .then(rep => {
                setticket(rep.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    //function
    console.log('rep.data', tickets);

    function handleSave(data) {
        ServiceTicket.saveTicket(data)
            .then(rep => {
                setticket([...tickets, rep.data])
            })
            .catch(err => {
                console.log('some erro', err);
            })
    }

    function handleDelete(data) {
        // alert('active')
        ServiceTicket.deleteTicket(data)
            .then(rep => {
                console.log('to delete', rep);
                setticket(tickets.filter(t => t.code !== data.code));
            })
            .catch(err => {
                console.log('some error delete', err);
            })
    }

    function getTicketReply(ticketToreply) {
        Service.getDataToReply(ticketToreply).then(rep => {
            setToReply(ticketToreply);
        }).catch(err => {
            console.log('some error in getReply', err);
        })
    }
    return (
        <Row className='container-fluid'>

            <Col md={8} className={'container'}>
                <Row>
                    <MyNavbar></MyNavbar>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <div className='buttonAddTicket'>
                        <ModalAddTicket handleSave={handleSave} ></ModalAddTicket>
                    </div>
                </Row>
                <Row>
                    <div className='boxTicket   ' >
                        <Col md={12} >
                            <Row className=" d-flex justify-content-center">
                                {/* <Ticket2></Ticket2> */}
                                {
                                    tickets.map(ticket => {
                                        return (
                                            <Ticket getTicketReply={getTicketReply} ticket={ticket} handleDelete={handleDelete}></Ticket>
                                        )
                                    })
                                }
                            </Row>

                        </Col>
                    </div>
                </Row>
            </Col >
            <Col md={4}>
                <BoxReply toReply={toReply}></BoxReply>
            </Col>
        </Row >
    )
}
