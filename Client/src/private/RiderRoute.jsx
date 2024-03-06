import { Routes, Route } from "react-router-dom";

import RiderNavbar from "../components/RiderNavbar";
import Detail from "../pages/accountdetail";
import Homepage from "../pages/homepage";
import PageNotFound from "../pages/PageNotFound";
import RiderDashboard from "../pages/RiderDashboard";
import DescriptionPage from "../pages/DescriptionPage";
const RiderRoute = (props) => {
  console.log("Rider");
  return (
    <>
      <RiderNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/item/:id" element={<DescriptionPage />} />
        <Route path="/Rider" element={<RiderDashboard />} />
        <Route
          path="/MyAccount"
          element={<Detail CurrentUser={props.user} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default RiderRoute;
