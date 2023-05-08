import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import Navbars from './Navbar';
// import { useAuth } from './Authentication';
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"; 
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("https://fair-blue-sea-lion-kit.cyclic.app/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        newpassword: password,
      }),
    });
    const json = await response.json();
    if (json.status === "Success"&&json.data[0].isAdmin===true) {
      navigate("/admin");
      localStorage.setItem("admin", json.data[0].isAdmin);
      localStorage.setItem("username", json.data[0].username);
      localStorage.setItem("id", json.data[0]._id);
      navigate(location.state ? location.state.path : "/admin", { replace: true });
      setPassword("");
      setEmail("");
    } else {
      alert("enter correct admin details");
      navigate("/adminlogin");
    }

  };

  return (
    <div>
      <Navbars />
      <Row className="justify-content-center ">
        <Col md={3}>
          <h2 className="mb-6">Admin Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <br />

            <div className="d-flex justify-content-between align-items-center">
            <Button variant="outline-danger" type="submit">
              Login
            </Button>
            <Link to="/login">
              <Button variant="outline-danger" >
                User login
              </Button>
            </Link>
          </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
  }