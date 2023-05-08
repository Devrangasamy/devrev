import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbars from "./Navbar";
import { Card, Container, Row, Col, Button,Form, FormGroup, FormControl } from "react-bootstrap";

const BookingDetails = () => {
 
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(`https://fair-blue-sea-lion-kit.cyclic.app/api/book/${localStorage.getItem("id")}`)
    .then((response) => {
      setBookings(response.data);
    });
  }, []);
  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`https://fair-blue-sea-lion-kit.cyclic.app/api/book/${bookingId}`);
      const response = await axios.get(`https://fair-blue-sea-lion-kit.cyclic.app/api/book/${localStorage.getItem("id")}`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const styles={
    transition: 'all 0.2s ease-in-out', // add transition effect
    boxShadow: '1px 3px 7px rgba(0, 0, 0, 0.9)', // add box shadow effect
  };

  return (
    <Container>
      <Navbars />
      <h2 className="text-center mb-4">My Bookings</h2>
      <br></br>
      
      <Row >
        {bookings.map((booking) => (
          <Col md={4} key={booking._id}>
            <Card className="mb-4" style={styles}>
            <Card.Header className="bg-danger text-white">
                <h4 className="mb-2 d-flex justify-content-center">
                {(booking.customer_name).toUpperCase()}
                </h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>Booking ID: {booking._id}</Card.Text>
                <Card.Text>
                  <strong>Flight Name:</strong> {booking.flight.flightname.toUpperCase()}
                </Card.Text>
                <Card.Text>
                  <strong>From:</strong> {booking.flight.from.toUpperCase()}
                </Card.Text>
                <Card.Text>
                  <strong>To:</strong> {booking.flight.to.toUpperCase()}
                </Card.Text>
                <Card.Text>
                  <strong>Departure Date:</strong> {booking.flight.take_off.slice(0, -8)}
                </Card.Text>
                <Card.Text>
                  <strong>Arrival Date:</strong> {booking.flight.land_off.slice(0, -8)}
                </Card.Text>
                <Card.Text>
                  <strong>Passenger Details:</strong>
                </Card.Text>
                <ul>
                  {booking.booking_details.map((detail, index) => (
                    <li key={index}>
                      Passenger {index + 1}: {detail.name.toUpperCase()}, {detail.age} years
                      old
                    </li>
                  ))}
                </ul>
                <Button
                variant="outline-danger"
                className="d-flex justify-content-center mx-auto mt-3"
                onClick={() => handleDelete(booking._id)}
                >
                Cancel
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
};

export default BookingDetails;
