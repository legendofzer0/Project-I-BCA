import { Link } from "react-router-dom";
import "../css/root.css";

function AdminNavbar() {
  return (
    <nav>
      <Link to="/" className="nav-element">
        Home
      </Link>
      <div className="nav-element dropdown">
        Dashboard
        <div className="dropdown-content">
          <Link to="/CreateUser" className="dropdown-item">
            Create User
          </Link>
          <Link to="/CreateItem" className="dropdown-item">
            Create Item
          </Link>
          <Link to="/ListUser" className="dropdown-item">
            List User
          </Link>
          <Link to="/ListItem" className="dropdown-item">
            List Item
          </Link>
        </div>
      </div>
      <Link to="/MyAccount" className="nav-element">
        MyAccount
      </Link>
    </nav>
  );
}

export default AdminNavbar;
