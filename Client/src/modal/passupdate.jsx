import { useState } from "react";
import axios from "axios";
import "../css/modal.css";
const PasswordUpdateModal = ( user ) => {
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  // const user
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUpdatePassword = async() => {
    try {
      setError("");
      if (!newPassword || newPassword.length <= 3) {
        setError("Password need to be more than 3 characters");
        throw new Error("Error in password");
      }
      const hashResponse = await axios.post("/api/user/hash", {
        password: newPassword,
      });

      const hash = hashResponse.data;
      console.log(user);
      const response = await axios.put("api/user/pass/" + user.userId, {
        password: hash,
      });
      console.log(response);
      // window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="center middle">
      <div className="modal form">
        <h2>Update Password</h2>
        <div className="error-message"> {error}</div>

        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <button className="submit" onClick={handleUpdatePassword}>
          Update Password
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdateModal;
