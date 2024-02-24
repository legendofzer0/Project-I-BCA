import { Link } from "react-router-dom";
function KitchenNavbar() {
  return (
    <>
      <nav>
        <Link to="/"> Home |</Link>
        <Link to="/Kitchen"> Dashboard |</Link>
        <Link to="/MyAccount"> MyAccount</Link>
      </nav>
    </>
  );
}
export default KitchenNavbar;