import React from "react";
import LogoInternet from "../../assets/img/internet.png";
import LogoKalender from "../../assets/img/kalender.png";
import LogoCash from "../../assets/img/cash.png";
import LogoKursi from "../../assets/img/kursi.png";
import LogoOffice from "../../assets/img/office.png";
import LogoDesktop from "../../assets/img/Desktop.png";
import LogoCleaning from "../../assets/img/cleaning.png";

const ThirdLandingPage = () => {
  return (
    <div className="p-3 w-full relative  py-7">
      <div className="flex justify-start md:justify-center w-[600px} flex-col mx-auto items-center">
        <p className="md:text-4xl text-2xl font-face-ro-bold mb-3 text-start md:text-center">
          Mengapa Perusahaan
        </p>
        <p className="md:text-4xl text-2xl font-face-ro-bold text-start md:text-center">
          Memilih Kami ?
        </p>
      </div>
      <div className="grid grid-rows-2  w-full md:mb-4  mt-12 md:gap-24 justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 mx-auto">
          <div className="flex gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoDesktop}
              className="md:w-14 w-10 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Ruangan yang private
            </p>
          </div>
          <div className="flex gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoInternet}
              className="md:w-14 w-10 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Internet yang cepat
            </p>
          </div>
          <div className="flex gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoKursi}
              className="md:w-14 w-10 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-xs md:text-base text-center">
              Ruangan yang strategis
            </p>
          </div>
          <div className="flex gap-y-4 flex-col justify-center items-center">
            <img
              src={LogoKalender}
              className="md:w-14 w-9 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-xs md:text-base text-center">
              Booking yang mudah
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 justify-between items-center mx-auto">
          <div className="flex md:gap-y-6 flex-col justify-center mx-10 items-center">
            <img
              src={LogoCash}
              className="md:w-14 w-10 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-xs md:text-base text-center">
              Pembayaran yang mudah
            </p>
          </div>
          <div className="flex md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoOffice}
              className="md:w-14 w-10 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Ruangan yang aman
            </p>
          </div>
          <div className="flex  my-8 gap-y-6 flex-col w-full ml-[50%] md:ml-0 justify-between items-center">
            <img
              src={LogoCleaning}
              className="md:w-12 w-9 h-8 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Ruangan yang bersih
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdLandingPage;
