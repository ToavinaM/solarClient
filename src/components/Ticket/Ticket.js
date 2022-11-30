import React from 'react';
import './style.css';
import { Badge, Col, Row } from 'react-bootstrap';
// animation
import { fadeInDown } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
//modalupdate
import UpdateCard from './ButtonModal/UpdateCard';
import DeleteTicket from './ButtonModal/DeleteTicket';
import ReplyButton from './ButtonModal/ReplyButton';
import FilesTicket from './ButtonModal/FilesTicket';

var moment = require('moment');
const formatDate = "DD/MM/YYYY HH:mm";

const styles = { fadeInDown: { animation: 'x 2s', animationName: Radium.keyframes(fadeInDown, '') } }
/////////////////////////////////////////////////////////color banier border 

export default function Ticket({ ticket, handleUpdate, handleDelete, selectTicket }) {
    let log = console.log;
    return (
        <StyleRoot>
            <div style={styles.fadeInDown} >
                <div className='card'>
                    <Row >
                        <Col>
                            <h5>{ticket.title}</h5>
                        </Col>
                        <Col sm={2} style={{ display: 'contents' }}>
                            <FilesTicket ticket={ticket} />
                            <UpdateCard handleUpdate={handleUpdate} ticket={ticket} />
                            <DeleteTicket handleUpdate={handleUpdate} handleDelete={handleDelete} ticket={ticket} />
                            <ReplyButton selectTicket={selectTicket} ticket={ticket} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b className='date'>Status : <Badge>open</Badge></b><br></br>
                            <b className='date'>Created At : {moment(ticket.createdAt).format(formatDate)}</b>
                            <br></br>
                            <b>Description : {ticket.description}</b>
                            {/* <p className='desc'>{ticket.description}</p> */}
                        </Col>

                    </Row>
                </div>
            </div>
        </StyleRoot >
    )
}
