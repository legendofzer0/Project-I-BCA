import { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const UpdateUserModal = ({ user }) => {
  const [fullName, setFullName] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [error, setError] = useState("");
  const isValidEmail = /\S+@\S+\.\S+/;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!username || !email || !phoneNumber || !fullName) {
      setError("Please fill all fields.");
      return;
    }
    if (!isValidEmail.test(email)) {
      setError("Email is invalid.");
      return;
    }
    if (phoneNumber.length !== 10) {
      setError("Phone number should be 10 characters long.");
      return;
    }

    try {
      const response = await axios.put(`/api/user/${user.Id}`, {
        username,
        email,
        phone_number: phoneNumber,
        full_name: fullName,
      });
      // Handle response or close modal here
      console.log(response);
      window.location.reload(false);
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user.");
    }
  };

  return (
    <div className="center middle">
      <div className="modal form">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          {error && <div className="error-message">{error}</div>}

          <label>Name:</label>
          <br />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label>Phone Number:</label>
          <br />
          <input
            type="text" // Changed to text to handle leading zeros
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModal;
