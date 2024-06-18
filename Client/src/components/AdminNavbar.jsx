import { Link } from "react-router-dom";
import "../css/root.css";

function AdminNavbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <span className="hover-element">
          Dashboard
          <spam className="hide">
            <Link to="/CreateUser" className="nav-element">
              Create User
            </Link>
            <br />
            <Link to="/CreateItem" className="nav-element">
              Create Item
            </Link>
            <br />
            <Link to="/ListUser" className="nav-element">
              List User
            </Link>
            <br />
            <Link to="/ListItem" className="nav-element">
              List Item
            </Link>
            <br />
          </spam>
        </span>
        <Link to="/MyAccount" className="nav-element">
          MyAccount
        </Link>
      </nav>
    </>
  );
}
export default AdminNavbar;
