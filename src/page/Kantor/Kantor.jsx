import React, { useState } from "react";
import Officeicon from "../../assets/img/office-icon.png";
import StarIcon from "../../assets/img/star-icon.png";
import BookingIcon from "../../assets/img/booking-icon.png";
import InputFloating from "../../components/InputFloating/InputFloating";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import ImgDiscard from "../../assets/img/discard.png";
import ImgSuccess from "../../assets/img/success.png";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  FilterIcon,
  PlusIcon,
} from "../../assets/svg";

const dummyOffice = [
  {
    id: 1,
    name: "Wellspace",
    address: "Jl Melahayu No.12",
    open: "10:00 AM",
    close: "10:00 PM",
    facilities: ["Water Refill", "Speaker", "Projector", "Whiteboard"],
    payment: ["BRI VA", "BNI VA", "BRI TF"],
  },
  {
    id: 2,
    name: "Seo Office",
    address: "Jl Melati No.1",
    open: "09:00 AM",
    close: "04:00 PM",
    facilities: ["Water Refill", "Speaker", "Whiteboard"],
    payment: ["BRI VA", "BNI VA", "BRI TF", "BRI TF"],
  },
];

const Kantor = () => {
  const [modalInsert, setModalInsert] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [modalConfirmClose, setModalConfirmClose] = useState(false);
  const [modalAlert, setModalAlert] = useState(false);
  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="p-6">
            <div className="mb-4">
              <img
                className="w-[50px] h-[50px]"
                src={Officeicon}
                alt="Office Icon"
              />
            </div>
            <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
              Total Kantor
            </h3>
            <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
              Jumlah kantor saat ini
            </p>
            <h1 className="font-face-ro text-[24px] leading-8">36</h1>
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
              Penilaian Kantor
            </h3>
            <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
              Penilaian kantor saat ini
            </p>
            <h1 className="font-face-ro text-[24px] leading-8">16</h1>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <img
                className="w-[50px] h-[50px]"
                src={BookingIcon}
                alt="Office Icon"
              />
            </div>
            <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
              Total Booking
            </h3>
            <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
              Booking kantor saat ini
            </p>
            <h1 className="font-face-ro text-[24px] leading-8">150 Orang</h1>
          </div>
        </div>

        <div>
          <div className="px-6 py-[18px] flex items-center justify-between">
            <h2 className="font-face-ro text-[#44474E] leading-7">
              Kantor yang terdaftar
            </h2>

            <div className="flex gap-3">
              <button className="flex items-center gap-3 px-4 py-[10px] bg-white rounded-full border-[1px] border-[#C7C6CA] text-[#5E5E62] font-medium">
                <FilterIcon /> Filters
              </button>
              <button
                onClick={() => setModalInsert(true)}
                className="flex items-center gap-3 py-[10px] px-6 bg-bg-button rounded-full text-white font-sans font-medium"
              >
                <PlusIcon />
                Tambah Kantor
              </button>
            </div>
          </div>
          <table className="w-full table mb-[5px]">
            <thead>
              <tr className="bg-[#F4F3F7] font-face-ro text-[#46474A] text-left">
                <th className="py-[18px] pl-[22px]">Nama Kantor</th>
                <th className="py-[18px] pl-[22px]">Jam buka & tutup</th>
                <th className="py-[18px] pl-[22px]">Fasilitas</th>
                <th className="py-[18px] pl-[22px]">Pembayaran</th>
                <th className="py-[18px]"></th>
              </tr>
            </thead>
            <tbody>
              {dummyOffice.map((office) => (
                <tr
                  key={office.id}
                  className="bg-white border-b-[1px] border-b-[#F4F3F7]"
                >
                  <td className="py-[30px] pl-[22px]">
                    <h3 className="font-face-ro text-[#1E1F23]">
                      {office.name}
                    </h3>
                    <h3 className="font-face-ro text-[#77777A]">
                      {/* Jl Melahayu No.12 */}
                      {office.address}
                    </h3>
                  </td>
                  <td className="py-[30px] pl-[22px]">
                    <h3 className="font-face-ro text-[#46474A]">
                      {office.open} - {office.close}
                    </h3>
                  </td>
                  <td className="py-3 pl-[22px] max-w-[230px]">
                    <div className="flex flex-wrap gap-1">
                      {office.facilities.map((facility, index) => (
                        <div
                          key={index}
                          className="px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] border-[#74777F]"
                        >
                          <svg
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.75 0H2.25C1.425 0 0.75 0.675 0.75 1.5V13.5C0.75 14.325 1.425 14.9925 2.25 14.9925L9.75 15C10.575 15 11.25 14.325 11.25 13.5V1.5C11.25 0.675 10.575 0 9.75 0ZM2.25 13.5V1.5H9.75V13.5H2.25ZM6 5.25C6.825 5.25 7.5 4.575 7.5 3.75C7.5 2.925 6.825 2.25 6 2.25C5.1675 2.25 4.5 2.925 4.5 3.75C4.5 4.575 5.1675 5.25 6 5.25ZM6 6.75C4.3425 6.75 3 8.0925 3 9.75C3 11.4075 4.3425 12.75 6 12.75C7.6575 12.75 9 11.4075 9 9.75C9 8.0925 7.6575 6.75 6 6.75ZM6 11.25C5.175 11.25 4.5 10.575 4.5 9.75C4.5 8.925 5.175 8.25 6 8.25C6.825 8.25 7.5 8.925 7.5 9.75C7.5 10.575 6.825 11.25 6 11.25Z"
                              fill="#005DB9"
                            />
                          </svg>

                          <span className="font-face-ro text-[#44474E] text-[14px]">
                            {facility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 pl-[22px] max-w-[150px]">
                    <div className="flex flex-wrap gap-1">
                      {office.payment.map((payment, index) => (
                        <div
                          key={index}
                          className="px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F]"
                        >
                          <span className="font-face-ro text-[#44474E] text-[14px]">
                            {payment}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-[30px] pl-[22px]">
                    <div className="flex gap-1">
                      <button className="px-6 py-[10px] rounded-full bg-[#005DB9] shadow-lg">
                        <span className="font-face-ro text-white text-[14px]">
                          Edit
                        </span>
                      </button>
                      <button
                        onClick={() => setModalConfirmClose(true)}
                        className="px-6 py-[10px] rounded-full bg-[#BA1A1A]"
                      >
                        <span className="font-face-ro text-white text-[14px]">
                          Delete
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-5 flex flex-wrap justify-between items-center">
            <span className="font-face-ro text-[#46474A] text-[14px]">
              Menampilkan data dari 1-10
            </span>
            <div className="flex items-center gap-3 text-[#909094]">
              <button className="flex gap-3 items-center">
                <ArrowLeftIcon />
                <span>Prev</span>
              </button>

              <button>1</button>
              <button className="bg-[#0074E5] px-2 text-white rounded">
                2
              </button>
              <button>3</button>

              <button className="flex gap-3 items-center">
                <span>Next</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalInsert && (
        <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-hidden flex justify-center items-center">
          <div className="w-3/4 bg-white rounded-3xl p-8">
            <div className="flex gap-3 justify-between items-center mb-11">
              <h2 className="font-face-ro text-[22px]">Tambah Kantor</h2>
              <button
                onClick={() => {
                  setModalInsert(false);
                  setModalConfirm(true);
                }}
                type="button"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <form
              onSubmit={() => {
                setModalInsert(false);
                setModalAlert(true);
              }}
            >
              <div className="mb-8">
                <InputFloating
                  id="namaKantor"
                  type="text"
                  name="namaKantor"
                  label="Nama Kantor"
                  placeholder="Nama Kantor"
                />
              </div>

              <div className="mb-8">
                <InputFloating
                  id="alamat"
                  type="text"
                  name="alamat"
                  label="Alamat"
                  placeholder="Alamat"
                />
              </div>
              <div className="flex gap-10 items-center mb-8">
                <InputFloating
                  id="waktuBuka"
                  type="time"
                  name="waktuBuka"
                  label="Waktu Buka"
                  placeholder="Waktu Buka"
                />
                <hr className="w-4 border-2 rounded border-[#44474E]" />
                <InputFloating
                  id="waktuTutup"
                  type="time"
                  name="waktuTutup"
                  label="Waktu Tutup"
                  placeholder="Waktu Tutup"
                />
              </div>

              <div className="flex gap-10 mb-12">
                <div>
                  <h4 className="font-face-ro text-[#1A1B1E] text-[14px] mb-[10px]">
                    Kelengkapan Fasilitas
                  </h4>
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    <button
                      type="button"
                      className="px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <svg
                        width="12"
                        height="16"
                        viewBox="0 0 12 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0.5C2.0025 3.9125 0 6.86 0 9.35C0 13.085 2.85 15.5 6 15.5C9.15 15.5 12 13.085 12 9.35C12 6.86 9.9975 3.9125 6 0.5ZM6 14C3.4875 14 1.5 12.0725 1.5 9.35C1.5 7.595 2.9625 5.27 6 2.495C9.0375 5.27 10.5 7.5875 10.5 9.35C10.5 12.0725 8.5125 14 6 14ZM2.8725 9.5C3.15 9.5 3.375 9.695 3.4275 9.965C3.735 11.63 5.1375 12.2 6.1575 12.1175C6.48 12.1025 6.75 12.3575 6.75 12.68C6.75 12.98 6.51 13.2275 6.21 13.2425C4.6125 13.34 2.745 12.425 2.3175 10.1525C2.2575 9.815 2.5275 9.5 2.8725 9.5Z"
                          fill="#005DB9"
                        />
                      </svg>

                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        Water Refill
                      </span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.75 0H2.25C1.425 0 0.75 0.675 0.75 1.5V13.5C0.75 14.325 1.425 14.9925 2.25 14.9925L9.75 15C10.575 15 11.25 14.325 11.25 13.5V1.5C11.25 0.675 10.575 0 9.75 0ZM2.25 13.5V1.5H9.75V13.5H2.25ZM6 5.25C6.825 5.25 7.5 4.575 7.5 3.75C7.5 2.925 6.825 2.25 6 2.25C5.1675 2.25 4.5 2.925 4.5 3.75C4.5 4.575 5.1675 5.25 6 5.25ZM6 6.75C4.3425 6.75 3 8.0925 3 9.75C3 11.4075 4.3425 12.75 6 12.75C7.6575 12.75 9 11.4075 9 9.75C9 8.0925 7.6575 6.75 6 6.75ZM6 11.25C5.175 11.25 4.5 10.575 4.5 9.75C4.5 8.925 5.175 8.25 6 8.25C6.825 8.25 7.5 8.925 7.5 9.75C7.5 10.575 6.825 11.25 6 11.25Z"
                          fill="#005DB9"
                        />
                      </svg>
                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        Speaker
                      </span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.25 2V8H1.75V2H9.25ZM10 0.5H1C0.5875 0.5 0.25 0.8375 0.25 1.25V8.75C0.25 9.1625 0.5875 9.5 1 9.5H10C10.4125 9.5 10.75 9.1625 10.75 8.75V6.125L13.75 9.125V0.875L10.75 3.875V1.25C10.75 0.8375 10.4125 0.5 10 0.5Z"
                          fill="#005DB9"
                        />
                      </svg>

                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        Projector
                      </span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.5 0V12H15.5V0H0.5ZM14 10.5H2V1.5H14V10.5Z"
                          fill="#005DB9"
                        />
                      </svg>

                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        Whiteboard
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-face-ro text-[#1A1B1E] text-[14px] mb-[10px]">
                    Pembayaran yang Tersedia
                  </h4>
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    <button
                      type="button"
                      className="px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        BRI VA
                      </span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        BNI VA
                      </span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F]"
                    >
                      <span className="font-face-ro text-[#44474E] text-[14px]">
                        BRI TF
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="p-4 w-full rounded-xl bg-bg-button font-face-ro text-xl text-white"
              >
                Tambah Kantor
              </button>
            </form>
          </div>
        </div>
      )}

      {modalConfirm ? (
        <ModalConfirm
          image={ImgDiscard}
          message={
            "Data yang dibuat akan hilang apabila anda keluar. Teruskan?"
          }
          confirmText="Close"
          onClickBack={() => {
            setModalConfirm(false);
            setModalInsert(true);
          }}
          onClickConfirm={() => setModalConfirm(false)}
        />
      ) : modalConfirmClose ? (
        <ModalConfirm
          image={ImgDiscard}
          message={"Apakah anda yakin untuk menghapus data Kantor?"}
          onClickBack={() => setModalConfirmClose(false)}
          // onClickConfirm={()}
        />
      ) : (
        modalAlert && (
          <ModalAlert
            image={ImgSuccess}
            message={"Kantor baru berhasil ditambahkan"}
            onClickClose={() => setModalAlert(false)}
          />
        )
      )}
    </>
  );
};

export default Kantor;
