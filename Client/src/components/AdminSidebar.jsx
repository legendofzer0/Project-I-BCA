import { Link } from "react-router-dom";
import "../css/dashboard.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <ul className="side-navbar">
        <li>
          <Link to="/CreateUser" className="sidebar-element">
            Create User
          </Link>
        </li>
        <li>
          <Link to="/ListUser" className="sidebar-element">
            List Users
          </Link>
        </li>

        <br />
        <br />
        <br />
        <br />
        <li>
          <Link to="/CreateItem" className="sidebar-element">
            Create Item
          </Link>
        </li>
        <li>
          <Link to="/ListItem" className="sidebar-element">
            List Items
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
