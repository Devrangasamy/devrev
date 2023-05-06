import React from 'react'
import {Container, Row, Col, Form, Button } from 'react-bootstrap';
export default function Signup() {
        return (
          <Container>
            <Row className="justify-content-center mt-5">
              <Col md={6}>
                <h2 className="mb-3">Sign up</h2>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
      
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
      
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
      
                  <Button variant="primary" type="submit">
                    Sign up
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        );
}
