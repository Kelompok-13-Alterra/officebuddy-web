import React from "react";
import Matheus from "../../assets/img/Matheus.png";
import Star from "../../assets/img/star.png";

const FifthLanding = () => {
  return (
    <div className="mid-w-screen px-3 py-14 bg-bg-body relative">
      <div className="flex justify-around">
        <h1 className="font-face-ro-bold text-center text-2xl sm:text-3xl">
          Pengalaman Pengguna
        </h1>
        <button className="h-11 ml-4 absolute md:static  bottom-2 md:mt-0 mt-10 right-6 sm:ml-0 rounded-md px-1 w-52 flex justify-center items-center text-white gap-4 font-face-ro-med bg-bg-button">
          Check Riviews{" "}
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
      <div className="wrapperCard md:flex-row flex-col flex justify-center gap-10 mx-7 mt-10">
        <div className="card  mx-auto drop-shadow-md md:w-1/2 w-full mb-10 md:mx-14  bg-white rounded-lg p-4">
          <div className="flex gap-7 items-center">
            <img
              src={Matheus}
              alt="matheus"
              className="h-16 w-16 rounded-full bg-black"
            />
            <div className="cardName">
              <p className="font-face-ro-med">Tyler Matthews</p>
              <span className="font-face-ro-med text-sm text-gray-400">
                Freelancer
              </span>
            </div>
            <div className="rating flex">
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
            </div>
          </div>
          <p className="mt-4  text-sm md:text-base">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            necessitatibus velit distinctio eius id! Voluptate aut sint totam.""
          </p>
        </div>
        <div className="card drop-shadow-md md:w-1/2 md:mx-14 w-full mb-10 mx-auto bg-white rounded-lg p-4">
          <div className="flex gap-7 items-center">
            <img
              src={Matheus}
              alt="matheus"
              className="h-16 w-16 rounded-full bg-black"
            />
            <div className="cardName">
              <p className="font-face-ro-med">Tyler Matthews</p>
              <span className="font-face-ro-med text-sm text-gray-400">
                Freelancer
              </span>
            </div>
            <div className="rating flex">
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
              <span>
                <img src={Star} alt="star" />
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm md:text-base">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            necessitatibus velit distinctio eius id! Voluptate aut sint totam.""
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthLanding;
