import AdminSidebar from "../components/AdminSidebar";

import { Outlet } from "react-router-dom";
function AdminDashboard() {
  return (
    <>
      <AdminSidebar />
      <Outlet/>
    </>
  );
}

export default AdminDashboard;
