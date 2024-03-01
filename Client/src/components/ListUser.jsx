import { useState, useEffect } from "react";
import axios from "axios";
import "../css/dashboard.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/user");
      setUserList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const deleteUserResponse = await axios.delete("/api/user/" + id);
      console.log(deleteUserResponse);
      fetchUsers();
    } catch (err) {
      console.error("Failed to delete user: ", err);
    }
  };

  const handleEditUser = (id) => {
    console.log("Edit user " + id);
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="column bottom">S.N.</th>
            <th className="column bottom">Full Name</th>
            <th className="column bottom">Username</th>
            <th className="column bottom">Role</th>
            <th className="bottom">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={user.user_id}>
              <td className="column">{index + 1}</td>
              <td className="column">{user.full_name}</td>
              <td className="column">{user.username}</td>
              <td className="column">{user.role}</td>
              <td>
                <span className="btn-back">
                  <button
                    className="edit2"
                    onClick={() => handleEditUser(user.user_id)}
                  />
                </span>
                <span className="btn-back">
                  <button
                    className="del"
                    onClick={() => handleDeleteUser(user.user_id)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
