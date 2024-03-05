// AdminSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/create-user">Create User</Link>
        </li>
        <li>
          <Link to="/admin/list-users">List Users</Link>
        </li>
        <li>
          <Link to="/admin/create-item">Create Item</Link>
        </li>
        <li>
          <Link to="/admin/list-items">List Items</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
