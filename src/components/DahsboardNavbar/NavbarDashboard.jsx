import React from "react";
import Logo from "../../assets/img/Logooffice.png";
import LogoButton from "../../assets/img/Logout Button.png";

// eslint-disable-next-line react/prop-types
const NavbarDashboard = ({ clickedMenu }) => {
  return (
    <div className="w-full border-b shadow-sm border-gray-400 h-24 flex items-center px-8">
      <div className="flex w-1/2">
        <h1 className="text-lg font-semibold">{clickedMenu}</h1>
      </div>
      <div className="flex w-1/2 justify-end  items-center  gap-4">
        <div className="flex items-center mr-11 gap-5">
          <img src={Logo} alt="logo" className="w-[46px] h-[46px]" />
          <div>
            <p className="font-semibold">Michael Abraham</p>
            <span>Admin 1</span>
          </div>
        </div>
        <button className="border hover:bg-slate-100 duration-500 border-gray-300 rounded-full p-4">
          <img src={LogoButton} alt="Logo" className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
