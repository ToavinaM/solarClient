import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './nav.css'
export default function Nav() {

    const navigation = useNavigate();
    return (
        <div className='navContainer' >
            <Row className='mb-3 headNav'>
                <Col>S<img className="solarLogo" src='./logo192.png' ></img>lar Transit</Col>
            </Row>
            <hr></hr>
            <Row>
                <Col md={12} className='bodyNav'>
                    <div>
                        <p className='lienNav' onClick={() => navigation('/projets')}  ><img onClick={() => navigation('/projets')} className='logoNav' src='./logo192.png' />Listes des Projets</p>
                        <p className='lienNav' onClick={() => navigation('/map')}><img onClick={() => navigation('/map')} className='logoNav' src='./Map.png' />Cartographier les projets</p>
                        <p className='lienNav' onClick={() => navigation('/GestionUser')}><img onClick={() => navigation('/Dashboard')} className='logoNav' src='./roles.png' />Gestions des utilisateurs</p>
                        <p className='lienNav' onClick={() => navigation('/parametre')}><img onClick={() => navigation('/parametre')} className='logoNav' src='./params.png' />Parametre de l'application</p>
                        <p className='lienNav' onClick={() => navigation('/profil')}><img onClick={() => navigation('/parametre')} className='logoNav' src='./compte.png' />Profil</p>
                    </div>
                </Col>
            </Row>
        </div >
    )
}