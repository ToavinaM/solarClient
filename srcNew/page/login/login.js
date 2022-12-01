import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import User from '../../component/user/user';
import { getTicket, getUser } from '../../service';

export default function Login() {
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
                <Col md={4}></Col>
                <Col className=" mx-4 user-container py-3 px-5 px-md-3">
                    <div className="row">
                        <h3 className="col py-3  ">Users List</h3>
                    </div>
                    <Row>
                        <center>

                            {
                                (users || []).map(user => {
                                    return <User user={user}></User>
                                })
                            }
                        </center>
                    </Row>
                </Col>
                <Col md={4}></Col>
            </div>
        </div>
    )
}
