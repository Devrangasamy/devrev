import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col,Form, FormGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';

const Viewflights = () => {
  const [flightname,setflightname]=useState('');
  const [from,setfrom]=useState('');
  const [to,setto]=useState('');
  const [depature,setdepature]=useState("2010-01-20T00:01");
  const [arrival,setarrival]=useState("2025-12-07T23:59");
  const [duration,setduration]=useState(1000);
  const styles={
    transition: 'all 0.2s ease-in-out', // add transition effect
    boxShadow: '1px 3px 7px rgba(0, 0, 0, 0.9)', // add box shadow effect
  };
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get(`https://fair-blue-sea-lion-kit.cyclic.app/api/flight?flightname=${flightname}&from=${from}&to=${to}&duration=${duration}
    &depature=${new Date(depature).toISOString()}&arrival=${new Date(arrival).toISOString()}`)
      .then(res => {
        setFlights(res.data);
      })
      .catch(err => console.log(err));
  }, [flightname,from,to,duration,depature,arrival]);

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`https://fair-blue-sea-lion-kit.cyclic.app/api/flight/${bookingId}`);
      const response = await axios.get(`https://fair-blue-sea-lion-kit.cyclic.app/api/flight?flightname=${flightname}&from=${from}&to=${to}&duration=${duration}
      &depature=${new Date(depature).toISOString()}&arrival=${new Date(arrival).toISOString()}`);
      setFlights(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <Adminnavbar></Adminnavbar>
      <h2 className="text-center mb-4">Flight Details</h2>
      <br />
      <Row className="justify-content-center mt-4">
      <Col md={3} >
      <Form >
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
      <FormGroup>
        <Col sm={2}>
          Duration
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Enter flight duration" onChange={(e)=>setduration(e.target.value)} />
        </Col>
      </FormGroup>
    </Form>
    </Col >
    </Row>
    <br></br>
      <Row>
        {flights.map(flight => (
          <Col md={4} key={flight._id}>
            <Card className="mb-4" style={styles}>
              <Card.Header className="bg-danger text-white">
                <h4 className="mb-2 text-right">
                  {(flight.flightname).toUpperCase()}
                  <span style={{ margin: "10px" }} />
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
                  <Col className="d-flex justify-content-center">
                    <Button 
                variant="outline-danger"
                onClick={() => handleDelete(flight._id)}
              >
                Delete
              </Button>
              </Col>
              <Col className="d-flex justify-content-center">
              <Link to={"/editflight"} state={{data:flight}}>
              <Button variant="outline-danger">
                Edit
              </Button>
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

export default Viewflights;
