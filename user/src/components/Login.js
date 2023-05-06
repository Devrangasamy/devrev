import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
export default function Login() {
      return (
        <div>
          <Row className="justify-content-center mt-5">
            <Col md={6}>
              <h2 className="mb-3">Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
    
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
    
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      );
    
}
