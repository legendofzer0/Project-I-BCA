import { Routes, Route } from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";
import Detail from "../pages/accountdetail";
import Homepage from "../pages/homepage";
import PageNotFound from "../pages/PageNotFound";
const KitchenRoute = (props) => {
  console.log("Admin");
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Kitchen" element={<Homepage />} />
        <Route
          path="/MyAccount"
          element={<Detail CurrentUser={props.user} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default KitchenRoute;
