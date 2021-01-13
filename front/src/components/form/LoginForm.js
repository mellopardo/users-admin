import React, { useState } from 'react';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.css';

const LoginForm = ({ onLogin }) => {
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.checkValidity()) {
      onLogin(data);
    }
  };

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };


  return (
    <Form
      noValidate
      onSubmit={handleSubmit}
    >
      <h1 className="mb-5">Login</h1>
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Enter Username or Email"
          name="username"
          required
          onChange={handleInputChange}
        />
      </FormGroup>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          minlength="8"
          maxlenght="16"
          required
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          Incorrect password, try again.
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant="danger"
        type="submit"
        className="mx-auto d-block button-login"
      >
        Submit
      </Button>
    </Form>
  );
};
export default LoginForm;
