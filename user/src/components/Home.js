import React from 'react';
import Navbars from './Navbar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const HomePage = () => {
  const colStyle = {
    backgroundSize: 'cover',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };
  return (
    <Container>
      <Navbars></Navbars>
      <Row >
        <Col md={6} style={colStyle}>
          <h1>Welcome to Flight Booking</h1>
          <p>Discover the world with our low fares and exceptional service.</p>
          <p>Choose from over 100 destinations worldwide and book your next trip today.</p>
          <Button variant="outline-danger" size="lg" className="mt-3">
            Explore Now
          </Button>
          <br></br>
        </Col>
        <Col md={6} className="d-flex justify-content-center" style={colStyle}>
            <img src='https://plus.unsplash.com/premium_photo-1661504450300-299e9c51be52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' style={{transform:"scale(0.5)"}}></img>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;