import React from "react";
import UsersIcon from "../../assets/img/users-icon.png";
import CalendarIcon from "../../assets/img/calendar-icon.png";
import StarIcon from "../../assets/img/star-icon.png";
import ProfileImg from "../../assets/img/Kantor.png";

const DatabaseUser = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4 mb-[34px]">
        <div className="p-6">
          <div className="mb-4">
            <img
              className="w-[50px] h-[50px]"
              src={UsersIcon}
              alt="Office Icon"
            />
          </div>
          <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
            Total Pengguna
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Lihat data pengguna
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">510 Pengguna</h1>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <img
              className="w-[50px] h-[50px]"
              src={CalendarIcon}
              alt="Office Icon"
            />
          </div>
          <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
            Total Booking
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Total Pengguna booking pada hari ini
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">150 Orang</h1>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <img
              className="w-[50px] h-[50px]"
              src={StarIcon}
              alt="Office Icon"
            />
          </div>

          <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
            Penilaian
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Penilaian Co-Working Space
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">
            16 Penilaian Terbaru
          </h1>
        </div>
      </div>

      <div className="flex gap-9">
        <div className="basis-3/5 px-5 py-4">
          <div className="flex gap-2 items-center justify-between">
            <div>
              <h2 className="font-face-ro font-semibold mb-1">
                Pebandingan Data Pengguna Aktif dan Tidak Aktif
              </h2>
              <p className="font-face-ro text-[#46474A]">
                Lihat detail data pengguna
              </p>
            </div>
            <a href="#" className="font-face-ro font-semibold text-[#0074E5]">
              Lihat Semua
            </a>
          </div>
        </div>

        <div className="basis-2/5 p-6">
          <div className="flex gap-2 items-center justify-between mb-6">
            <div>
              <h2 className="font-face-ro font-semibold mb-1">Data Pesanan</h2>
              <p className="font-face-ro text-[#46474A]">
                Lihat Detail Pesanan Pembeli
              </p>
            </div>
            <a href="#" className="font-face-ro font-semibold text-[#0074E5]">
              Lihat Semua
            </a>
          </div>

          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                <img src={ProfileImg} alt="Profile" />
              </div>
              <div className="grow">
                <div className="flex gap-2 items-center justify-between mb-2">
                  <h3 className="font-bold text-base">Irene Store</h3>
                  <p className="font-face-ro text-sm text-[#475467]">Kemarin</p>
                </div>
                <h3 className="font-face-ro">
                  Memesan <span className="font-bold">Wellspace</span>
                </h3>
                <p className="mb-2 text-sm font-face-ro">Co-Working Space</p>
                <p className="font-face-ro-med bg-[#44474E1F] rounded-full text-sm text-[#1a1b1ea3] px-2 py-1 inline-block">
                  Selesai
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                <img src={ProfileImg} alt="Profile" />
              </div>
              <div className="grow">
                <div className="flex gap-2 items-center justify-between mb-2">
                  <h3 className="font-bold text-base">Irene Store</h3>
                  <p className="font-face-ro text-sm text-[#475467]">Kemarin</p>
                </div>
                <h3 className="font-face-ro">
                  Memesan <span className="font-bold">Wellspace</span>
                </h3>
                <p className="mb-2 text-sm font-face-ro">Co-Working Space</p>
                <p className="font-face-ro-med bg-[#44474E1F] rounded-full text-sm text-[#1a1b1ea3] px-2 py-1 inline-block">
                  Selesai
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseUser;
