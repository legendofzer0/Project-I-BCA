import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";
import Detail from "../pages/accountdetail";
import Homepage from "../pages/homepage";
import AdminDashboard from "../pages/AdminDashboard";

import CreateUser from "../components/CreateUser";

import PageNotFound from "../pages/PageNotFound";
const AdminRoute = (props) => {
  console.log("Admin");
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Admin" element={<AdminDashboard />}>
          <Route path="CreateUser" element={<CreateUser />} />
        </Route>
        <Route
          path="/MyAccount"
          element={<Detail CurrentUser={props.user} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AdminRoute;
