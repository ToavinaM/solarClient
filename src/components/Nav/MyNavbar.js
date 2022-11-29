import React from 'react'
import { NavDropdown, Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './nav.css'
export default function MyNavbar() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const navigation = useNavigate();
    function handleDeconnect() {
        ///////destroy localstrorage in this section
        navigation('/');
    }
    return (
        // <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>

                <Col className='mb-3 headNav'>S<img className="solarLogo" src='./logo192.png' ></img>lar Transit</Col>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Parameter" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.2">
                                Parameter
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <p onClick={() => handleDeconnect()}  ><img onClick={() => handleDeconnect()} className='logoNav' src='./projet.png' />Deconnection</p>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}