import React from 'react';


import { Navbar,Nav } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'


function MyNavbar(){
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to='/'><Nav.Link >Home</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/admission'><Nav.Link >Ingresar Pacientes</Nav.Link> 
                </LinkContainer>
                <LinkContainer to='/about'><Nav.Link >About Us</Nav.Link> 
                </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        );
}

export  default MyNavbar; 