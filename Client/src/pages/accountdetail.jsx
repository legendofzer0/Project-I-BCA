import { useState } from "react";
import axios from "axios";
import Role from "../private/role";
import UpdateUserModal from "../components/updateModal";
import { Modal } from "@mui/material";
function Detail({ CurrentUser }) {
  const [Username, setUsername] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [fullname, setFullName] = useState();
  const [Password, setPassword] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const id = 25;
  const user = {
    username: Username,
    email: Email,
    phoneNumber: PhoneNumber,
    fullname: fullname,
    Id: id,
  };
  useState(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("/api/user/" + id);
        console.log(response);
        setUsername(response.data[0].username);
        setEmail(response.data[0].email);
        setPhoneNumber(response.data[0].phone_number);
        setFullName(response.data[0].full_name);
        setPassword(response.data[0].password);
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleOpChange = () => setIsChange(true);
  const handleCLChange = () => setIsChange(false);

  console.log(user);
  return CurrentUser === Role.Public ? (
    <div>SignIn/SignUp</div>
  ) : (
    <div className="body">
      <div>Welcome {Username}</div>
      <div>
        Role: {CurrentUser}
        <button className="edit pen" onClick={handleOpen}></button>
        <div className="detail">
          <form>
            <p>
              <label>Name:</label>
              <input type="text" disabled="disabled" value={fullname} />
            </p>
            <p>
              <label>Email:</label>
              <input type="email" disabled="disabled" value={Email} />
            </p>
            <p>
              <label>Username:</label>
              <input type="text" disabled="disabled" value={Username} />
            </p>
            <p>
              <label>Phone Number:</label>
              <input type="number" disabled="disabled" value={PhoneNumber} />
            </p>
            <p>
              <label>Password:</label>
              <input type="password" disabled="disabled" value={Password} />
              <button className="edit pen" onClick={handleOpChange}></button>
            </p>
          </form>
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <div>
          <UpdateUserModal user={user} isOpen={isOpen} />
        </div>
      </Modal>
    </div>
  );
}

export default Detail;
