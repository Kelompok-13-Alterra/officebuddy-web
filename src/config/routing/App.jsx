import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Landing } from "../../page/Landing/Landing";
import Location from "../../page/Location/Location";
import ContactUs from "../../page/ContactUs/ContactUs";
import Login from "../../page/Login/Login";
import Kantor from "../../page/Kantor/Kantor";
import Dashboard from "../../page/Dashboard/Dashboard";
import NotFound from "../../page/NotFound/NotFound";
import "./App.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavbarDashboard from "../../components/DahsboardNavbar/NavbarDashboard";
import Pendapatan from "../../page/D-pendapatan/Pendapatan";
import CoWorking from "../../page/CoWorking/CoWorking";

function App() {
  const authUser = sessionStorage.getItem("access_token");
  const link = localStorage.getItem("activelink");
  // const [clickedMenu, setClickedMenu] = useState(link);

  const handleLinkclick = (link) => {
    setClickedMenu(link);
  };
  useEffect(() => {
    localStorage.clear("activelink");
  }, []);

  if (!authUser) {
    return (
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    );
  }
  return (
    <div className="flex">
      <Sidebar clickedLink={handleLinkclick} />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kantor" element={<Kantor />} />
        <Route path="/pendapatan" element={<Pendapatan />} />
        <Route path="/co-working" element={<CoWorking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    // </div>
  );
}

export default App;
