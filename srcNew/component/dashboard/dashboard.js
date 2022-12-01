import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './dashboard.css';
export function Dashboard() {
    return (
        <Row className="dashboard py-3">
            <Col md={12}>
                <h3 className="py-3">DashBoard</h3>
            </Col>
            <Col md={12}>
                <Row>
                    <h6>
                        <span className="col">Total Tickets : <span className="tickets-number">17</span></span>
                    </h6>
                </Row>
            </Col>
            <Col md={12}>
                <Row>
                    <h6>
                        <span className="col">Active Tickets : <span className="tickets-number">17</span></span>
                    </h6>
                </Row>
            </Col>
            <Col md={12}>
                <Row>
                    <h6>
                        <span className="col">Closed Tickets : <span className="tickets-number">17</span></span>
                    </h6>
                </Row>
            </Col>
        </Row>
    )
}
