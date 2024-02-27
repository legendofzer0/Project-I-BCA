import { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const UpdateUserModal = ({ user }) => {
  const [full_name, setName] = useState(user.fullname);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [error, setError] = useState("");
  const isValidEmail = /\S+@\S+\.\S+/;
  const id = user.Id;
  const handleSubmit = async () => {
    setError("");
    try {
      if (
        username === "" ||
        email === "" ||
        phoneNumber === "" ||
        full_name === ""
      ) {
        setError("Fill all the field");
        return;
      }
      if (!email.match(isValidEmail)) {
        setError("Email is invalid");
        return;
      }
      if (phoneNumber.length != 10) {
        setError("Number Should be 10 character's long");
        return;
      }

      const response = await axios.put("/api/user/" + id, {
        username: username,
        email: email,
        phone_number: phoneNumber,
        full_name: full_name,
      });
      console.log(response);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  return (
    <div className="center middle">
      <div className="modal form">
        <form>
          <div>
            <h2>Update User</h2>
            <div className="error-message">{error}</div>

            <label>Name:</label>
            <br />
            <input
              type="text"
              value={full_name}
              onChange={(e) => setName(e.target.value)}
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
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <br />
            <button className="submit" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModal;
