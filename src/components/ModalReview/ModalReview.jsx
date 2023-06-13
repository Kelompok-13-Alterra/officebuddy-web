import React from "react";
import { ArrowUpIcon, CloseIcon } from "../../assets/svg";
import ProfileImg from "../../assets/img/Ellipse_imgman.png";
import OfficeImg from "../../assets/img/office-img.png";
import OfficeImg2 from "../../assets/img/office-img2.png";
import RatingStar from "../RatingStar/RatingStar";

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
                <h2 className="text-[#1E1F23]">Michael Abraham</h2>
                <p className="text-[#ABABAF] text-sm">
                  Diposting pada tanggal 13/04/2023
                </p>
              </div>
            </div>

            <div className="mb-7">
              <div className="flex gap-3 items-center mb-2 font-face-ro">
                <h3 className="font-bold">Wellspace</h3>
                <p className="px-4 text-sm rounded-full border-2 border-[#74777F]">
                  Kantor
                </p>
              </div>

              <div className="flex gap-7 items-center">
                <RatingStar rating={5} />
                <p className="font-face-ro">Sangat Baik</p>
              </div>
            </div>

            <div className="flex gap-4 items-center mb-5">
              <h3 className="font-face-ro-med mr-4">Details Review</h3>
              <button>
                <ArrowUpIcon />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-[18px] mb-[34px]">
              <div className="px-4 py-[6px] flex justify-center items-center rounded-full border-2 border-[#74777F]">
                <span className="font-face-ro-med text-[#44474E] text-[14px]">
                  Termurah
                </span>
              </div>
              <div className="px-4 py-[6px] flex justify-center items-center rounded-full border-2 border-[#74777F]">
                <span className="font-face-ro-med text-[#44474E] text-[14px]">
                  Fasiilitas Lengkap
                </span>
              </div>
              <div className="px-4 py-[6px] flex justify-center items-center rounded-full border-2 border-[#74777F]">
                <span className="font-face-ro-med text-[#44474E] text-[14px]">
                  Terdekat
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-7">
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
            </div>

            <div className="mb-[30px]">
              <p className="font-face-ro">
                Tempat co-working space ini luar biasa! Saya sangat terkesan
                dengan suasana kerjanya yang energik dan produktif. Fasilitas
                yang disediakan sangat lengkap, mulai dari area kerja yang
                nyaman hingga ruang rapat yang dilengkapi dengan peralatan
                modern. Tim pengelola juga sangat ramah dan responsif terhadap
                kebutuhan saya. Saya sangat senang bisa berkolaborasi dan
                berinteraksi dengan anggota lain di sini. Suasana kerja yang
                saling mendukung dan inspiratif membuat saya semakin
                termotivasi. Tempat ini benar-benar memberikan nilai tambah bagi
                pekerjaan saya. Sangat merekomendasikan co-working space ini
                kepada siapa pun yang mencari lingkungan kerja yang kreatif dan
                profesional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReview;
