import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../components/form/SignUpForm';
import './signUpPage.css';

const SignUpPage = () => {
  return (
    <Container
      fluid
      className="align-items-center d-flex justify-content-center"
    >
      <Row className="w-100">
        <Col
          md={{ span: 8, offset: 2 }}
          lg={{ span: 4, offset: 4 }}
          xs={{ span: 10, offset: 1 }}
        >
          <SignUpForm onSubmit={() => {}} />
        </Col>
      </Row>
    </Container>
  );
};
export default SignUpPage;
