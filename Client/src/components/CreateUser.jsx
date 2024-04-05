import { useState } from "react";
import axios from "axios";
// import AdminSidebar from "./AdminSidebar"; // Assuming this is not used in this component
import "../css/dashboard.css";

const CreateUser = () => {
  const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [full_name, setFull_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (
      full_name === "" ||
      email === "" ||
      password === "" ||
      username === "" ||
      phone_number === ""
    ) {
      setError("Please fill in all fields");
      return;
    }
    if (!email.match(emailTest)) {
      setError("Invalid email format");
      return;
    } else {
      setError("");
      try {
        const checkEmail = await axios.post("/api/user/email", {
          email: email,
        });
        const checkPhone = await axios.post("/api/user/phone", {
          phone_number: phone_number,
        });
        if (checkEmail.data.length !== 0) {
          setError("User with this email already exists");
          return;
        }
        if (checkPhone.data.length !== 0) {
          setError("User with this phone number already exists");
          return;
        }

        const hashResponse = await axios.post("/api/user/hash", {
          password: password,
        });

        const hash = hashResponse.data;
        const response = await axios.post("/api/user", {
          full_name: full_name,
          username: username,
          email: email,
          password: hash,
          phone_number: phone_number,
        });
        setSuccess("User created successfully");
        // Optionally, you might want to clear the form after successful submission
        setFull_name("");
        setUsername("");
        setEmail("");
        setPassword("");
        setPhone_number("");
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("Error creating user");
      }
    }
  };

  return (
    <>
      {/* <AdminSidebar /> */}
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Create User</h2>
            <div className="error-message center">{error}</div>
            <div className="success-message center">{success}</div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="full_name"
              value={full_name}
              onChange={(e) => {
                setFull_name(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phone_number"
              value={phone_number}
              onChange={(e) => {
                setPhone_number(e.target.value);
              }}
              className="input"
            />
          </div>
          <div className="form-group">
            <button className="submit" type="submit">
              Create User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
