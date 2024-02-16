import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import ClientNavbar from "./components/navbar-client.jsx";
import AdminNavbar from "./components/navbar-admin.jsx";
import Homepage from "./pages/homepage.jsx";
import Detail from "./pages/accountdetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
