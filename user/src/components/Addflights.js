import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Adminnavbar from './Adminnavbar';
import { useNavigate } from 'react-router-dom';
const Addflights = () => {
  const [flightId, setFlightId] = useState("");
  const [flightName, setFlightName] = useState("");
  const [flightTime, setFlightTime] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState(0);
  const [noOfSeats, setNoOfSeats] = useState(0);
  const [takeOff, setTakeOff] = useState(new Date());
  const [landOff, setLandOff] = useState(new Date());
  const Navigate = useNavigate();
const handleSubmit = async(event) => {
    event.preventDefault();
      const response = await fetch('https://fair-blue-sea-lion-kit.cyclic.app/api/flight/registerflight', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  
            flightid: flightId,
            flightname: flightName,
            flighttime: flightTime,
            from: from,
            to: to,
            price: price,
            noofseats: noOfSeats,
            take_off: takeOff,
            land_off: landOff
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.status === "success") {
      console.log("flight is been added");
      Navigate("/viewflights");
    } else 
    {
      console.log("flight is been not added");
  }
};
    

  return (
    <div >
        <Adminnavbar></Adminnavbar>
        <Row className="justify-content-center mt-4">
      <Col md={3}>
      <Form onSubmit={handleSubmit}>
          <Row>
          <Col>
            <Form.Group controlId="flightId">
              <Form.Label>Flight ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter flight ID"
                value={flightId}
                onChange={(event) => setFlightId(event.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="flightName">
              <Form.Label>Flight Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter flight name"
                value={flightName}
                onChange={(event) => setFlightName(event.target.value)}
              />
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
            <Form.Group controlId="flightTime">
              <Form.Label>Flight Time</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter flight time"
                value={flightTime}
                onChange={(event) => setFlightTime(event.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="from">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter departure location"
                value={from}
                onChange={(event) => setFrom(event.target.value)}
              />
            </Form.Group>
          </Col>
          </Row>
          <Row>
          <Col>
            <Form.Group controlId="to">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter arrival location"
                value={to}
                onChange={(event) => setTo(event.target.value)}
              />
            </Form.Group>
          </Col>
          </Row>
  <Row>
    <Col>
      <Form.Group controlId="noofseats">
        <Form.Label>No of seats</Form.Label>
        <Form.Control type="number" value={noOfSeats} onChange={(event) => setNoOfSeats(event.target.value)} />
      </Form.Group>
    </Col>
    </Row>
  <Row>
    <Col>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col>
      <Form.Group controlId="take_off">
        <Form.Label>Take Off Time</Form.Label>
        <Form.Control type="datetime-local" value={takeOff} onChange={(event) => setTakeOff(event.target.value)} />
      </Form.Group>
    </Col>
    </Row>
    <Row>
    <Col>
      <Form.Group controlId="land_off">
        <Form.Label>Land Off Time</Form.Label>
        <Form.Control type="datetime-local" value={landOff} onChange={(event) => setLandOff(event.target.value)} />
      </Form.Group>
    </Col>
  </Row>
  <br></br>
  <Button variant="danger" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
  </Col>
  </Row>
</div>
);
}

export default Addflights;