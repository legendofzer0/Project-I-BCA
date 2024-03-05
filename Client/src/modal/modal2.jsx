import { useState, useEffect } from "react";
import "../css/modal.css";
import axios from "axios";

const UpdateModal = ({ user }) => {
  const [full_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const isValidEmail = /\S+@\S+\.\S+/;
  const id = user;

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/api/user/" + id);
        setUsername(response.data[0].username);
        setEmail(response.data[0].email);
        setPhoneNumber(response.data[0].phone_number);
        setName(response.data[0].full_name);
        setRole(response.data[0].role);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [id]);

  const handleUpdate = async () => {
    setError("");
    try {
      if (!username || !email || !phoneNumber || !full_name) {
        setError("Fill all fields");
        return;
      }
      if (!email.match(isValidEmail)) {
        setError("Email is invalid");
        return;
      }
      if (phoneNumber.length !== 10) {
        setError("Number should be 10 characters long");
        return;
      }

      const response = await axios.put("/api/user/role/" + id, {
        username,
        email,
        phone_number: phoneNumber,
        full_name,
        role,
      });
      console.log(response);
      return;
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("An error occurred while updating the user.");
    }
  };

  return (
    <>
      <div className="center middle">
        <div className="modal form">
          <h2>Update User Data</h2>
          <form>
            <div className="error">{error}</div>
            <label>
              Name:
              <input
                type="text"
                value={full_name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <br />
            <label>
              Role:
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Rider">Rider</option>
              </select>
            </label>
            <br />
            <button className="submit" type="button" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
