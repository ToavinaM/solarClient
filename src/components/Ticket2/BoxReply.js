import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './styles.css'
export default function BoxReply() {
    return (
        <Col md={4}>
            <h1>kjh</h1>
            <div className="ticket px-4" >
                <Row>
                    <div className="d-flex align-items-center title " style={{ color: "#8f8f8f" }}>
                        <Col md={6}><h5>Ticket Name</h5></Col>
                        <Col md={6} className=" text-end p-0"><b>status</b></Col>
                    </div>
                </Row>
                <Row className="detail">
                    <Col md={12} className="myReply">
                        <div className="contents">
                            <Row>
                                <div className=" d-flex align-items-center titles">
                                    <Col md={6}>
                                        <b className="userName">userName</b>
                                    </Col>
                                    <Col md={6}>
                                        <b className="date">22:00</b>
                                    </Col>
                                </div>
                            </Row>
                            <Row className="row text">
                                <Col md={12}>
                                    hahahah
                                </Col>
                            </Row>
                        </div>
                        <div className="file p-0 m-0">
                            <Row>
                                <Col md={12}>
                                    <div className=" mb-2 d-flex align-items-center">
                                        <div className="icon me-2"></div>
                                        <span>thumbnail.jpg</span>
                                    </div>
                                </Col>
                                <div className=" mb-2 d-flex align-items-center">
                                    <div className="icon me-2"></div>
                                    <span>thumbnail.jpg</span>
                                </div>
                                <Col>
                                    <div className="mb-2 d-flex align-items-center">
                                        <div className="icon me-2"></div>
                                        <span>thumbnail.jpg</span>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="hisReply">
                            <div className="contents">
                                <Row>
                                    <div className="d-flex align-items-center titles">
                                        <b className="col-md-6 userName">userName</b>
                                        <b className="col-md-6 date">22:00</b>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="text">
                                        <div className="col-md-12">
                                            hahahah
                                        </div>
                                    </div>
                                </Row>
                            </div>
                            <div className="file p-0 m-0">
                                <Row>



                                    <Col md={12} className=" mb-2 d-flex align-items-center">
                                        <div className="icon me-2"></div>
                                        <span>thumbnail.jpg</span>
                                    </Col>

                                    <Col md={12} className=" mb-2 d-flex align-items-center">
                                        <div className="icon me-2"></div>
                                        <span>thumbnail.jpg</span>
                                    </Col>

                                    <Col md={12} className=" mb-2 d-flex align-items-center">
                                        <div className="icon me-2"></div>
                                        <span>thumbnail.jpg</span>
                                    </Col>

                                </Row>

                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </Col>
    )
}
