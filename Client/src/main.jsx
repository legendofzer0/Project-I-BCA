import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ClientNavbar from "./components/navbar-client.jsx";
import AdminNavbar from "./components/navbar-admin.jsx";
import Homepage from "./pages/homepage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ClientNavbar />
    {/* <AdminNavbar /> */}
    <Homepage />
  </React.StrictMode>
);
