import React, { useState } from "react";
import Logo from "../../assets/img/Group3.png";

function Navbar() {
  const [isMobile, setIsmobile] = useState(false);

  return (
    <>
      <nav className="bg-gradient-to-br from-white to-gray-100 shadow">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-between px-4 py-4 lg:px-40 lg:py-0 border-b border-gray-300 lg:border-b-0">
            <div>
              <a href="#" className="font-semibold uppercase text-black">
                <img className="w-24 lg:w-44" src={Logo} alt="Logo" />
              </a>
            </div>
            <div>
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
            }  lg:flex w-full flex-col justify-center py-3 lg:py-4 lg:flex-row`}
          >
            <div className="flex w-full flex-col lg:flex-row lg:justify-center">
              <a
                href="#"
                className="block px-4 py-2 lg:py-4 font-semibold hover:text-blue-500"
              >
                Browse Office
              </a>
              <a
                href="#"
                className="block px-4 py-2 lg:py-4 font-semibold hover:text-blue-500"
              >
                Locations
              </a>
              <a
                href="#"
                className="block px-4 py-2 lg:py-4 font-semibold hover:text-blue-500"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col items-center px-32 shadow-black lg:flex-row">
              <button className="block w-40 rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white shadow-lg outline-none hover:bg-blue-300">
                Login as Admin
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
