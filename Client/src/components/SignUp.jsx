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

  const postData = {
    full_name: name,
    email: email,
    password: password,
    username: username,
    phone_number: phoneNumber,
  };

  useEffect(() => {
    setIsModalOpen(modalState);
  }, [modalState]);
  // const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      username === "" ||
      phoneNumber === ""
    ) {
      setError("fill everything");
      return;
    }
    if (!email.match(email_test)) {
      setError("Email is bad");
      return;
    } else {
      setError("");
      try {
        console.log("test");
        const checkEmail = await axios.post("/api/user/email", {
          email: email,
        });
        const checkPhone = await axios.post("/api/user/phone", {
          phone_number: phoneNumber,
        });
        if (checkEmail.data.length !== 0) {
          console.log("User already exists");
          console.log(email + "m");
          setError("User already exists");
          return;
        }
        if (checkPhone.data.length !== 0) {
          console.log("Phone already exist");
          // console.log(email + "m");
          setError("Phone already exist");
          return;
        }

        const response = await axios.post("/api/user", postData);
        console.log("Response:", response.data);

        navigate("/SignIn");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="center">
          <div className=" modal">
            <form className="form">
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
              <label>User Name:</label>
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
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
              <br />

              <button className="submit" onClick={handleSignUp}>
                Sign Up
              </button>

              <div className="center line"></div>

              <p className="center">Already have an account?</p>
              <span className="center">
                <Link to="/SignIn" className="login">
                  Login
                </Link>
              </span>
            </form>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default SignUp;
