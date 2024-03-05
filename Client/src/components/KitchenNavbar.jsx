import { Link } from "react-router-dom";
import "../css/root.css";

function KitchenNavbar() {
  return (
    <>
      <nav>
        <Link className="nav-element" to="/">
          Home
        </Link>
        <Link className="nav-element" to="/Kitchen">
          Dashboard
        </Link>
        <Link className="nav-element" to="/MyAccount">
          MyAccount
        </Link>
      </nav>
    </>
  );
}
export default KitchenNavbar;
