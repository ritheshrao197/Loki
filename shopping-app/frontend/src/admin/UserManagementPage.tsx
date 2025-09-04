import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './UserManagementPage.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  status: 'active' | 'pending' | 'suspended';
  joinDate: string;
  lastLogin?: string;
}

const UserManagementPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'buyer',
      status: 'active',
      joinDate: '2023-01-15',
      lastLogin: '2023-06-20'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'seller',
      status: 'active',
      joinDate: '2023-02-20',
      lastLogin: '2023-06-19'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      role: 'seller',
      status: 'pending',
      joinDate: '2023-06-10'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      role: 'buyer',
      status: 'active',
      joinDate: '2023-03-05',
      lastLogin: '2023-06-18'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2022-11-30',
      lastLogin: '2023-06-20'
    },
    {
      id: 6,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      role: 'seller',
      status: 'suspended',
      joinDate: '2023-01-25',
      lastLogin: '2023-05-15'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRoleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoleFilter(e.target.value);
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  const handleUserSelect = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const handleApproveSeller = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId && user.role === 'seller' 
        ? { ...user, status: 'active' } 
        : user
    ));
  };

  const handleSuspendUser = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: 'suspended' } 
        : user
    ));
  };

  const handleActivateUser = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: 'active' } 
        : user
    ));
  };

  const getStatusClass = (status: User['status']) => {
    switch (status) {
      case 'active': return 'status-active';
      case 'pending': return 'status-pending';
      case 'suspended': return 'status-suspended';
      default: return '';
    }
  };

  const getRoleClass = (role: User['role']) => {
    switch (role) {
      case 'buyer': return 'role-buyer';
      case 'seller': return 'role-seller';
      case 'admin': return 'role-admin';
      default: return '';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div>
      <Navbar userType="admin" />
      <main className="user-management-page">
        <div className="container">
          <div className="page-header">
            <h1>User Management</h1>
            <p>Manage all users on the platform</p>
          </div>

          <div className="filters-toolbar">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
            
            <div className="filter-selects">
              <select value={roleFilter} onChange={handleRoleFilter} className="filter-select">
                <option value="all">All Roles</option>
                <option value="buyer">Buyers</option>
                <option value="seller">Sellers</option>
                <option value="admin">Admins</option>
              </select>
              
              <select value={statusFilter} onChange={handleStatusFilter} className="filter-select">
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>
            
            <div className="bulk-actions">
              {selectedUsers.length > 0 && (
                <span>{selectedUsers.length} selected</span>
              )}
            </div>
          </div>

          <div className="users-table-container">
            <table className="users-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map(user => (
                    <tr key={user.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleUserSelect(user.id)}
                        />
                      </td>
                      <td>
                        <div className="user-info">
                          <h4>{user.name}</h4>
                          <p>{user.email}</p>
                        </div>
                      </td>
                      <td>
                        <span className={`role-badge ${getRoleClass(user.role)}`}>
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${getStatusClass(user.status)}`}>
                          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </span>
                      </td>
                      <td>{user.joinDate}</td>
                      <td>{user.lastLogin || 'Never'}</td>
                      <td>
                        <div className="action-buttons">
                          {user.role === 'seller' && user.status === 'pending' && (
                            <button 
                              className="approve-btn"
                              onClick={() => handleApproveSeller(user.id)}
                            >
                              Approve
                            </button>
                          )}
                          
                          {user.status === 'active' && (
                            <button 
                              className="suspend-btn"
                              onClick={() => handleSuspendUser(user.id)}
                            >
                              Suspend
                            </button>
                          )}
                          
                          {user.status === 'suspended' && (
                            <button 
                              className="activate-btn"
                              onClick={() => handleActivateUser(user.id)}
                            >
                              Activate
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="no-users">
                      No users found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagementPage;