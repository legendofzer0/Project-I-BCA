import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Role from "../private/role";
import UpdateUserModal from "../components/updateModal";
import OrderTrack from "../components/OrderTrack";
import HandleUpdatePassword from "../modal/passupdate"; // Ensure this is properly exported as a component
import { Modal } from "@mui/material";
import "../css/card.css";
import { useNavigate } from "react-router-dom";

function Detail({ CurrentUser }) {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState(""); // Consider security implications
  const [isOpen, setIsOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    const tokenData = cookie.get("token")?.data;
    if (!tokenData) return;

    const verifyToken = async () => {
      try {
        const response = await axios.post("/api/user/verifyToken", {
          token: tokenData,
        });
        setId(response.data.userId);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    verifyToken();
  }, []);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/api/user/${id}`);
          const userData = response.data[0];
          setUsername(userData.username);
          setEmail(userData.email);
          setPhoneNumber(userData.phone_number);
          setFullName(userData.full_name);
          setPassword(""); // Reset or clear password field for security
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, [id]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpChange = (e) => {
    e.preventDefault();
    setIsChange(true);
  };

  const handleCLChange = () => setIsChange(false);

  const logOut = (e) => {
    e.preventDefault();
    cookie.remove("token", { path: "/" });
    navigate("/");
  };

  if (CurrentUser === Role.Public) {
    return <div>SignIn/SignUp</div>;
  }

  return (
    <div>
      <div className="body flex">
        <div>Welcome {username}</div>
        <div>
          Role: {CurrentUser}
          <button
            type="button"
            className="edit pen"
            onClick={handleOpen}
          ></button>
          <div className="detail">
            <form>
              <p>
                <label>Name:</label>
                <input type="text" disabled value={fullName} />
              </p>
              <p>
                <label>Email:</label>
                <input type="email" disabled value={email} />
              </p>
              <p>
                <label>Username:</label>
                <input type="text" disabled value={username} />
              </p>
              <p>
                <label>Phone Number:</label>
                <input type="number" disabled value={phoneNumber} />
              </p>
              <p>
                <label>Password:</label>
                <input type="password" disabled value={password} />
                <button
                  type="button"
                  className="edit pen"
                  onClick={handleOpChange}
                ></button>
              </p>
              <button type="button" onClick={logOut}>
                SIGN OUT
              </button>
            </form>
          </div>
        </div>
        <div className="order">
          <OrderTrack id={id} />
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <UpdateUserModal
          user={{ username, email, phoneNumber, fullName, id }}
          isOpen={isOpen}
        />
      </Modal>
      <Modal open={isChange} onClose={handleCLChange}>
        <HandleUpdatePassword userId={id} isChange={isChange} />
      </Modal>
    </div>
  );
}

export default Detail;
