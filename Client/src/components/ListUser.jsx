import { useState, useEffect } from "react";
import axios from "axios";
import "../css/dashboard.css";
import { Modal } from "@mui/material";
import UpdateModal from "../modal/modal2";
import Cookies from "universal-cookie";
import ConformUserDelete from "../modal/ConformUserDelete";
// import AdminSidebar from "../components/AdminSidebar";

const UserList = () => {
  const cookie = new Cookies();
  const [Id, setId] = useState(null); // Initialize to null

  useEffect(() => {
    const tokenData = cookie.get("token");

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
  }, [cookie]);

  const [userList, setUserList] = useState([]);
  const [user_id, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModals, setDeleteModals] = useState({}); // Object to track delete modals for each user

  useEffect(() => {
    fetchUsers();
  }, [Id]); // Fetch users when Id changes

  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/user");
      setUserList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditUser = (id) => {
    setIsOpen(true);
    setUserId(id);
  };

  const handleOpenDel = (id) => {
    setDeleteModals({ ...deleteModals, [id]: true });
  };

  const handleCloseDel = (id) => {
    setDeleteModals({ ...deleteModals, [id]: false });
  };

  return (
    <>
      {/* <AdminSidebar /> */}
      <div className="user-list">
        <h2>User List</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="column bottom">S.N.</th>
              <th className="column bottom">Full Name</th>
              <th className="column bottom">Username</th>
              <th className="column bottom">Role</th>
              <th className="action bottom">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) =>
              Id !== user.user_id ? (
                <tr key={user.user_id}>
                  <td className="column">{index + 1}</td>
                  <td className="column">{user.full_name}</td>
                  <td className="column">{user.username}</td>
                  <td className="column">{user.role}</td>
                  <td className="action">
                    <span className="btn-back">
                      <button
                        className="edit2"
                        onClick={() => handleEditUser(user.user_id)}
                      ></button>
                    </span>
                    {user.role !== "customer" && (
                      <span className="btn-back">
                        <button
                          className="del"
                          onClick={() => handleOpenDel(user.user_id)}
                        ></button>
                      </span>
                    )}
                  </td>
                  <Modal
                    open={isOpen && user.user_id === user_id}
                    onClose={() => setIsOpen(false)}
                  >
                    <div>
                      <UpdateModal user={user.user_id} isOpen={isOpen} />
                    </div>
                  </Modal>
                  <Modal
                    open={deleteModals[user.user_id] || false}
                    onClose={() => handleCloseDel(user.user_id)}
                  >
                    <div>
                      <ConformUserDelete user={user.user_id} />
                    </div>
                  </Modal>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
