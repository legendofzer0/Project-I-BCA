import React, { useState } from 'react';

const SignUp = ({ toggleForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = () => {
    // Implement your sign up logic here
    console.log('Signing up...');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <label>User Name:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

      <label>Phone Number:</label>
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

      <button onClick={handleSignUp}>Sign Up</button>

      <p>Already have an account? <span onClick={toggleForm}>Login</span></p>
    </div>
  );
};

export default SignUp;