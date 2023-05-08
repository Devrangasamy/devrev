import React, { useEffect, useState } from "react";
import axios from "axios";
import Adminnavbar from "./Adminnavbar";
import { Card, Container, Row, Col, Button,Form, FormGroup, FormControl } from "react-bootstrap";

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);
  const [customername,setcoustomername]=useState("");
  const [flightname,setflightname]=useState("");
  const [from,setfrom]=useState("");
  const [to,setto]=useState("");
  const [depature,setdepature]=useState("2010-01-20T00:01");
  const [arrival,setarrival]=useState("2025-12-07T23:59");
  const styles={
    transition: 'all 0.2s ease-in-out', // add transition effect
    boxShadow: '1px 3px 7px rgba(0, 0, 0, 0.9)', // add box shadow effect
  };
  useEffect(() => {
    axios.get(`https://fair-blue-sea-lion-kit.cyclic.app/api/book?customername=${customername}&flightname=${flightname}&from=${from}&to=${to}&depature=${new Date(depature).toISOString()}&arrival=${new Date(arrival).toISOString()}`)
    .then((response) => {
      setBookings(response.data);
    });
  }, [customername,flightname,depature,arrival,from,to]);

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`https://fair-blue-sea-lion-kit.cyclic.app/api/book/${bookingId}`);
      const response = await axios.get('https://fair-blue-sea-lion-kit.cyclic.app/api/book?customername=${customername}&flightname=${flightname}&from=${from}&to=${to}&depature=${new Date(depature).toISOString()}&arrival=${new Date(arrival).toISOString()}');
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Adminnavbar />
      <h2 className="text-center mb-4">Bookings Till Now</h2>
      <Row className="justify-content-center mt-4">
      <Col md={3} >
      <Form >
      <FormGroup md={2}>
        <Col sm={5} >
          Customer Name
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Enter customer name" onChange={(e)=>setcoustomername(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup md={2}>
        <Col sm={5} >
          Flight Name
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Enter flight name" onChange={(e)=>setflightname(e.target.value)} />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={2}>
          From
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Enter departure location" onChange={(e)=>setfrom(e.target.value)}/>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={2}>
          To
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Enter arrival location" onChange={(e)=>setto(e.target.value)}/>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={5}>
          Departure Time
        </Col>
        <Col sm={10}>
          <FormControl type="datetime-local" onChange={(e)=>setdepature(e.target.value)}/>
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm={6}>
          Arrival Time
        </Col>
        <Col sm={10}>
          <FormControl type="datetime-local" onChange={(e)=>setarrival(e.target.value)} />
        </Col>
      </FormGroup>
    </Form>
    </Col >
    </Row>
      <Row>
        {bookings.map((booking) => (
          <Col md={4} key={booking._id} >
            <Card className="mb-4" style={styles}>
            <Card.Header className="bg-danger text-white">
                <h4 className="mb-2 text-right">
                {(booking.customer_name).toUpperCase()}
                </h4>
              </Card.Header>
              <Card.Body>
                <Card.Text>Booking ID: {booking._id}</Card.Text>
                <Card.Text>
                  <strong>Flight Name:</strong> {booking.flight && booking.flight.flightname.toUpperCase()}
                </Card.Text>
                <Card.Text>
                  <strong>From:</strong> {booking.flight && booking.flight.from.toUpperCase()}
                </Card.Text>
                <Card.Text>
                  <strong>To:</strong> {booking.flight && booking.flight.to.toUpperCase()}
                </Card.Text>
                <Card.Text>
                  <strong>Departure Date:</strong> {booking.flight && booking.flight.take_off}
                </Card.Text>
                <Card.Text>
                  <strong>Arrival Date:</strong> {booking.flight && booking.flight.land_off}
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
                Delete
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
