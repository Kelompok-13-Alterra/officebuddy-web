import React, { useMemo, useState } from "react";
import Logo from "../../assets/img/Logooffice.png";
import LogoButton from "../../assets/img/Logout Button.png";
import { useNavigate, useLocation } from "react-router-dom";
import ModalDeleteConfirm from "./ModalDeleteConfirm";

// eslint-disable-next-line react/prop-types
const NavbarDashboard = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const location = useLocation();

  const currentPage = useMemo(() => {
    const pathName = location.pathname.split("/")[1];
    if (pathName === "dashboard") return "Dashboard";
    if (pathName === "kantor") return "Kantor";
    if (pathName === "co-working") return "Co-Working";
    if (pathName === "database-user") return "Database User";
    if (pathName === "pendapatan") return "Pendapatan";
  }, [location]);

  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    const accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      navigate("/login");
    }
  };

  const handleToggleModalDelete = () => {
    setOpenConfirm(true);
  };
  const handleCloseModalDelete = () => {
    setOpenConfirm(false);
  };
  return (
    <div className="miw-full border-b shadow-sm border-gray-400 h-24 flex items-center px-8">
      <ModalDeleteConfirm
        openConfirm={openConfirm}
        handleCloseModalDelete={handleCloseModalDelete}
        handleLogout={handleLogout}
      />
      <div className="flex w-1/2">
        <h1 className="text-lg font-semibold">{currentPage}</h1>
      </div>
      <div className="flex w-1/2 justify-end  items-center  gap-4">
        <div className="flex items-center mr-11 gap-5">
          <img src={Logo} alt="logo" className="w-[46px] h-[46px]" />
          <div>
            <p className="font-semibold">Michael Abraham</p>
            <span>Admin 1</span>
          </div>
        </div>
        <button
          onClick={handleToggleModalDelete}
          className="border hover:bg-slate-100 duration-500 border-gray-300 rounded-full p-4"
        >
          <img src={LogoButton} alt="Logo" className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default NavbarDashboard;
