import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min';
import './Header.css';
import { signOut } from 'firebase/auth';
import logo from '../../../Image/Logo/logo3.png';
import { Link } from 'react-router-dom';
import CustomLink from './ActiveLink/CustomLink'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <div className='head-title'>
                <h4 className='fw-bold head'>Mafsar Ul Ulum Sinior Madrasah</h4>
            </div>
            <Navbar sticky='top' collapseOnSelect expand="lg" variant="light" className='bgcolor' >

                <Container>
                    <Navbar.Brand className='fw-bold'>
                        <Link to='/'><img src={logo} alt='' /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >

                        <Nav className="me-auto " >
                            <Nav.Link >
                                <CustomLink className=' customLink fw-bold' to='/academics' >ACADEMICS</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/administration' >ADMINISTRATION</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/admission'>ADMISSION</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/students'>STUDENTS</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/gallery' >GALLERY</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/about' >ABOUT</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/connectUs' >CONNECT US</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                <CustomLink className='customLink fw-bold' to='/links' >LINKS</CustomLink>
                            </Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link> <CustomLink className='customLink fw-bold' to='/register' >REGISTER</CustomLink>
                            </Nav.Link>
                            <Nav.Link>
                                {user ?
                                    <button className=' signout-btn fw-bold' onClick={handleSignOut} >SIGN OUT</button>
                                    :
                                    <CustomLink className='customLink fw-bold' to='/login' >LOGIN</CustomLink>
                                }
                            </Nav.Link>

                            {/*                             <Nav.Link eventKey={2} href="#memes" className='text-dark fw-bold'>
                                Dank memes
                            </Nav.Link> */}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;