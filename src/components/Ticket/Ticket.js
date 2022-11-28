import React from 'react';
import './style.css';
import { Col, Row } from 'react-bootstrap';
// animation
import { flipInX } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
//modalupdate
import UpdateCard from './ButtonModal/UpdateCard';
import DeleteTicket from './ButtonModal/DeleteTicket';

var moment = require('moment');
const formatDate = "DD/MM/YYYY HH:mm";

const styles = { flipInX: { animation: 'x 1s', animationName: Radium.keyframes(flipInX, '') } }
/////////////////////////////////////////////////////////color banier border 

export default function CardTask({ ticket, handleUpdate }) {
    return (
        <StyleRoot>
            <div style={styles.flipInX}  >
                <div style={{ borderTop: `#79bf3e solid 8px` }} className='card'>
                    <Row >
                        <Col>
                            <h5>{ticket.title}</h5>
                        </Col>
                        <Col sm={2} style={{ display: 'contents' }}>
                            <UpdateCard handleUpdate={handleUpdate} ticket={ticket} />
                            <DeleteTicket handleUpdate={handleUpdate} ticket={ticket} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Created At</label>
                            <p>{moment(ticket.createdAt).format(formatDate)}</p>
                            <label>Description</label>
                            <p>{ticket.description}</p>
                        </Col>
                        <Col>

                            <Row>
                                <Col className='mb-2' sm={2}>
                                    {/* //reply */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </StyleRoot >
    )
}
