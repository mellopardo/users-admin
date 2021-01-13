import React from 'react';
import Nav from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';
import Button from 'react-bootstrap/Button';

const NavigationBar = ({ onLogOut }) => {
  return (
    <Nav
      bg="dark"
      variant="dark"
      fixed="top"
      className="justify-content-between"
    >
      <Nav.Brand>
        <img
          alt=""
          src={Logo}
          width="100"
          height="30"
          className="d-inline-block align-top"
        />
      </Nav.Brand>
      <Button variant="info" onClick={onLogOut}>
        Log out
      </Button>
    </Nav>
  );
};

export default NavigationBar;
