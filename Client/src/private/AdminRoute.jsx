import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";
import Detail from "../pages/accountdetail";
import Homepage from "../pages/homepage";
import AdminDashboard from "../pages/AdminDashboard";
import DescriptionPage from "../pages/DescriptionPage";

import CreateUser from "../components/CreateUser";
import ListUser from "../components/ListUser";

import PageNotFound from "../pages/PageNotFound";
import CreateItem from "../components/CreateItem";
import ListItem from "../components/ListItems";
const AdminRoute = (props) => {
  console.log("Admin");
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/item/:id" element={<DescriptionPage />} />
        <Route path="/Admin" element={<AdminDashboard />}></Route>
        <Route path="/CreateUser" element={<CreateUser />} />
        <Route path="/CreateItem" element={<CreateItem />} />
        <Route path="/ListUser" element={<ListUser />} />
        <Route path="/ListItem" element={<ListItem />} />
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
