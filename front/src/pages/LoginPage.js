import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/form/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
      <Container
        fluid
        className="align-items-center d-flex flex-column justify-content-center"
      >
        <Row className="w-100">
          <Col
            md={{ span: 8, offset: 2 }}
            lg={{ span: 4, offset: 4 }}
            xs={{ span: 10, offset: 1 }}
          >
              <LoginForm></LoginForm>
          </Col>
        </Row>
        <footer className="footer">
           <h5>New to the site? <Link to="/signup" className="link">Signup!</Link></h5>
        </footer>
      </Container>
    );
  };
  
  export default LoginPage;
  