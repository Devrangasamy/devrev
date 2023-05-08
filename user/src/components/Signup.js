import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import Navbars from './Navbar.js';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
export default function Signup(){
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password do not match');}
    else {
      const response = await fetch('https://fair-blue-sea-lion-kit.cyclic.app/api/auth/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  
      username:username,
        email:email,
        newpassword:newPassword,
        confirmpassword:confirmPassword,
        contact:contact,
        address:address,
        gender:gender,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.status === "success") {
      navigate("/login");
    } else {
      console.log("email already exists");
    }
  }
};

  return (
    <>
    <Navbars></Navbars>
    <Row className="justify-content-center mt-4">
      <Col md={3}>
        <h2 className="mb-6">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formBasicNewPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="New password" value={newPassword} onChange={handleNewPasswordChange} />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          </Form.Group>

          <Form.Group controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="number" placeholder="Enter contact" value={contact} onChange={handleContactChange} />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" value={address} onChange={handleAddressChange} />
          </Form.Group>

          <Form.Group controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" value={gender} onChange={handleGenderChange}>
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
          <br></br>
          
          <div className="d-flex justify-content-between align-items-center">
            <Button variant="outline-danger" type="submit">
              Sign Up
            </Button>
            <Link to="/login">
              <Button variant="outline-danger" type="submit">
                Login
              </Button>
            </Link>
          </div>
          
        </Form>
      </Col>
            </Row>
          </>
    );
}