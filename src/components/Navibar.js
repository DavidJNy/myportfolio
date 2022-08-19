import React from 'react'
import ChiliLogo2 from './images/chililogo2.png'
import { FaReact, FaPhone, FaBitcoin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'

function NavigationBar() {

    return (
        <nav class="navbar fixed-top bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Fixed top</a>
            </div>
        </nav>
    );
}

export default NavigationBar;

{/* <Navbar className="stick-nav" fixed='top' expand="md" bg="dark" variant="dark">
            <Container fluid>
                <img alt="logo" src={ChiliLogo2} id="clogo"/>
                <Navbar.Brand href ="/" className="title">Prick Tox</Navbar.Brand>
                <Nav>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#Projects"><FaReact /> Projects</Nav.Link>
                        <Nav.Link href="#Crypto"><FaBitcoin /> Crypto</Nav.Link>
                        <Nav.Link href="#Contact_Us"><FaPhone /> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Nav>
            </Container>
        </Navbar> */}