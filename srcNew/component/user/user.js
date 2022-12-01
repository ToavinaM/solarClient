import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './user.css';
export default function User({ user }) {

    // function
    const navigate = useNavigate();
    function handleLogin() {
        // console.log('ssssaaaa', user);
        navigate('/profil', { state: { user } });
    }
    return (
        <Row className="user ">
            <Col md={12} className="py-3 ">
                <Row className="d-flex align-items-center ">
                    <Col md={2}>
                        <div className="profil-photo"></div>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <span className="name">{user?.name}</span>
                        </Row>
                        <Row>
                            <i>{user?.roles?.name}</i>
                        </Row>

                    </Col>

                    <Col md={3} className="text-end" onClick={handleLogin}>
                        <span className="login px-2 ">login</span>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}
