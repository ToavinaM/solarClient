import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FileViwer from '../FileViewer/FileViwer';

import './styleReply.css';
export default function Reply({ reply, user }) {
    let me = reply?.users?.id === user?.id;
    let position = me ? "end" : "";

    return (
        <Row className={`d-flex justify-content-${position}`} >
            <Col md={8} className={`${me ? 'myReply' : 'hisReply'} reply`}>
                <div className="contents px-3 mb-3">
                    <Row className=" d-flex align-items-center titles">
                        <Col md={6}>
                            <b className="userName">{me ? 'You' : reply?.users?.name}</b>
                        </Col>
                        <Col md={6}>
                            <b className="d-flex justify-content-end">22:00</b>
                        </Col>
                        <Col md={6}>
                            <i className="reference">{reply?.code}</i>
                        </Col>
                    </Row>
                    <Row className="text">
                        <Col md={12}>
                            {reply?.description}
                        </Col>
                    </Row>
                </div>
                <div className="file p-0 m-0">
                    <Row>
                        {
                            (reply?.files || []).map(f => {

                                return < FileViwer files={f} ></FileViwer>

                            })
                        }
                    </Row>


                </div>
            </Col>
        </Row >
    )
}
