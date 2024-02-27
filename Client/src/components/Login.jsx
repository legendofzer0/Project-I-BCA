import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/root.css";
import axios from "axios";

const Login = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      if (email === "" || password === "") {
        setError("fill everything");
        return;
      }
      const getUser = await axios.post("/api/user/email", {
        email: email,
      });
      if (getUser.data.length === 0) {
        console.log("User doesn't exists");
        setError("User doesn't exists");
        return;
      }
      if (
        email === getUser.data[0].email &&
        password === getUser.data[0].password
      ) {
        console.log(getUser.data[0]);
        setError("");
        navigate("/");
      } else {
        setError("Email or Password is incorrect");
        throw new Error("Email or Password is incorrect");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="center">
      <div className="modal">
        <form className="form">
          <h2>Login</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error-message">{error}</div>}
          <br />
          <button className="submit" onClick={handleLogin}>
            Login
          </button>
          <div className="center line"></div>

          <p className="center">Don't have an account?</p>
          <div className="center">
            <Link to="/SignUp" className="login">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
