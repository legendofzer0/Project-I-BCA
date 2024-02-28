import { useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import "../css/dashboard.css";

const CreateUser = () => {
  const email_test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [error, setError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSucess("");
    if (
      formData.full_name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.username === "" ||
      formData.phone_number === ""
    ) {
      setError("fill everything");
      return;
    }
    if (!formData.email.match(email_test)) {
      setError("Email is bad");
      return;
    } else {
      setError("");
      try {
        console.log("test");
        const checkEmail = await axios.post("/api/user/email", {
          email: formData.email,
        });
        const checkPhone = await axios.post("/api/user/phone", {
          phone_number: formData.phoneNumber,
        });
        if (checkEmail.data.length !== 0) {
          console.log("User already exists");
          setError("User already exists");
          return;
        }
        if (checkPhone.data.length !== 0) {
          console.log("Phone already exist");
          setError("Phone already exist");
          return;
        }

        const response = await axios
          .post("/api/user", formData)
          .then(setSucess("Created Sucessfully"));
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h2>Create User</h2>
            <div className="error-message center">{error}</div>
            <div className="sucess-message center">{sucess}</div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="number"
              id="phoneNumber"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="input "
            />

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
