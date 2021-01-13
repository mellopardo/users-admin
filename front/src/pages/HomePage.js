import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import UsersTable from '../components/users-table/UsersTable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import EditUserForm from '../components/form/EditUserForm';
import LineGraph from '../components/graph/LineGraph';
import NavigationBar from '../components/nav-bar/NavigationBar';
import actions from '../actions';
import './homepage.css';

const HomePage = ({ history }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const closeEditModal = () => setShow(false);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const data = [
    {
      id: 'users',
      color: 'hsl(245, 70%, 50%)',
      data: [
        {
          x: '01-2021',
          y: 1,
        },
        {
          x: '02-2021',
          y: 100,
        },
        {
          x: '03-2021',
          y: 120,
        },
        {
          x: '04-2021',
          y: 60,
        }, {
          x: '05-2021',
          y: 85,
        },
        {
          x: '06-2021',
          y: 70,
        },
        {
          x: '07-2021',
          y: 125,
        },

        {
          x: '10-2021',
          y: 325,
        },
      ],
    },
  ];

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const users = await actions.getUsers();
    setUsers(users);
    setLoading(false);
  }

  const editUser = async (user) => {
    setUpdating(true);
    try {
      await actions.edit(user);
      setUpdating(false);
      closeEditModal();
      loadUsers();
    } catch (error) {
      alert("error")
    } finally {
      setUpdating(false);
    }
  }

  const deleteUser = async () => {
    setUpdating(true);
    try {
      await actions.deleteUser(user);
      setUpdating(false);
      closeDeleteModal();
      loadUsers();
    } catch (error) {
      alert("error")
    } finally {
      setUpdating(false);
    }
  }

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
      {loading && (
        <div className="d-flex justify-content-center align-items-center flex-column spinner">
          <Spinner animation="border" variant="info" role="status" />
        </div>
      )}
      {!loading &&
        (<>
          <Row className="w-100 h-100">
            <Col md={{ span: 6, offset: 0 }} xs={{ span: 12, offset: 0 }} className="home-page-graph">
              <LineGraph data={data} legend="Registered Users" />
            </Col>
            <Col md={{ span: 6, offset: 0 }} xs={{ span: 12, offset: 0 }} className="home-page-graph">
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
        </>)}
      <Modal show={show} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm user={user} onSubmit={editUser} loading={updating}></EditUserForm>
        </Modal.Body>
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
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default withRouter(HomePage);
