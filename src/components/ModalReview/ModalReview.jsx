import React from "react";
import { CloseIcon } from "../../assets/svg";
import ProfileImg from "../../assets/img/user_default.jpg";
import RatingStar from "../RatingStar/RatingStar";
import moment from "moment";

/* eslint-disable react/prop-types */
const ModalReview = ({ reviewData, onClickClose }) => {
  return (
    <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-auto">
      <div className="flex min-h-full justify-center items-center py-8">
        <div className={`w-3/4 bg-white rounded-3xl p-8`}>
          <div className="flex gap-3 justify-between items-center mb-[30px]">
            <h2 className="font-face-ro text-[22px]">Penilaian</h2>
            <button onClick={onClickClose} type="button">
              <CloseIcon />
            </button>
          </div>
          <div>
            <div className="flex gap-6 mb-7">
              <div className="rounded-full overflow-hidden w-[48px] h-[48px]">
                <img src={ProfileImg} alt="Profile" />
              </div>
              <div className="font-face-ro">
                <h2 className="text-[#1E1F23]">
                  {reviewData.User?.Name || "Unknown"}
                </h2>
                <p className="text-[#ABABAF] text-sm">
                  Diposting pada tanggal{" "}
                  {moment(reviewData.CreatedAt).format("DD/MM/YY")}
                </p>
              </div>
            </div>

            <div className="mb-7">
              <div className="flex gap-3 items-center mb-2 font-face-ro">
                <h3 className="font-bold">
                  {reviewData.Office?.Name || "Unknown"}
                </h3>
                <p className="px-3 text-sm rounded-full border-2 border-[#74777F]">
                  {reviewData.Office?.Type === "office"
                    ? "Kantor"
                    : reviewData.Office?.Type === "coworking"
                    ? "Co-Working"
                    : "-"}
                </p>
              </div>

              <div className="flex gap-7 items-center">
                <RatingStar rating={reviewData.Star} />
                <p className="font-face-ro">
                  {reviewData.Star > 4
                    ? "Sangat Baik"
                    : reviewData.Star >= 3
                    ? "Baik"
                    : reviewData.Star >= 2
                    ? "Buruk"
                    : "Sangat Buruk"}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-5">
              <h3 className="font-face-ro-med mr-4">Details Review</h3>
              {/* <button>
                <ArrowUpIcon />
              </button> */}
            </div>

            <div className="flex flex-wrap items-center gap-[18px] mb-[34px]">
              {reviewData.Tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-[6px] flex justify-center items-center rounded-full border-2 border-[#74777F]"
                >
                  <span className="font-face-ro-med text-[#44474E] text-[14px]">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* <div className="flex items-center gap-4 mb-7">
              <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={OfficeImg}
                  alt="Office"
                />
              </div>
              <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={OfficeImg2}
                  alt="Office"
                />
              </div>
              <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={OfficeImg}
                  alt="Office"
                />
              </div>
            </div> */}

            <div className="mb-[30px]">
              <p className="font-face-ro">{reviewData.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
