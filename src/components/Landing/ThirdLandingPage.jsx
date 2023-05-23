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
    <div className="p-3 w-full relative  py-8">
      <div className="flex justify-center w-[600px} flex-col mx-auto items-center">
        <p className="text-4xl font-face-ro-bold mb-3">Mengapa Perusahaan</p>
        <p className="text-4xl font-face-ro-bold">Memilih Kami ?</p>
      </div>
      <div className="grid grid-rows-2  w-full md:mb-4  mt-12 md:gap-24 justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 mx-auto">
          <div className="flex gap-y-6 flex-col justify-center items-center">
            <img src={LogoDesktop} className="w-14 h-9" alt="desktop" />
            <p className="font-face-ro-bold">Ruangan yang private</p>
          </div>
          <div className="flex gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoInternet}
              className="w-[3.25rem] h-[2.313rem]"
              alt="desktop"
            />
            <p className="font-face-ro-bold">Internet yang cepat</p>
          </div>
          <div className="flex gap-y-6 flex-col justify-center items-center">
            <img src={LogoKursi} className="w-14 h-9" alt="desktop" />
            <p className="font-face-ro-bold">Ruangan yang strategis</p>
          </div>
          <div className="flex gap-y-4 flex-col justify-center items-center">
            <img
              src={LogoKalender}
              className="w-[2.625rem] h-[2.953rem]"
              alt="desktop"
            />
            <p className="font-face-ro-bold">Booking yang mudah</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 justify-between items-center mx-auto">
          <div className="flex md:gap-y-6 flex-col justify-center mx-10 items-center">
            <img src={LogoCash} className="w-14 h-[3.266rem]" alt="desktop" />
            <p className="font-face-ro-bold">Pembayaran yang mudah</p>
          </div>
          <div className="flex md:gap-y-6 flex-col justify-center items-center">
            <img
              src={LogoOffice}
              className="w-[2.969rem] h-[2.672rem]"
              alt="desktop"
            />
            <p className="font-face-ro-bold">Ruangan yang aman</p>
          </div>
          <div className="flex  my-8 gap-y-6 flex-col w-full ml-[50%] md:ml-0 justify-between items-center">
            <img
              src={LogoCleaning}
              className="w-[2.672rem] h-[3.266]"
              alt="desktop"
            />
            <p className="font-face-ro-bold">Ruangan yang bersih</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdLandingPage;
