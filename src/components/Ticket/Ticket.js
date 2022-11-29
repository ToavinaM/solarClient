import React from 'react';
import './style.css';
import { Col, Row } from 'react-bootstrap';
// animation
import { fadeInDown } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
//modalupdate
import UpdateCard from './ButtonModal/UpdateCard';
import DeleteTicket from './ButtonModal/DeleteTicket';
import Reply from './ButtonModal/Reply';

var moment = require('moment');
const formatDate = "DD/MM/YYYY HH:mm";

const styles = { fadeInDown: { animation: 'x 2s', animationName: Radium.keyframes(fadeInDown, '') } }
/////////////////////////////////////////////////////////color banier border 

export default function Ticket({ ticket, handleUpdate, handleDelete, getTicketReply }) {
    return (
        <StyleRoot>
            <div style={styles.fadeInDown} onClick={() => alert('asd')}>
                <div style={{ borderTop: `#79bf3e solid 8px` }} className='card'>
                    <Row >
                        <Col>
                            <h5>{ticket.title}</h5>
                        </Col>
                        <Col sm={2} style={{ display: 'contents' }}>
                            <UpdateCard handleUpdate={handleUpdate} ticket={ticket} />
                            <DeleteTicket handleUpdate={handleUpdate} handleDelete={handleDelete} ticket={ticket} />
                            <Reply getTicketReply={getTicketReply} handleUpdate={handleUpdate} handleDelete={handleDelete} ticket={ticket} />
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
