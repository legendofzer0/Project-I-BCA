import { Link } from "react-router-dom";
import "../css/root.css";

function RiderNavbar() {
  return (
    <>
      <nav>
        <Link to="/"> Home |</Link>
        <Link to="/Rider"> Dashboard |</Link>
        <Link to="/MyAccount"> MyAccount</Link>
      </nav>
    </>
  );
}
export default RiderNavbar;
