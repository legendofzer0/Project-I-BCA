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
  const email_test = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    setIsModalOpen(modalState);
  }, [modalState]);

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!name || !email || !password || !username || !phoneNumber) {
      setError("Please fill in all fields.");
      return;
    }
    if (!email.match(email_test)) {
      setError("Invalid email format.");
      return;
    }

    try {
      const checkEmail = await axios.post("/api/user/email", { email });
      const checkPhone = await axios.post("/api/user/phone", {
        phone_number: phoneNumber,
      });

      if (checkEmail.data.length !== 0) {
        setError("User with this email already exists.");
        return;
      }
      if (checkPhone.data.length !== 0) {
        setError("Phone number is already in use.");
        return;
      }

      const { data: hash } = await axios.post("/api/user/hash", { password });

      // Now directly using the hash for the password in the API call
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
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <label>Email:</label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <label>Password:</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <label>Username:</label>
              <br />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
              <label>Phone Number:</label>
              <br />
              <input
                type="tel" // Changed to type="tel" for better phone number handling
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <br />
              {error && <div className="error-message">{error}</div>}
              <br />
              <button type="submit" className="submit">
                Sign Up
              </button>
              <div className="center line"></div>
              <p className="center">Already have an account?</p>
              <Link to="/SignIn" className="login center">
                Login
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
