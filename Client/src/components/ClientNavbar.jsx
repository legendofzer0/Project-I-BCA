import { Link } from "react-router-dom";
import "../css/root.css";
import Role from "../private/role";
function ClientNavbar({ CurrentUser }) {
  return CurrentUser === Role.Customer ? (
    <>
      <nav>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/cart" className="nav-element">
          Cart
        </Link>

        <Link to="/MyAccount" className="nav-element">
          MyAccount
        </Link>
      </nav>
    </>
  ) : (
    <>
      <nav>
        <Link to="/" className="nav-element">
          Home
        </Link>
        <Link to="/cart" className="nav-element">
          Cart
        </Link>

        <Link to="/SignIn" className="nav-element">
          MyAccount
        </Link>
      </nav>
    </>
  );
}
export default ClientNavbar;
