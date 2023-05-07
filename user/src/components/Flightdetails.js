import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import Navbars from './Navbar';
import { Link } from 'react-router-dom';
const FlightDetails = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/flight')
      .then(res => {
        setFlights(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <Navbars></Navbars>
      <h2 className="text-center mb-4">Flight Details</h2>
      <br></br>
      <Row>
        {flights.map(flight => (
          <Col md={4} key={flight._id}>
            <Card className="mb-4">
              <Card.Header className="bg-danger text-white">
              <h4 className="mb-2 text-right">
              {flight.flightname.toUpperCase()}
              <span style={{margin:"10px"}}/>
              <FontAwesomeIcon icon={faPlane} className="ml-2" />
              </h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col>
                      <strong>From:</strong> {flight.from}
                    </Col>
                    <Col className="text-right">
                      <strong>To:</strong> {flight.to}
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <strong>Departure:</strong> {new Date(flight.take_off).toLocaleString()}
                    </Col>
                    <Col className="text-right">
                      <strong>Arrival:</strong> {new Date(flight.land_off).toLocaleString()}
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <strong>Duration:</strong> {flight.flighttime} hrs
                    </Col>
                    <Col className="text-right">
                      <strong>Price:</strong> ${flight.price}
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <strong>Flight Id</strong> {flight.flightid} 
                    </Col>
                    <Col className="text-right">
                      <strong>Available seats</strong> {flight.noofseats}
                    </Col>
                  </Row>
                  <Row className="mt-3 justify-content-center">
                    <Col>
                      <Link to="/booking" state={{data:flight}}>
                      <Button variant="danger">Book Now</Button>
                      </Link>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FlightDetails;
