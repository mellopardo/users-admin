import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from '../../icons/Button';
import Edit from '../../icons/Edit';
import Trash from '../../icons/Trash';
import './userstable.css';

const UsersTable = ({ users, onEdit, onDelete }) => {
  return (
    <Table className="table table-striped table-container" responsive>
      <thead className="header-table">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Last name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>{user.name}</td>
            <td>{user.last_name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <Button onClick={() => onEdit(user)}>
                <Edit></Edit>
              </Button>
              <Button onClick={() => onDelete(user)}>
                <Trash></Trash>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
