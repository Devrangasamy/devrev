import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Adminnavbar from './Adminnavbar';
import { Link } from 'react-router-dom';
const FlightBooking = () => {
  const colStyle = {
    backgroundSize: 'cover',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div>
    <div
    style={{
      backgroundImage:
      'url("https://images.unsplash.com/photo-1534447677768-be436bb09401")',
      backgroundSize: 'cover',
      minHeight: '100vh',
      padding: '25px'
    }}
    >
      <Adminnavbar></Adminnavbar>
      <Container className="text-light rounded p-5">
        <Row className='d-flex justify-content-center ' style={colStyle}>
        <Col md={6} style={colStyle} className='text-lg font-size-50'>
          <h1>Welcome Admin</h1>
          <p>Discover the world with our low fares and exceptional service.</p>
          <p>Choose from over 100 destinations worldwide and book your next trip today.</p>
          <Link to="/viewflights">
          <Button variant="outline-danger" size="lg" className="mt-3">
            Explore Now
          </Button>
          </Link>
          <br></br>
        </Col>

        </Row>
      </Container>
    </div>
    </div>
  );
};

export default FlightBooking;
