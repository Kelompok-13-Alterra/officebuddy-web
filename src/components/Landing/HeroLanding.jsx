import React from "react";
import KantorImage from "../../assets/img/Kantor.png";

const HeroLanding = () => {
  return (
    <div className="bg-bg-body w-screen md:flex justify-center my-10 px-4 md:px-[100px]">
      <div className="wordWrapper flex flex-col justify-center">
        <div className="flex flex-col mb-5">
          <div className="wrapperTag mb-3 md:mb-10 flex w-3/4">
            <h1 className="text-start md:text-4xl text-2xl font-face-ro-bold ">
              Mau Sewa Kantor Terbaik Di Kota Kamu ?
            </h1>
          </div>
          <p className="font-face-ro-med w-full md:w-[400px] mb-3 text-sm text-gray-500 md:text-base text-start">
            Kalo mau kerja di kantor pasti mau punya kantor yang enak dan nyaman
            pastinya. Apalagi kalo kantor ada fasilitas lengkap.
          </p>
          <button className="font-face-ro-med md:hidden h-11 mr-20 rounded-md w-52 flex justify-center items-center text-white gap-4 bg-bg-button my-3">
            Booking Kantor{" "}
            <svg
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.49996 0.666626L4.55996 1.60663L8.27996 5.33329H0.166626V6.66663H8.27996L4.55996 10.3933L5.49996 11.3333L10.8333 5.99996L5.49996 0.666626Z"
                fill="white"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
      <div className="bannerWrapper w-full md:w-1/2 flex justify-center items-center shrink-0">
        <div className="md:w-full flex items-center justify-center relative">
          <img
            src={KantorImage}
            className="w-full object-contain object-center"
            alt="BannerKantor"
          />
          <div className="bg-white p-3 py-4 w-1/3 bottom-0 rounded-tl-lg rounded-br-lg border-r border-b border-black right-0 absolute">
            <p className="text-2xl font-face-ro-bold">1000+</p>
            <p className="font-face-ro">Office Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLanding;
