import React from "react";
import "./Location.css";
import locationImg from "../../assets/img/location-img.png";

function Location() {
  return (
    <div className="location">
      <main className="flex flex-col gap-16 mt-48 items-center justify-center">
        <div className="container__title">
          <h1 className="text-center">Office on whole across Indonesia</h1>
          <p className="text-center">
            Cari ruang kerja terbaik dimana saja kamu berada dengan fasilitas
            dan keamanan yang sesuai
          </p>
        </div>
        <img className="locantion__image" src={locationImg} alt="img" />
        <div className="container__content flex flex-row align-middle justify-evenly gap-40 mb-10">
          <div className="card card__mini">
            <h2 className="text-center">Over 1.000 Office</h2>
            <p className="text-center">
              Terdapat lebih dari 1.000 di seluruh kota di Indonesia yang
              tersedia untuk anda sehingga anda selalu mendapat ruang kerja
              untuk anda
            </p>
          </div>
          <div className="card">
            <h2 className="text-center">Over 30 Seats for Coworking</h2>
            <p className="text-center">
              Anda selalu akan memiliki bangku di Coworking Space yang ada untuk
              anda bekerja dengan ruang yang memiliki vibe asik untuk bekerja
              bersama rekan kerja.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Location;
