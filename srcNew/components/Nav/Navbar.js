import React from 'react'
import { NavDropdown, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './nav.css'
export default function Navbar() {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const navigation = useNavigate();
    return (
        // <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav variant="pills" activeKey="1">
            <Nav.Item>
                <Nav.Link eventKey="1" href="#/home">
                    NavLink 1 content
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" title="Item">
                    NavLink 2 content
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" disabled>
                    NavLink 3 content
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}