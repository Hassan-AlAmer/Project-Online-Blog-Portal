import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Nav,Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">Online Blog Portal</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/create" >Create New Blog</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;