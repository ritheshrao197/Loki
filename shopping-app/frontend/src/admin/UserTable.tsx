import React, { useState } from 'react';
import './UserTable.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  joinDate: string;
}

const UserTable: React.FC = () => {
  // Mock user data
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      role: 'buyer',
      status: 'active',
      joinDate: '2023-01-15'
    },
    {
      id: '2',
      name: 'Artisan Crafts Co.',
      email: 'info@artisancrafts.com',
      role: 'seller',
      status: 'active',
      joinDate: '2023-03-22'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2022-11-05'
    }
  ]);

  const getRoleClass = (role: string) => {
    switch (role) {
      case 'buyer': return 'role-buyer';
      case 'seller': return 'role-seller';
      case 'admin': return 'role-admin';
      default: return '';
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case 'buyer': return 'Buyer';
      case 'seller': return 'Seller';
      case 'admin': return 'Admin';
      default: return role;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active': return 'status-active';
      case 'inactive': return 'status-inactive';
      case 'suspended': return 'status-suspended';
      default: return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'inactive': return 'Inactive';
      case 'suspended': return 'Suspended';
      default: return status;
    }
  };

  return (
    <div className="user-table-container">
      <div className="table-header">
        <h2>User Management</h2>
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search users..." 
            className="search-input"
          />
          <button className="add-user-btn">Add User</button>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${getRoleClass(user.role)}`}>
                    {getRoleText(user.role)}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(user.status)}`}>
                    {getStatusText(user.status)}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;