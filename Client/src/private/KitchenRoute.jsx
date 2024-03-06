import { Routes, Route } from "react-router-dom";

import Detail from "../pages/accountdetail";
import Homepage from "../pages/homepage";
import KitchenDashboard from "../pages/KitchenDashboard";
import PageNotFound from "../pages/PageNotFound";
import KitchenNavbar from "../components/KitchenNavbar";
import DescriptionPage from "../pages/DescriptionPage";
const KitchenRoute = (props) => {
  console.log("Admin");
  return (
    <>
      <KitchenNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/item/:id" element={<DescriptionPage />} />

        <Route path="/Kitchen" element={<KitchenDashboard />} />
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
