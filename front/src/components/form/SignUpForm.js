import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './signupform.css';

const SignUpForm = () => {
  return (
    <Form className="signup-form">
      <h1 className="mb-5">Sign Up</h1>
      <Form.Group controlId="formBasicName">
        <Row>
          <Col sm="6">
            <Form.Control type="text" placeholder="Name" />
          </Col>
          <Col sm="6">
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formBasicUsername">
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="formRepeatEmail">
        <Form.Control type="email" placeholder="Confirm your email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger" type="submit" className="mx-auto d-block">
        Submit
      </Button>
    </Form>
  );
};
export default SignUpForm;
