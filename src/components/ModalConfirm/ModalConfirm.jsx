import React from "react";

/* eslint-disable react/prop-types */
const ModalConfirm = ({
  message,
  image,
  confirmText = "Yes",
  onClickBack,
  onClickConfirm,
}) => {
  return (
    <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-hidden flex justify-center items-center">
      <div className="w-[450px] bg-white rounded-3xl px-4 py-6">
        <div className="w-52 mx-auto">
          <img src={image} alt="Modal Image" />
        </div>

        <p className="mb-4 px-8 text-center font-face-ro-med">{message}</p>
        <div className="flex gap-4">
          <button
            onClick={onClickBack}
            className="p-[15px] w-full rounded-full bg-[#005DB9] font-face-ro text-white hover:bg-blue-800"
          >
            Back
          </button>
          <button
            onClick={onClickConfirm}
            className="p-[15px] w-full rounded-full bg-white first-letter:font-face-ro text-[#0074E5] border-2 border-[#0074E5] hover:bg-blue-800 hover:border-blue-800 hover:text-white"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
