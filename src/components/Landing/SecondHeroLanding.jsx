import React from "react";
import KantorImage from "../../assets/img/Kantor2.png";

const SecondHeroLanding = () => {
  return (
    <div className="bgLanding pt-5 relative">
      <div className="bg-bg-secondRounded absolute w-52 h-52 rounded-ss-full bottom-0 right-0 z-10"></div>
      <div className="bg-bg-secondRounded absolute w-60 h-60 rounded-ee-full top-5 left-0 z-10"></div>
      <div className="max-w-screen h-fit bg-bg-second z-0 px-4 py-10 md:px-[100px] md:py-[50px]">
        <div className="mx-auto flex flex-col-reverse md:flex-row justify-center top-0 h-full w-full">
          <div className="bannerWrapper z-20 w-full flex items-center">
            <div className="w-[87%] relative">
              <img
                src={KantorImage}
                className="md:w-[428px] md:h-[444px] w-full object-contain object-center"
                alt="BannerKantor"
              />
              <div className="bg-white py-2 px-4 md:top-16 top-24 rounded-lg border-black -right-10 absolute">
                <p className="text-2xl font-face-ro-bold">30+</p>
                <p className="font-face-ro">Seat Available</p>
              </div>
            </div>
          </div>
          <div className="wordWrapper  mb-10 md:mb-0 flex flex-col justify-center items-center z-20">
            <div className="flex flex-col justify-start md:justify-end items-start md:items-end">
              <div className="wrapperTag md:w-[23.75rem] w-[18rem] mb-4 flex md:justify-end items-start text-5xl font-bold">
                <h1 className="font-face-ro-bold text-white md:text-4xl text-2xl w-3/4 md:text-end text-start">
                  Good Vibes
                  <br />
                  Good Coworking Space
                </h1>
              </div>
              <p className="md:w-[500px]-14 w-full text-sm md:text-base mb-4 font-face-ro-med  md:text-end text-white">
                Coworking space bisa buat kamu dan temen-temen kamu bisa asik
                kerja karena vibesnya yang asik banget dan fasilitasnya yang
                juga banyak sampai kamu betah untuk kerja.
              </p>
              <button className="h-11 text-sm md:hidden rounded-md w-52 flex justify-center items-center text-white gap-4 font-face-ro-med bg-bg-button">
                Booking Coworking Space{" "}
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
        </div>
      </div>
    </div>
  );
};

export default SecondHeroLanding;
