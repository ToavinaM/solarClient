import moment from 'moment';
import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import ReplyButton from '../../components/Ticket/ButtonModal/ReplyButton';
import UpdateCard from '../../components/Ticket/ButtonModal/UpdateCard';
import DeleteTicket from '../ButtonModal/DeleteTicket';
// animation
import { fadeInDown } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
import './ticket.css';
import { useNavigate } from 'react-router-dom';

const styles = { fadeInDown: { animation: 'x 2s', animationName: Radium.keyframes(fadeInDown, '') } }
/////////////////////////////////////////////////////////color banier border 
export default function Ticket({ user, ticket, handleDelete, handleUpdate }) {
    let navigate = useNavigate();
    return (
        <StyleRoot>
            <Row style={styles.fadeInDown} className="py-3 xx ">
                <Col className=" px-3 header" md={12}>
                    <Row className="d-flex align-items-center">
                        <Col md={6}>

                            <b>{ticket?.title}</b>


                        </Col>
                        <Col className="text-end date" md={6}><i>{moment(ticket?.createdAt).format('DD/MM/YYYY')}</i></Col>
                    </Row>
                    <Row>
                        <div className="d-flex align-items-center">
                            <b>#</b>
                            <i className='code'>{ticket?.code}</i>
                        </div>
                    </Row>
                    <Row>
                        <div className="d-flex align-items-center mb-3">
                            <Badge variant={'variant-success'} >{ticket.status ? 'active' : 'closed'}</Badge>
                        </div>
                    </Row>
                </Col>
                <Col md={12} className='py-3 '>
                    <div>
                        <i>
                            {ticket?.description}
                        </i>

                    </div>
                </Col>
                <Col md={12}>
                    <DeleteTicket ticket={ticket} handleDelete={handleDelete}></DeleteTicket>
                    <ReplyButton selectTicket={() => navigate('/reply', { state: { user, ticket } })} ></ReplyButton>
                    <UpdateCard ticket={ticket} handleUpdate={handleUpdate}></UpdateCard>
                </Col>
                {/* <div className="ticket-bg"> </div> */}
            </Row >
        </StyleRoot>
    )
}
