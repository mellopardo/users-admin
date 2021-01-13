import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsersTable from '../components/users-table/UsersTable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditUserForm from '../components/form/EditUserForm';
import './homepage.css';
import LineGraph from '../components/graph/LineGraph';
import NavigationBar from '../components/nav-bar/NavigationBar';

const HomePage = ({ history }) => {
  const users = [
    {
      name: 'name1',
      last_name: 'last_name1',
      username: 'username1',
      email: 'email1@gmail.com',
    },
    {
      name: 'name2',
      last_name: 'last_name2',
      username: 'username2',
      email: 'email2@gmail.com',
    },
    {
      name: 'name3',
      last_name: 'last_name3',
      username: 'username3',
      email: 'email3@gmail.com',
    },
    {
      name: 'name4',
      last_name: 'last_name4',
      username: 'username4',
      email: 'email4@gmail.com',
    },
    {
      name: 'name5',
      last_name: 'last_name5',
      username: 'username5',
      email: 'email5@gmail.com',
    },
    {
      name: 'name6',
      last_name: 'last_name6',
      username: 'username6',
      email: 'email6@gmail.com',
    },
  ];

  const data = [
    {
      id: 'japan',
      color: 'hsl(245, 70%, 50%)',
      data: [
        {
          x: 'plane',
          y: 104,
        },
        {
          x: 'helicopter',
          y: 285,
        },
        {
          x: 'boat',
          y: 207,
        },
        {
          x: 'train',
          y: 186,
        },
        {
          x: 'subway',
          y: 92,
        },
        {
          x: 'bus',
          y: 294,
        },
        {
          x: 'car',
          y: 132,
        },
        {
          x: 'moto',
          y: 83,
        },
        {
          x: 'bicycle',
          y: 228,
        },
        {
          x: 'horse',
          y: 82,
        },
        {
          x: 'skateboard',
          y: 270,
        },
        {
          x: 'others',
          y: 119,
        },
      ],
    },
  ];

  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const closeEditModal = () => setShow(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const onEdit = (user) => {
    setUser(user);
    setShow(true);
  };

  const onDelete = (user) => {
    setUser(user);
    setShowDeleteModal(true);
  };

  const onLogOut = () => history.push('/');

  return (
    <Container fluid className="d-flex flex-column home-page">
      <NavigationBar onLogOut={onLogOut}></NavigationBar>
      <Row className="w-100 h-100">
        <Col md={{ span: 6, offset: 0 }} xs={{ span: 12, offset: 0 }}>
          <LineGraph data={data} legend="Registered Users" />
        </Col>
        <Col md={{ span: 6, offset: 0 }} xs={{ span: 12, offset: 0 }}>
          <LineGraph data={data} legend="Logins Users" />
        </Col>
      </Row>
      <Row className="w-100">
        <Col
          lg={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 12, offset: 0 }}
        >
          <UsersTable
            className=""
            users={users}
            onEdit={onEdit}
            onDelete={onDelete}
          ></UsersTable>
        </Col>
      </Row>
      <Modal show={show} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm user={user}></EditUserForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Close
          </Button>
          <Button variant="info" onClick={closeEditModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={closeDeleteModal}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default withRouter(HomePage);
