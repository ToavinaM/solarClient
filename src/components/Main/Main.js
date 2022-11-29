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
import { useLocation } from 'react-router-dom';
// import Ticket2 from '../Ticket2/Ticket2';


export default function Projet() {
    let { state } = useLocation();
    // const [user, setuser] = useState(state.user);
    const [tickets, setticket] = useState([]);
    const [toReply, setToReply] = useState(null);
    //data
    const [replyTickets, setreplyTickets] = useState([]);
    //fetch
    useEffect(() => {

        let where = state.user.roles.id === 1 ? { idUsers: state.user.id } : [];
        console.log(where);
        serviceTicket.getTicket(where)
            .then(rep => {
                setticket(rep.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])
    //function
    console.log('rep.data', tickets);

    function handleSave({ data, files }) {

        ServiceTicket.saveTicket({ data, files })
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
        // alert('reply');
        console.log(ticketToreply);
        setToReply(ticketToreply);
        // Service.getDataToReply(ticketToreply).then(rep => {
        // }).catch(err => {
        //     console.log('some error in getReply', err);
        // })
    }
    return (
        <Row className='container-fluid'>

            <Col md={8} className={'container'}>
                <Row>
                    <MyNavbar></MyNavbar>
                </Row>
                <br></br><br></br><br></br><br></br>
                <Row>
                    <div className='buttonAddTicket'>
                        <ModalAddTicket handleSave={handleSave} user={state.user}></ModalAddTicket>
                    </div>
                </Row>
                <Row>
                    <div className='boxTicket   ' >
                        <Row>

                            {/* <Ticket2></Ticket2> */}
                            {
                                tickets.map(ticket => {
                                    return (
                                        <Col md={4}>
                                            <Ticket getTicketReply={getTicketReply} ticket={ticket} handleDelete={handleDelete}></Ticket>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Row>
            </Col >
            <Col md={4}>
                <BoxReply toReply={toReply}></BoxReply>
            </Col>
        </Row >
    )
}
