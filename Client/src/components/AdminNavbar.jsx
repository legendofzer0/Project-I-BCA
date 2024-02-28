import { Link } from "react-router-dom";
import "../css/root.css";

function AdminNavbar() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/Admin" className="nav-element">
          Dashboard
        </Link>
        <Link to="/MyAccount" className="nav-element">
          MyAccount
        </Link>
      </nav>
    </>
  );
}
export default AdminNavbar;
