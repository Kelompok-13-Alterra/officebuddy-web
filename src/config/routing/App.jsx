import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Landing } from "../../page/Landing/Landing";
import Location from "../../page/Location/Location";
import ContactUs from "../../page/ContactUs/ContactUs";
import Login from "../../page/Login/Login";

import "./App.css";

function App() {
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

export default App;
