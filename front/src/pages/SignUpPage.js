import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../components/form/SignUpForm';
import actions from '../actions';
import './page.css';

const SignUpPage = ({ history }) => {
   const [loading, setLoading] = useState(false);
  const onSubmit = async (user) => {
    setLoading(true);
    try {
      await actions.signup(user);
    } catch (error) {
      console.log("Hubo un error")
    }

    setLoading(false);
    history.push('/');
  }

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
          <SignUpForm onSubmit={onSubmit} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
};
export default withRouter(SignUpPage);
