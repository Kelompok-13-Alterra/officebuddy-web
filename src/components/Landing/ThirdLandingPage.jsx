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
    <div className="px-4 py-8 md:py-[86px] w-full relative ">
      <div className="mb-5">
        <p className="w-full md:text-4xl text-2xl font-face-ro-bold leading-8 text-start md:text-center">
          Mengapa Perusahaan <br /> Memilih Kami ?
        </p>
      </div>
      <div className="grid grid-rows-2 w-full md:mb-4 mt-12 gap-10 md:gap-24 justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-10 mx-auto">
          <div className="flex gap-y-2 md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoDesktop}
              className="md:w-14 w-10 h-7 md:h-9"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Ruangan yang private
            </p>
          </div>
          <div className="flex gap-y-2 md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoInternet}
              className="md:w-14 w-10 h-7 md:h-9 object-contain object-center"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Internet yang cepat
            </p>
          </div>
          <div className="flex gap-y-2 md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoKursi}
              className="md:w-14 w-10 h-7 md:h-9 object-contain object-center"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-xs md:text-base text-center">
              Ruangan yang strategis
            </p>
          </div>
          <div className="flex gap-y-2 md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoKalender}
              className="md:w-14 w-9 h-7 md:h-9 object-contain object-center"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-xs md:text-base text-center">
              Booking yang mudah
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-between items-center mx-auto">
          <div className="flex gap-y-2 md:gap-y-6 md: flex-col justify-center items-center">
            <img
              src={LogoCash}
              className="md:w-14 w-10 h-7 md:h-9 object-contain object-center"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-xs md:text-base text-center">
              Pembayaran yang mudah
            </p>
          </div>
          <div className="flex gap-y-2 md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoOffice}
              className="md:w-14 w-10 h-7 md:h-9 object-contain object-center"
              alt="desktop"
            />
            <p className="font-face-ro-bold text-center text-xs md:text-base">
              Ruangan yang aman
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 flex gap-y-2 md:gap-y-6 flex-col w-full md:ml-0 justify-between items-center">
            <img
              src={LogoCleaning}
              className="md:w-12 w-9 h-8 md:h-9 object-contain object-center"
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
