import React, { useState } from 'react';

const PasswordUpdateModal = ({ isOpen, onClose }) => {
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    console.log('Updating password:', newPassword);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Update Password</h2>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
    </div>
  );
};

export default PasswordUpdateModal;
