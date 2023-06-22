import React, { useState } from "react";
import Logo from "../../assets/img/office-buddy-logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isMobile, setIsmobile] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <nav className="navbar font-face-ro p-4 lg:px-[154px] lg:py-6">
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <div className="flex items-center justify-between">
            <div className="w-24 lg:w-[173px] lg:h-[65px]">
              <Link to={"/"}>
                <img
                  className="w-full h-full object-contain object-center"
                  src={Logo}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex gap-5 items-center self-stretch">
              <button
                onClick={() => navigate("/login")}
                className="block px-4 h-full rounded-lg bg-[#0074E5] font-semibold shadow-lg outline-none hover:bg-blue-400 lg:hidden"
              >
                <span className="text-white text-sm font-face-ro">
                  Login as Admin
                </span>
              </button>
              <button
                onClick={() => {
                  setIsmobile(!isMobile);
                }}
                className="block text-black focus:outline-none lg:hidden"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    className={!isMobile ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                  <path
                    className={isMobile ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isMobile ? "block" : "hidden"
            }  lg:flex w-full flex-col justify-center lg:flex-row lg:gap-5`}
          >
            <div className="border-t lg:border-0 mt-4 lg:m-0 flex pt-4 lg:p-0 gap-6 lg:gap-11 w-full font-face-ro flex-col lg:flex-row lg:justify-center lg:items-center">
              <NavLink
                to={"/"}
                className="block lg:p-0 font-face-ro text-sm text-center lg:text-lg hover:text-blue-500"
              >
                {({ isActive }) => (
                  <span className={`${isActive && "text-blue-500 font-bold"}`}>
                    Browse Office
                  </span>
                )}
              </NavLink>
              <NavLink
                to={"/location"}
                className="block lg:p-0 font-face-ro text-sm text-center lg:text-lg hover:text-blue-500"
              >
                {({ isActive }) => (
                  <span className={`${isActive && "text-blue-500 font-bold"}`}>
                    Locations
                  </span>
                )}
              </NavLink>
              <NavLink
                to={"/contact-us"}
                className="block lg:p-0 font-face-ro text-sm text-center lg:text-lg hover:text-blue-500"
              >
                {({ isActive }) => (
                  <span className={`${isActive && "text-blue-500 font-bold"}`}>
                    Contact Us
                  </span>
                )}
              </NavLink>
            </div>
            <div className="flex flex-col basis-1/3 items-center justify-end lg:flex-row">
              <button
                onClick={() => navigate("/login")}
                className="btn__login px-4 rounded-lg bg-[#0074E5] shadow-lg outline-none hover:bg-blue-400 hidden lg:block"
              >
                <span className="text-white text-lg font-face-ro">
                  Login as Admin
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
