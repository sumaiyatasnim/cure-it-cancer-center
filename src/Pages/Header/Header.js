import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../Images/Logo/Cure It.png'

import useAuth from '../../Contexts/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <img className="img-fluid logo" src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/cancerTypes">Cancer Types</Nav.Link>
                        <Nav.Link as={HashLink} to="/appointments">Appointments</Nav.Link>
                        <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="info">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/register">Login</Nav.Link>}
                        <Navbar.Text className="text-dark">
                            Signed in as: <Link to="/register" className="text-decoration-none text-success fw-bold">{user?.displayName || user.email}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;