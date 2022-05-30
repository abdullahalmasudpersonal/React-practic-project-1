import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min';
import './Header.css';
import logo from '../../../Image/Logo/logo3.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='head-title' sticky='top'>
                <h4 className='fw-bold head'>Mafsar Ul Ulum Sinior Madrasah</h4>
            </div>
            <Navbar sticky='top' collapseOnSelect expand="lg" variant="light" className='bgcolor' >

                <Container>
                    <Navbar.Brand className='fw-bold'>
                        <Link to='/'><img src={logo} alt='' /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto ">
                            <Nav.Link>
                                <Link className='text-dark fw-bold' to='/about'>ABOUT</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing" className='text-dark fw-bold'>Pricing</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="#deets" className='text-dark fw-bold'>More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='text-dark fw-bold'>
                                Dank memes
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;