import React from 'react'
import ChiliLogo from './images/spicychililogo.jpg'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { FaHome, FaReact, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function NavigationBar() {
    return (
        <div class="Nbar" >
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar class="display-3">
                        <img alt="logo" src={ChiliLogo} width="60" height="60" id="clogo"/>
                        <span className="title">Prick Tox</span>
                        </Navbar>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" class="nav justify-content-end"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" navbarScroll>
                            <Nav.Link href="#Home"><FaHome /> Home</Nav.Link>
                            <Nav.Link href="#Projects"><FaReact /> Projects</Nav.Link>
                            <Nav.Link href="#Contact_Us"><FaPhone /> Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;

// use this as guide https://react-bootstrap.github.io/components/navbar/