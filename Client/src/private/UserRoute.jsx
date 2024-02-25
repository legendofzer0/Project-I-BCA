import { Routes, Route } from "react-router-dom";
import ClientNavbar from "../components/ClientNavbar";

import Detail from "../pages/accountdetail";
import Homepage from "../pages/homepage";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

function UserRoute(props) {
  return props.user === "Customer" ? (
    <>
      <ClientNavbar CurrentUser={props.user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/MyAccount"
          element={<Detail CurrentUser={props.user} />}
        />
        <Route path="*" element="<PageNotFound>" />;
      </Routes>
    </>
  ) : (
    <>
      <ClientNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SignUp" element={<SignUp modalState="false" />} />
        <Route path="/SignIn" element={<Login modalState="false" />} />
        <Route path="*" element="<PageNotFound>" />;
      </Routes>
    </>
  );
}

export default UserRoute;
