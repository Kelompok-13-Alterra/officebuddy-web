import React from "react";
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
import Pendapatan from "../../page/D-pendapatan/Pendapatan";
import CoWorking from "../../page/CoWorking/CoWorking";
import NavigationLayout from "../../components/NavigationLayout/NavigationLayout";
import PrivateRoute from "../../config/routing/PrivateRoute";
import DatabaseUser from "../../page/DatabaseUser/DatabaseUser";
import TotalUser from "../../page/TotalUser/TotalUser";
import TotalBooking from "../../page/TotalBooking/TotalBooking";
import UserRating from "../../page/UserRating/UserRating";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />

        <Route
          element={
            <PrivateRoute>
              <NavigationLayout />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kantor" element={<Kantor />} />
          <Route path="/pendapatan" element={<Pendapatan />} />
          <Route path="/co-working" element={<CoWorking />} />
          <Route path="/database-user" element={<DatabaseUser />} />
          <Route path="/database-user/total-user" element={<TotalUser />} />
          <Route path="/database-user/user-rating" element={<UserRating />} />
          <Route
            path="/database-user/total-booking"
            element={<TotalBooking />}
          />
          <Route
            path="*"
            element={
              <div className="h-full flex flex-col justify-center items-center">
                <NotFound />
              </div>
            }
          />
        </Route>
        <Route
          path="/404-notfound"
          element={
            <div className="min-h-screen flex flex-col justify-center items-center">
              <NotFound />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
