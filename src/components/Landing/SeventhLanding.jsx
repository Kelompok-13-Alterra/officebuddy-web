import React from "react";
import Playstore from "../../assets/img/playstore.png";
import Appstore from "../../assets/img/appstore.png";
import Handphone from "../../assets/img/hp1.png";
const SeventhLanding = () => {
  return (
    <div className="bgLanding border-b-2 border-gray-400 p-8 md:px-[100px] md:py-[130px] flex md:flex-row flex-col relative bg-bg-body">
      <div className="cardTag md:w-1/2 w-full flex gap-x-8 flex-col justify-center items-center">
        <p className="font-face-ro-bold text-center md:text-3xl text-2xl mb-[10px]">
          Office <span className="text-blue-600">Buddy</span> is available on
        </p>
        <p className="font-face-ro-med w-3/4 md:w-1/2 mb-[10px] text-sm md:text-base text-center">
          Start your working experience with office
          <span className="text-blue-600"> buddy</span>{" "}
        </p>
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={Playstore}
            className="md:w-54 w-3/4 md:h-14 object-contain object-center"
            alt="playstore"
          />
          <img
            src={Appstore}
            className="md:w-54 w-3/4 md:h-14 object-contain object-center"
            alt="appstore"
          />
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
