import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Role from "../private/role";
import UpdateUserModal from "../components/updateModal";
import OrderTrack from "../components/OrderTrack";
import HandleUpdatePassword from "../modal/passupdate"; // Ensure this is properly exported as a component
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/root.css";

function Detail({ CurrentUser }) {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null); // Initialize to null
  const [isOpen, setIsOpen] = useState(false);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    const tokenData = cookie.get("token");
    if (!tokenData) return;

    const verifyToken = async () => {
      try {
        const response = await axios.post("/api/user/verifyToken", {
          token: tokenData,
        });
        setUserId(response.data.userId);
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    };

    verifyToken();
  }, [cookie]);

  useEffect(() => {
    const fetchUser = async (userId) => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (userId) {
      fetchUser(userId);
    }
  }, [userId]);
  console.log(user);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpChange = () => setIsChange(!isChange); // Toggle isChange

  const logOut = (e) => {
    e.preventDefault();
    cookie.remove("token", { path: "/" });
    navigate("/");
  };
  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `/api/user/${updatedUser.id}`,
        updatedUser
      );
      setUser(response.data);
      setIsOpen(false); // Close modal after successful update
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div>
      <div className="user-info">
        <div className="detail">
          <div>Welcome {user.username}</div>
          <div>
            Role: {CurrentUser} 
            <button
              type="button"
              className="edit pen"
              onClick={handleOpen}
            ></button>
            <div className="detail">
              <form><br />
                <p>
                  <label>Name:</label>
                  <input
                    type="text"
                    value={user.full_name}
                    onChange={(e) =>
                      setUser({ ...user, full_name: e.target.value })
                    }
                    disabled={!isChange}
                  />
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    disabled={!isChange}
                  />
                </p>
                <p>
                  <label>Username:</label>
                  <input
                    type="text"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    disabled={!isChange}
                  />
                </p>
                <p>
                  <label>Phone Number:</label>
                  <input
                    type="number"
                    value={user.phone_number}
                    onChange={(e) =>
                      setUser({ ...user, phone_number: e.target.value })
                    }
                    disabled={!isChange}
                  />
                </p>
                <p>
                  <label>Password:</label>
                  <input
                    type="password"
                    value="**********"
                    disabled={!isChange}
                  />
                  <button
                    type="button"
                    className="edit pen"
                    onClick={handleOpChange}
                  ></button>
                </p>
                <button className="logOut" type="button" onClick={logOut}>
                  SIGN OUT
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="order">
          <OrderTrack id={userId} />
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <UpdateUserModal
          user={user}
          isOpen={isOpen}
          onUpdate={handleUpdateUser}
          onClose={handleClose}
        />
      </Modal>
      <Modal open={isChange} onClose={handleOpChange}>
        <HandleUpdatePassword userId={user.id} onClose={handleOpChange} />
      </Modal>
    </div>
  );
}

export default Detail;
