import React from "react";
import "./Location.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import locationImg from "../../assets/img/location-img.png";

function Location() {
  return (
    <div className="location w-screen overflow-x-hidden">
      <header className="sticky top-0">
        <Navbar />
      </header>
      <main className="flex flex-wrap flex-col items-center justify-center gap-16 mt-10">
        <div className="container__title">
          <h1 className="text-center font-face-ro-bold">
            Office on whole across Indonesia
          </h1>
          <p className="text-center font-face-ro-med">
            Cari ruang kerja terbaik dimana saja kamu berada dengan fasilitas
            dan keamanan yang sesuai
          </p>
        </div>
        <img className="location__image" src={locationImg} alt="img" />
        <div className="container__content items-center align-middle justify-evenly flex phone:flex-col tablet:flex-row phone:gap-14 tablet:gap-20 desktop:gap-40 phone:mb-14 tablet:mb-28 ">
          <div className="card card__mini">
            <h2 className="text-center font-face-ro-bold">Over 1.000 Office</h2>
            <p className="text-center font-face-ro-med">
              Terdapat lebih dari 1.000 di seluruh kota di Indonesia yang
              tersedia untuk anda sehingga anda selalu mendapat ruang kerja
              untuk anda
            </p>
          </div>
          <div className="card">
            <h2 className="text-center font-face-ro-bold">
              Over 30 Seats for Coworking
            </h2>
            <p className="text-center font-face-ro-med">
              Anda selalu akan memiliki bangku di Coworking Space yang ada untuk
              anda bekerja dengan ruang yang memiliki vibe asik untuk bekerja
              bersama rekan kerja.
            </p>
          </div>
        </div>
      </main>
      <hr className="location__line-border" />
      <Footer />
    </div>
  );
}

export default Location;
