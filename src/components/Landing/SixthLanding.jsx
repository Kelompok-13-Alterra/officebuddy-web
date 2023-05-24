import React from "react";
import Location from "../../assets/img/Location.png";

const SixthLanding = () => {
  return (
    <div className="bgLanding pt-5 w-screen relative">
      <div className="bg-bg-secondRounded absolute w-52 h-52 rounded-ss-full bottom-0 right-0 z-10"></div>
      <div className="bg-bg-secondRounded absolute w-60 h-60 rounded-ee-full top-5 left-0 z-10"></div>
      <div className="max-w-screen h-fit bg-bg-fourth z-0">
        <div className="flex  justify-center w-[600px} flex-col mx-auto items-center">
          <p className="text-4xl text-center z-30 mt-8 text-white font-face-ro-bold mb-3">
            Kantor tersedia di seluruh Indonesia
          </p>
        </div>
        <div className="mx-auto flex gap-8 flex-col-reverse  md:flex-row justify-center top-0 h-full w-full">
          <div className="bannerWrapper z-20 mb-10 w-full pl-3 px-11 md:w-1/2 flex  justify-center items-center ">
            <div className="w-full left-4 flex text-center   sm:mx-0 relative md:left-16 sm:top-7">
              <img
                src={Location}
                className=" md:w-[408px] md:h-[424px] w-full pt-9 md:pt-0"
                alt="BannerKantor"
              />
            </div>
          </div>
          <div className="wordWrapper md:w-1/2  flex flex-col justify-center items-center md:ml-0 ml-48 z-20">
            <div className="flex flex-col justify-start md:justify-start items-start md:items-end mb-8 sm:static relative pr-11 right-20  w-screen md:w-2/3 md:mr-16">
              <div className="wrapperTag  mb-3 flex justify-center items-start text-5xl font-bold">
                <h1 className="font-face-ro-bold text-white text-4xl w-full md:text-end text-start">
                  Anywhere for Work!
                </h1>
              </div>
              <p className="md:w-[500px]-14 w-full px-4 mb-4 font-face-ro-med md:text-end text-white">
                Kamu bisa booking kantor dimanapun kamu berada dan pastinya kamu
                akan direcomendasikan kentor yang bagus dan punya vibe asik dan
                cocok banget buat kamu untuk bekerja
              </p>
              <button className="h-14 ml-4 sm:ml-0 rounded-md px-1 w-44 flex justify-center items-center text-white gap-4 font-face-ro-med bg-bg-button">
                Learn More{" "}
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

export default SixthLanding;
