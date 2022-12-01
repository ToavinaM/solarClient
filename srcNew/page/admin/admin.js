import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Dashboard } from '../../component/dashboard'
import { Navbar } from '../../component/navbar'
import Ticket from '../../component/ticket/ticket'
import User from '../../component/user/user'
import { getTicket, getUser } from '../../service'
import './admin.css'




export default function Admin() {

    const [users, setusers] = useState([]);
    const [tickets, settickets] = useState([]);
    useEffect(() => {
        getUser().then(rep => {
            setusers(rep);
        }).catch(err => {
            alert(err);
        })
        getTicket({ idMother: null })
            .then(rep => {
                console.log(rep);
                settickets(rep);
            }).catch(err => {
                alert(err);
            })
    }, [])


    return (
        <div className="container">
            <div className="row h-100">
                {/* <Col md={1}>
                    <Navbar></Navbar>
                </Col> */}


                <Col className=" mx-4 user-container py-3 px-5 px-md-3">
                    <div className="row">
                        <h3 className="col py-3  ">Users List</h3>
                    </div>
                    <Row>
                        {
                            (users || []).map(user => {
                                return <User user={user}></User>
                            })
                        }
                    </Row>
                </Col>


                <Col md={8} className='px-5'>
                    <Dashboard></Dashboard>
                    <Row className="ticket-container py-2">
                        <h3 className="col-md-12 py-3">Tickets List</h3>
                        <div>
                            {
                                (tickets || []).map(ticket => {
                                    return <Col md={6} xs={12} className=" mt-2 px-4 ticket-group">
                                        <Row>
                                            <Ticket ticket={ticket}></Ticket>
                                        </Row>
                                    </Col>
                                })
                            }
                        </div>
                    </Row>
                </Col>

            </div>
        </div>
    )
}
