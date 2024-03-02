import React, { useState } from 'react';

const UpdateUserModal = ({ isOpen, onClose, user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleUpdate = () => { 
    const updatedUser = {
      id: user.id, 
      name,
      email,
      username,
      phoneNumber,
    };

    onUpdate(updatedUser);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Update User</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateUserModal;
