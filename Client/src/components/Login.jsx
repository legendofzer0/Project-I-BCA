import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import "../css/root.css";
// import comparePassword from "../../../Server/middleware/comparePassword";

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const getUserResponse = await axios.post("/api/user/email", {
        email: email,
      });

      if (getUserResponse.data.length === 0) {
        setError("User doesn't exist.");
        return;
      }

      const user = getUserResponse.data[0]; // Assuming you're expecting a single user
      // console.log(user);

      const checkPassResponse = await axios.post("/api/user/compare", {
        password: password,
        checkPassword: user.password,
      });
      const isPasswordCorrect = checkPassResponse.data;

      if (isPasswordCorrect) {
        const tokenResponse = await axios.post("/api/user/genToken", {
          userId: user.user_id,
          role: user.role,
        });
        console.log(tokenResponse);
        cookies.set("token", tokenResponse.data, { path: "/" }); // Ensure you set the correct path
        navigate("/");
      } else {
        setError("Email or Password is incorrect.");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="center">
      <div className="modal">
        <form className="form" onSubmit={handleLogin}>
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
          <button type="submit" className="submit">
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
