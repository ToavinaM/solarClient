import React from 'react'
import { Col } from 'react-bootstrap'
import { getFile } from './file.service';
import './styles.css';


export default function FileViwer({ files }) {
    getFile(files).then()
    function redirect(base64Url) {
        let win = window.open();
        win.document.write(
            `<iframe src="${base64Url}" style="border:0;top:0;left:0;width:100%;height:100%;" allowFullScreen >
            </iframe>`
        )
    }

    return (

        <Col md={12} className=" mb-2 d-flex align-items-center">
            <div onClick={() => redirect(files.src)} className="icon me-2"></div>
            <span>{files.name}</span>
        </Col>
    )
}
