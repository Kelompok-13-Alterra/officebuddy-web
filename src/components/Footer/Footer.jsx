import React from "react";
import Logo from "../../assets/img/Group3.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 px-0 md:px-28 lg:px-28">
            <a href="#" className="flex items-center">
              <img src={Logo} className="footer-img" alt="Logo" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-8 py-10">
            <div className="px-0 md:px-6 lg:px-12">
              <ul className="text-gray-600 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="font-face-ro-bold">
                    Link
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Browse Office
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Location
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-face-ro hover:text-blue-500">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-0 md:px-6 lg:px-12">
              <ul className="text-gray-600 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="font-face-ro-bold">
                    Support
                  </a>
                </li>
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
            <div>
              <ul className="text-gray-600 dark:text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="font-face-ro-bold">
                    Contact
                  </a>
                </li>
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
                    <span className="text-white">0</span>
                    OfficeBuddy@rockmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between px-0 md:px-28 lg:px-28">
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
