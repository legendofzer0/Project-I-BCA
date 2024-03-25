import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/root.css";

const SignUp = ({ modalState }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(modalState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const emailTest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    setIsModalOpen(modalState);
  }, [modalState]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !username || !phoneNumber) {
      setError("Please fill in all fields.");
      return;
    }
    if (!email.match(emailTest)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const checkEmail = await axios.post("/api/user/email", { email });
      if (checkEmail.data.exists) {
        setError("User with this email already exists.");
        return;
      }

      const checkPhone = await axios.post("/api/user/phone", {
        phone_number: phoneNumber,
      });
      // console.log(checkPhone.data);
      if (checkPhone.data.length !== 0) {
        setError("Phone number is already in use.");
        return;
      }

      const hashResponse = await axios.post("/api/user/hash", {
        password: password,
      });

      const hash = hashResponse.data;
      // console.log(hash);

      const response = await axios.post("/api/user", {
        full_name: name,
        email,
        password: hash,
        username,
        phone_number: phoneNumber,
      });

      console.log("SignUp Success:", response.data);
      navigate("/SignIn");
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="center">
          <div className="modal">
            <form className="form" onSubmit={handleSignUp}>
              <h2>Sign Up</h2>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="submit">
                Sign Up
              </button>
              <div className="login-prompt">
                Already have an account? <Link to="/SignIn">Login</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
