import React from "react";

/* eslint-disable react/prop-types */
const ModalAlert = ({ message, image, onClickClose }) => {
  return (
    <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-hidden flex justify-center items-center">
      <div className="w-[450px] bg-white rounded-3xl px-4 py-6">
        <div className="w-52 mx-auto mb-4">
          <img src={image} alt="Modal Image" />
        </div>

        <p className="mb-4 px-8 text-center font-face-ro-med">{message}</p>
        <button
          onClick={onClickClose}
          className="p-[15px] w-full rounded-full bg-[#005DB9] font-face-ro text-white hover:bg-blue-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAlert;
