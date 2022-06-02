import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
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

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    ACADEMICS
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/syllabus'>Syllabus
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/class_routine'>Class Route
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/examination_routine'>Examination Routine
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/results'>Results
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/terms_conditions'>Terms and Conditions
                                        </CustomLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    ADMINISTRATION
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/bord_derators'>Board of Directors
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/founders_message'>Founder's Message
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/presidents_message'>Chairman's Message
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/principal_message'>Principal's Message
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/all_teachers'>Teachers
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/officer_employee'>Officer Employee
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/mac_foundation'>Mac Foundation
                                        </CustomLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    ADMISSION
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className='fw-bold drop-link' to='/blog'>Blog
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    STUDENTS
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className='fw-bold drop-link' to='/blog'>Blog
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    GALLERY
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className='fw-bold drop-link' to='/blog'>Blog
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    ABOUT
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/history'>MUUSM History
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/founder'>Founder
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/principal'>Principal
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/vice_rincipal'>Vice Principal
                                        </CustomLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="" className='fw-bold dropdown mt-0' >
                                    LINKS
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/notics'>Notics
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/library'>Library
                                        </CustomLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <CustomLink className=' drop-link' to='/connect_us'>Connect Us
                                        </CustomLink>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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