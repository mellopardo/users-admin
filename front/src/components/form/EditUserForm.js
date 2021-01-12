import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const EditUserForm = (props) => {
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(props.user);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true);
    if (event.target.checkValidity()) {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Control
          type="text"
          placeholder="Name"
          onChange={handleInputChange}
          name="name"
          value={user.name}
          required
        />
      </Form.Group>
      <Form.Group controlId="formLastname">
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={handleInputChange}
          name="last_name"
          value={user.last_name}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicUsername">
        <Form.Control
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
          name="username"
          value={user.username}
          required
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          name="email"
          value={user.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email.
        </Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};
export default EditUserForm;
