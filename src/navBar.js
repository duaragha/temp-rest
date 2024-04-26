import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='p-3'>
                <Container fluid>
                    <Navbar.Brand href="#home">Company</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#menu">Menu</Nav.Link>
                        <Nav.Link href="#reservation">Reservation</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#pricing">Locations & Hours</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" className='me-2'>Log in</Button>
                    <Button variant="outline-info">Sign Up</Button>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;