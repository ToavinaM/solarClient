import React from 'react'
import { Col } from 'react-bootstrap';
import './header.css'

export default function Header() {
    return (
        <Col sm={12} id={'header'}>
            {/* //icon gauche */}
            <Col sm={6} id={'gauche'}>
                <div className="icons">
                    <img className="iconImg" src='./menu.png'></img>
                </div>
                <div className="icons">
                    <img className="iconImg" src='./calendar.png'></img>
                </div>
                <div className="icons">
                    <img className="iconImg" src='./envelope.png'></img>
                </div>
            </Col>
            {/* //icon droite */}
            <Col sm={6} id={'droite'}>
                <div className="icons">

                    <img className="iconImg" src='./search.png'></img>

                </div>
                <div className="icons">

                    <img className="iconImg" src='./bell.png'></img>


                </div>
                <div className="status-profil">
                    <p><strong>R.Toavina Mario</strong> </p>
                </div>
                <div className="boxProfil">
                    <center>
                        <img className="imgProfil" src='./user.png'></img>
                    </center>
                </div>
            </Col>
        </Col>
    )
}
