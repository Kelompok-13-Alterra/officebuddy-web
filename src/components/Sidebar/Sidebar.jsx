/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import LogoBuddy from "../../assets/img/logo office buddy.png";

const Sidebar = ({ clickedLink }) => {
  const link = localStorage.getItem("activeLink");
  const [activeLink, setActiveLink] = useState(link);

  const handleLinkClick = (link) => {
    // Link yang di klik sesuai state = data localstorage
    setActiveLink(link);

    localStorage.setItem("activeLink", link);

    // Link yang di klik akan dikirim ke component Navbar
    clickedLink(link);
  };
  useEffect(() => {
    localStorage.clear("activeLink");
  }, []);
  return (
    <div className="relative w-72 h-screen pt-8 border-r-2 border-gray-300 ">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-whiterounded-full  cursor-pointer"></div>
        <img src={LogoBuddy} alt="Logo" />
      </div>

      <ul
        className={`${
          activeLink === "Dashboard"
            ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
            : "w-full py-4 text-slate-300"
        } cursor-pointer`}
        onClick={() => handleLinkClick("Dashboard")}
      >
        <li className=" flex mx-auto w-full  pl-11 text-start  justify- items-center mr-10   ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM2.66667 21.3333V2.66667H10.6667V21.3333H2.66667ZM21.3333 21.3333H13.3333V12H21.3333V21.3333ZM21.3333 9.33333H13.3333V2.66667H21.3333V9.33333Z"
              fill={`${activeLink === "Dashboard" ? "#005DB9" : "#E0E2EC"}`}
            />
          </svg>
          <span className="text-start font-medium pl-8 w-full text-sm">
            Dashboard
          </span>
        </li>
      </ul>

      <ul
        className={`${
          activeLink === "Kantor"
            ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
            : "w-full py-4 text-slate-300 "
        } cursor-pointer`}
        onClick={() => handleLinkClick("Kantor")}
      >
        <li className=" flex mx-auto w-full  pl-11 text-start  justify- items-center mr-10  ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.3333 21.3333V1.33333H16V0H2.66667V21.3333H0V24H16V4H18.6667V24H24V21.3333H21.3333ZM13.3333 21.3333H5.33333V2.66667H13.3333V21.3333ZM9.33333 10.6667H12V13.3333H9.33333V10.6667Z"
              fill={`${activeLink === "Kantor" ? "#005DB9" : "#E0E2EC"}`}
            />
          </svg>
          <span className="text-start pl-8 w-full font-medium  text-sm">
            Kantor
          </span>
        </li>
      </ul>

      <ul
        className={`${
          activeLink === "Co-Working"
            ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
            : "w-full py-4 text-slate-300"
        } cursor-pointer`}
        onClick={() => handleLinkClick("Co-Working")}
      >
        <li className=" flex mx-auto w-full  pl-11 text-start  justify- items-center mr-10 ">
          <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00002 16C7.46669 16 8.66669 17.2 8.66669 18.6667C8.66669 20.1333 7.46669 21.3333 6.00002 21.3333C4.53335 21.3333 3.33335 20.1333 3.33335 18.6667C3.33335 17.2 4.53335 16 6.00002 16ZM6.00002 13.3333C3.06669 13.3333 0.666687 15.7333 0.666687 18.6667C0.666687 21.6 3.06669 24 6.00002 24C8.93335 24 11.3334 21.6 11.3334 18.6667C11.3334 15.7333 8.93335 13.3333 6.00002 13.3333ZM14 2.66667C15.4667 2.66667 16.6667 3.86667 16.6667 5.33333C16.6667 6.8 15.4667 8 14 8C12.5334 8 11.3334 6.8 11.3334 5.33333C11.3334 3.86667 12.5334 2.66667 14 2.66667ZM14 0C11.0667 0 8.66669 2.4 8.66669 5.33333C8.66669 8.26667 11.0667 10.6667 14 10.6667C16.9334 10.6667 19.3334 8.26667 19.3334 5.33333C19.3334 2.4 16.9334 0 14 0ZM22 16C23.4667 16 24.6667 17.2 24.6667 18.6667C24.6667 20.1333 23.4667 21.3333 22 21.3333C20.5334 21.3333 19.3334 20.1333 19.3334 18.6667C19.3334 17.2 20.5334 16 22 16ZM22 13.3333C19.0667 13.3333 16.6667 15.7333 16.6667 18.6667C16.6667 21.6 19.0667 24 22 24C24.9334 24 27.3334 21.6 27.3334 18.6667C27.3334 15.7333 24.9334 13.3333 22 13.3333Z"
              fill={`${activeLink === "Co-Working" ? "#005DB9" : "#E0E2EC"}`}
            />
          </svg>

          <span className="text-start pl-8 w-full text-sm font-medium  ">
            Co-Working Space
          </span>
        </li>
      </ul>

      <ul
        className={`${
          activeLink === "Database"
            ? "w-full py-4 bg-slate-100 border-r-4 border-blue-800 text-blue-500"
            : "w-full py-4 text-slate-300 "
        } cursor-pointer`}
        onClick={() => handleLinkClick("Database")}
      >
        <li className=" flex mx-auto w-full  pl-11 text-start  justify- items-center mr-10  ">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3334 0.699951V4.73995C19.8534 5.39328 23.3334 9.25995 23.3334 13.9666C23.3334 15.1666 23.0934 16.3 22.6934 17.3533L26.16 19.3933C26.9067 17.74 27.3334 15.9 27.3334 13.9666C27.3334 7.05995 22.0667 1.36662 15.3334 0.699951ZM14 23.3C8.84002 23.3 4.66669 19.1266 4.66669 13.9666C4.66669 9.25995 8.14669 5.39328 12.6667 4.73995V0.699951C5.92002 1.36662 0.666687 7.04662 0.666687 13.9666C0.666687 21.3266 6.62669 27.3 13.9867 27.3C18.4 27.3 22.3067 25.1533 24.7334 21.8466L21.2667 19.8066C19.56 21.94 16.9467 23.3 14 23.3Z"
              fill={`${activeLink === "Database" ? "#005DB9" : "#E0E2EC"}`}
            />
          </svg>

          <span className="text-start pl-8 w-full text-sm  font-medium  ">
            Database User
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
