import React from 'react'
import ChiliLogo from './images/spicychililogo.jpg'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FaHome, FaReact, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function NavigationBar() {
    return (
        
        <Navbar sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <img alt="logo" src={ChiliLogo} width="60" height="60" id="clogo"/>
                        <Navbar.Brand href ="/Home" className="title">Prick Tox</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" class=""/>
                        <Navbar.Collapse id="">
                        <Nav className="ms-auto" navbarScroll>
                            <Nav.Link href="Home"><FaHome /> Home</Nav.Link>
                            <Nav.Link href="Projects"><FaReact /> Projects</Nav.Link>
                            <Nav.Link href="Contact_Us"><FaPhone /> Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default NavigationBar;

// use this as guide https://react-bootstrap.github.io/components/navbar/