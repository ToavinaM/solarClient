import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Dashboard } from '../../component/dashboard'
import { Navbar } from '../../component/navbar'

import { useLocation } from 'react-router-dom';
import './profile.css';
import { UserProfile } from '../../component/userProfile';
import { deleteTicket, getTicket, saveTicket, update } from '../../service';
import Ticket from '../../component/ticket/ticket';
import ModalAddTicket from '../../components/ModalAddTicket/ModalAddTicket'
export default function Profile() {
    let { state } = useLocation();
    const user = state.user;
    const [tickets, settickets] = useState([]);
    useEffect(() => {
        getTicket({ idUsers: user.id, idMother: null })
            .then(rep => {
                settickets(rep);
            }).catch(err => {
                alert(err);
            })
    }, [])
    function handleUpdate(data) {
        update(data).then(newTicket => {
            let newArray = tickets.filter(t => t.code !== newTicket[0].code);
            settickets([...newArray, newTicket[0]]);
        }).catch(err => {
            console.log(err);
        })
    }
    function handleSave({ data, files }) {
        alert('asdasd')
        // saveTicket({ data, files })
        //     .then(rep => {
        //         settickets([...tickets, rep])
        //         alert(tickets);
        //     })
        //     .catch(err => {
        //         alert(err);
        //     })
    }
    function handleDelete(data) {
        deleteTicket(data)
            .then(rep => {
                settickets(tickets.filter(t => t.code !== data.code));
            })
            .catch(err => {
                console.log(err);
                alert(err);
            })
    }

    return (
        <div className="container">
            <div className="row h-100">
                {/* <Col md={1}>
                    <Navbar></Navbar>
                </Col> */}


                <Col className="user-container py-3 px-5 px-md-3">
                    <div className="row">
                        <h3 className="col py-3  ">User Profile</h3>
                    </div>
                    <Row>
                        <UserProfile user={user}></UserProfile>
                    </Row>
                </Col>


                <Col md={8} className='px-5'>
                    <Dashboard></Dashboard>
                    <div className='my-2'>
                        <ModalAddTicket handleSave={handleSave} user={user}></ModalAddTicket>
                    </div>
                    <Row className="ticket-container py-2">
                        {/* <h3 className="col-md-12 py-3">Tickets List</h3> */}
                        <div>
                            <Row>
                                {
                                    (tickets || []).map(ticket => {
                                        return <Col md={6} xs={12} className="px-3 mt-2 boxTicket">
                                            <Ticket className='ticket-group' handleDelete={handleDelete} user={user} handleUpdate={handleUpdate} ticket={ticket}></Ticket>
                                        </Col>
                                    })
                                }
                            </Row>
                        </div>
                    </Row>
                </Col>

            </div>
        </div>
    )
}
