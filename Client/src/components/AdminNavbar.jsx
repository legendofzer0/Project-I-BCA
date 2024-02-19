import { Link } from "react-router-dom";
function AdminNavbar() {
  return (
    <>
      <nav>
        <Link to="/"> Home |</Link>
        <Link to="/Admin"> Dashboard |</Link>
        <Link to="/MyAccount"> MyAccount</Link>
      </nav>
    </>
  );
}
export default AdminNavbar;
