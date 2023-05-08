import React, { useState } from "react";
import { Form, Button,Col,Row } from "react-bootstrap";
import Navbars from "./Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function BookingForm() {
  const [customerName, setCustomerName] = useState("");
  const [bookingDetails, setBookingDetails] = useState([]);
  const Navigate = useNavigate();
  const location = useLocation();
  const {data} = location.state;
  const handleCustomerNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleBookingDetailsChange = (index, field, value) => {
    const updatedDetails = [...bookingDetails];
    updatedDetails[index][field] = value;
    setBookingDetails(updatedDetails);
  };
  const handleAddBookingDetails = () => {
    setBookingDetails([...bookingDetails, {}]);
  };

  const handleDeleteBookingDetails = (index) => {
    const updatedDetails = [...bookingDetails];
    updatedDetails.splice(index, 1);
    setBookingDetails(updatedDetails);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
      const response = await fetch('https://fair-blue-sea-lion-kit.cyclic.app/api/book/registerbooking', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({  
          user:localStorage.getItem("id"),
          flight:data._id,
          flightid:data.flightid,
          customer_name: customerName,
          booking_details: bookingDetails,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.status === "success") {
      console.log("your tickets are been placed");
      Navigate("/");
    } else 
    {
      Navigate("/");
  }
};
  return (
    <>
      <Navbars></Navbars>
      <Row className="justify-content-center mt-4">

    <Col md={3}>
    <div  className="d-flex justify-content-between align-items-center">
      <Button variant="outline-danger" >
      {data.flightid}
      </Button>
      <Button variant="outline-danger">
      {data.flightname}
      </Button>
      </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicCustomerName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter customer name"
          value={customerName}
          onChange={handleCustomerNameChange}
        />
      </Form.Group>

      {bookingDetails.map((booking, index) => (
        <div key={index}>
          <Form.Group controlId={`formBasicName-${index}`}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={booking.name}
              onChange={(event) =>
                handleBookingDetailsChange(index, "name", event.target.value)
              }
            />
          </Form.Group>

          <Form.Group controlId={`formBasicSeatNo-${index}`}>
            <Form.Label>Seat No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter seat no"
              value={booking.seat_no}
              onChange={(event) =>
                handleBookingDetailsChange(
                  index,
                  "seat_no",
                  parseInt(event.target.value)
                )
              }
            />
          </Form.Group>

          <Form.Group controlId={`formBasicAge-${index}`}>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={booking.age}
              onChange={(event) =>
                handleBookingDetailsChange(
                  index,
                  "age",
                  parseInt(event.target.value)
                )
              }
            />
          </Form.Group>

          <Form.Group controlId={`formBasicPhoneNo-${index}`}>
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone no"
              value={booking.phone_no}
              onChange={(event) =>
                handleBookingDetailsChange(
                  index,
                  "phone_no",
                  parseInt(event.target.value)
                )
              }
            />
          </Form.Group>
          <br></br>
          <Button
            variant="danger"
            onClick={() => handleDeleteBookingDetails(index)}
          >
            Delete
          </Button>
        </div>
      ))}
      <br></br>
    <div  className="d-flex justify-content-between align-items-center">
      <Button variant="danger" onClick={handleAddBookingDetails}>
        Add Booking Details
      </Button>

      <Button variant="danger" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </Col>
    </Row>
    </>
  );
}

export default BookingForm;