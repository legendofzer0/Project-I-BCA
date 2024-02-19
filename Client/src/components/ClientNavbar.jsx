import { Link } from "react-router-dom";
function ClientNavbar() {
  return (
    <>
      <nav>
        <Link to="/"> Home |</Link>
        <Link to="/cart"> Cart |</Link>
        <Link to="/MyAccount"> MyAccount</Link>
      </nav>
    </>
  );
}
export default ClientNavbar;
