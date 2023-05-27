import React from "react";
import KantorImage from "../../assets/img/Kantor.png";

const HeroLanding = () => {
  return (
    <div className="bg-bg-body w-screen md:flex  pt-4 justify-center pb-4">
      <div className="wordWrapper w-1/2  flex flex-col justify-center items-center">
        <div className="flex flex-col ml-48 md:ml-10 mb-5">
          <div className="wrapperTag w-[350px]  md:h-[192px] h-[120px] p-2  flex justify-center items-start ">
            <h1 className="text-start md:text-4xl text-2xl  font-face-ro-bold ">
              Mau Sewa Kantor Terbaik Di Kota Kamu ?
            </h1>
          </div>
          <p className="font-face-ro-med w-[310px] mb-3 text-sm  text-gray-500 md:text-base text-start">
            Kalo mau kerja di kantor pasti mau punya kantor yang enak dan nyaman
            pastinya. Apalagi kalo kantor ada fasilitas lengkap.
          </p>
          <button className="font-face-ro-med md:hidden  h-11 mr-20 rounded-md w-52 flex justify-center items-center text-white gap-4 bg-bg-button">
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
      <div className="bannerWrapper w-full md:w-1/2 flex justify-center items-center ">
        <div className=" md:mr-10 md:w-fit flex justify-center items-center-full md:mx-0 mx-3 relative ">
          <img
            src={KantorImage}
            className="md:w-[29rem] w-full md:h-[30rem]"
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
