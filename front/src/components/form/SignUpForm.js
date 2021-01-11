import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './form.css';

const SignUpForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    if (event.target.checkValidity() && user.email === user.confirm_email) {
      props.onSubmit(user);
    }
  };

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Form
      noValidate
      validated={validated}
      className="signup-form"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-5">Sign Up</h1>
      <Form.Group controlId="formBasicName">
        <Row>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={handleInputChange}
              name="name"
              required
            />
          </Col>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={handleInputChange}
              name="last_name"
              required
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
          name="username"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          name="email"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formRepeatEmail">
        <Form.Control
          type="email"
          placeholder="Confirm your email"
          onChange={handleInputChange}
          name="confirm_email"
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          name="password"
          minlength="8"
          maxlenght="16"
          required
        />
        <Form.Control.Feedback type="invalid">
          Minimum 8 characters
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="danger" type="submit" className="mx-auto d-block">
        Submit
      </Button>
    </Form>
  );
};
export default SignUpForm;
