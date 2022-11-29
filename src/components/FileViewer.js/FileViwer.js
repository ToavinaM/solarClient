import React from 'react'
import { Col } from 'react-bootstrap'
import './styles.css';
export default function FileViwer(files) {
    return (
        <Col md={12} className=" mb-2 d-flex align-items-center">
            <div className="icon me-2"></div>
            <span>{files.filesPath}</span>
        </Col>
    )
}
