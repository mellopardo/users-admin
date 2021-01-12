import React from 'react';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.css';

const LoginForm = () => {
  return (
    <Form>
      <h1 className="mb-5">Login</h1>
      <FormGroup>
        <Form.Control
          type="text"
          placeholder="Enter Username or Email"
          name="username , email"
          required
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
