import React from "react";
import Playstore from "../../assets/img/playstore.png";
import Appstore from "../../assets/img/appstore.png";
import Handphone from "../../assets/img/hp1.png";
const SeventhLanding = () => {
  return (
    <div className="bgLanding border-b-2 border-gray-400 pt-5 w-screen py-14 flex md:flex-row flex-col relative bg-bg-body">
      <div className="cardTag md:w-1/2 w-full flex gap-x-8 flex-col justify-center items-center">
        <p className="font-face-ro-bold text-center text-3xl">
          Office <span className="text-blue-600">Buddy</span> is available on
        </p>
        <p className="font-face-ro-med w-1/2 text-center">
          Start your working experience with office
          <span className="text-blue-600"> buddy</span>{" "}
        </p>
        <div className="flex">
          <img src={Playstore} className="w-54 h-14" alt="playstore" />
          <img src={Appstore} className="w-54 h-14" alt="appstore" />
        </div>
      </div>
      <div className="cardImage my-5 w-full md:w-1/2 justify-center items-center">
        <img
          src={Handphone}
          className="w-[500px] h-[320px] md:h-[410px]"
          alt="handphone"
        />
      </div>
    </div>
  );
};

export default SeventhLanding;
