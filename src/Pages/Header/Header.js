import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../Images/Logo/Cure It.png'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <img className="img-fluid logo" src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Cancer Types</Nav.Link>
                        <Nav.Link as={Link} to="/home#patients">Patient Section</Nav.Link>

                        <Button variant="light">Logout</Button>
                        :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        <Navbar.Text>
                            Signed in as: <Link className="text-white" to="/login"></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;