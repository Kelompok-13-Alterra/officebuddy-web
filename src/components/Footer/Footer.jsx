import React from "react";
import Logo from "../../assets/img/Group3.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto w-full py-8 md:py-[72px]">
        <div className="flex flex-col md:flex-row px-4 md:px-[100px]">
          <div className="mb-4 md:mb-0 shrink-0">
            <a href="#" className="flex items-center">
              <img src={Logo} className="footer-img" alt="Logo" />
            </a>
          </div>
          <div className="div__footer w-full justify-end flex flex-col md:flex-row py-2 md:py-10 md:px-5 md:gap-[30px] lg:gap-[90px] lg:px-10">
            <div className="mb-4 md:mb-0">
              <ul className="text-black text-sm md:text-base font-face-ro">
                <li className="mb-4 md:text-lg font-bold">Link</li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    <Link to={"/"}>Browse Office</Link>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    <Link to={"/location"}>Locations</Link>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    <Link to={"/contact-us"}>Contact Us</Link>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <ul className="text-black text-sm md:text-base font-face-ro">
                <li className="mb-4 md:text-lg font-bold">Support</li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Discord
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Customer Service
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <ul className="text-black text-sm md:text-base font-face-ro">
                <li className="mb-4 md:text-lg font-bold">Contact</li>
                <li className="flex mb-4">
                  <svg
                    className="w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    <span className="text-white">0</span>303-1157-09
                  </a>
                </li>
                <li className="flex mb-4">
                  <svg
                    className="w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <a href="#" className="font-face-ro hover:text-blue-500">
                    <span className="text-white break-words">0</span>
                    officebuddyjaya@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 md:px-[100px]">
          <span
            className="text-sm text-gray-500 sm:text-center dark:text-black"
            style={{ color: "#74777F" }}
          >
            © 2023{" "}
            <a href="#" className="font-face-ro">
              Office Buddy All rights reserved.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
