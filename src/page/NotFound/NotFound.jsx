import React from "react";
import { useNavigate } from "react-router";
import notFound from "../../assets/img/not-found.png";
import "./NotFound.css";
import NavbarDashboard from "../../components/DahsboardNavbar/NavbarDashboard";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found flex items-center justify-center">
      <div className="not-found__content-container flex flex-col justify-center gap-7">
        <div className="flex flex-col items-center gap-4">
          <img src={notFound} alt="not-found-img" width={140} height={120} />
          <div className="content-container__desc flex flex-col text-center gap-3">
            <h1 className="font-face-ro">Page 404 Not Found</h1>
            <p className="font-face-ro">
              Halaman ga ditemukan. Kamu bisa kembali ke halaman sebelumnya
            </p>
          </div>
        </div>
        <button onClick={() => navigate(-1)}>Get Back</button>
      </div>
    </div>
  );
}

export default NotFound;
