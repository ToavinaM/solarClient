import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './userProfile.css'
export function UserProfile({ user }) {
    const navigation = useNavigate();
    function handleDeconnect() {
        navigation('/');
    }
    return (
        <Col>
            <Row>
                <Col md={12} className="py-3 ">
                    <div className="profile"></div>
                </Col>
            </Row>
            <Row className="py-3">
                <Col md={12} className="text-center">
                    <div className="d-inline-block">
                        <b>
                            {user.name}
                        </b>
                        <div className="text-start">
                            {user.roles.name}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Button onClick={() => handleDeconnect()}>Logout</Button>
            </Row>
        </Col>
    )
}
