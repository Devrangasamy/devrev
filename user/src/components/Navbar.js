import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css"
export default function Navbars() {
    return (
      <Navbar  className='Navbar' bg="danger" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" variant="light">Flight Booking</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Contact Us</Nav.Link>
              <NavDropdown title="Services" bg="danger" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4" bg="danger" style={{ border: '2px solid white', color: 'white' }}>
                Flight booking
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" bg="danger" style={{ border: '2px solid white', color: 'white' }}>
                Flight ordering
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#" >
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ gap: "13px" }}>
              <Button variant="outline-light">Login</Button>
              <Button variant="outline-light">Sign up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
