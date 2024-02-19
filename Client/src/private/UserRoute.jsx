import { Routes, Route } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar";

import Detail from "../pages/accountdetail";
import Role from "./role";
function UserRoute(props) {
  return (
    <>
      <ClientNavbar />
      <Routes>
        <Route
          path="/MyAccount"
          element={<Detail CurrentUser={props.user} />}
        />
      </Routes>
    </>
  );
}

export default UserRoute;
