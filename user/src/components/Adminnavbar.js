import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';
export default function Adminnavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigates=useNavigate();
  const logoutuser = () => {
    localStorage.removeItem("username");
    navigates("/");
    setIsOpen(!isOpen);
  };
    return (
      <div>
      <Navbar  className='Navbar m-3' bg="danger" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/admin"  variant="light">Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Services" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="/addflights"  style={{ backgroundColor: '#dc3545', border: '2px solid white', color: 'white' }}>
                Add Flight
              </NavDropdown.Item>
              <NavDropdown.Item href="/viewflights"  style={{ backgroundColor: '#dc3545', border: '2px solid white', color: 'white' }}>
                view flights
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/viewbooking"  style={{ backgroundColor: '#dc3545', border: '2px solid white', color: 'white' }}>
                view Bookings
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="/About" >
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ gap: "13px" }}>
              {!localStorage.getItem("username") && (
                <span className="nav-item">
                  <Link className="nav-link" to="/login">
                  <Button variant="outline-light">Login</Button>
                  </Link>
                </span>
              )}
              {!localStorage.getItem("username") && (
                <span className="nav-item">
                  <Link className="nav-link" to="/Signup">
                  <Button variant="outline-light">Signup</Button>
                  </Link>
                </span>
              )}
              {localStorage.getItem("username") && (
                <li className="d-flex gap-1">
                  <span className="nav-item dropdown" style={{marginRight:"20px"}}>
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      stlye={{color:"#eee"}}
                    >
                      {localStorage.getItem("username")}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to={"/"} className="dropdown-item" onClick={logoutuser}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </span>
                </li>
              )}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
