import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UsersTable from '../components/users-table/UsersTable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditUserForm from '../components/form/EditUserForm';
import './homepage.css';

const HomePage = () => {
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

  return (
    <Container fluid className=" d-flex home-page justify-content-center">
      <Row className="w-100">
        <Col
          lg={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 10, offset: 1 }}
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
export default HomePage;
