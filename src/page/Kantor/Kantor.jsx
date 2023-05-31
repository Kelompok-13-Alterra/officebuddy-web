import React, { useState } from "react";
import Officeicon from "../../assets/img/office-icon.png";
import StarIcon from "../../assets/img/star-icon.png";
import BookingIcon from "../../assets/img/booking-icon.png";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import ImgDiscard from "../../assets/img/discard.png";
import ImgSuccess from "../../assets/img/success.png";
import ImgDeleteSuccess from "../../assets/img/delete-success.png";
import {
  FilterIcon,
  PlusIcon,
  SpeakerIcon,
  ProjectorIcon,
  WhiteboardIcon,
  WaterIcon,
} from "../../assets/svg";
import ModalFormOffice from "../../components/ModalFormOffice/ModalFormOffice";
import Pagination from "../../components/Pagination/Pagination";

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
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [alertInsert, setAlertInsert] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [officeList, setOfficeList] = useState(dummyOffice);

  const insertOffice = (insertData) => {
    const officeArr = officeList;
    officeArr.push({
      id: officeList.length + 1,
      ...insertData,
    });

    setOfficeList(officeArr);
    setModalInsert(false);
    setAlertInsert(true);
  };

  const updateOffice = () => {};

  const deleteOffice = () => {
    setModalConfirmDelete(false);
    setAlertDelete(true);
  };

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
              {officeList.map((office) => (
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
                          {facility === "Water Refill" ? (
                            <WaterIcon />
                          ) : facility === "Speaker" ? (
                            <SpeakerIcon />
                          ) : facility === "Projector" ? (
                            <ProjectorIcon />
                          ) : facility === "Whiteboard" ? (
                            <WhiteboardIcon />
                          ) : null}

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
                    <div className="flex flex-wrap gap-1">
                      <button className="px-6 py-[10px] rounded-full bg-[#005DB9] shadow-lg">
                        <span className="font-face-ro text-white text-[14px]">
                          Edit
                        </span>
                      </button>
                      <button
                        onClick={() => setModalConfirmDelete(true)}
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
          <div className="px-6 py-5 flex flex-wrap justify-center sm:justify-between items-center gap-3">
            <span className="font-face-ro text-[#46474A] text-[14px]">
              Menampilkan data dari {1 + (currentPage - 1) * 10}-
              {currentPage * 10}
            </span>
            <Pagination
              currentPage={currentPage}
              dataLength={40}
              pageSize={10}
              onClickPage={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>

      {modalInsert && (
        <ModalFormOffice
          onClickClose={() => {
            setModalInsert(false);
          }}
          onClickSubmit={(officeData) => insertOffice(officeData)}
        />
      )}

      {modalConfirmDelete ? (
        <ModalConfirm
          image={ImgDiscard}
          message={"Apakah anda yakin untuk menghapus data Kantor?"}
          onClickBack={() => setModalConfirmDelete(false)}
          onClickConfirm={() => {
            deleteOffice();
          }}
        />
      ) : alertInsert ? (
        <ModalAlert
          image={ImgSuccess}
          message={"Kantor baru berhasil ditambahkan"}
          onClickClose={() => setAlertInsert(false)}
        />
      ) : (
        alertDelete && (
          <ModalAlert
            image={ImgDeleteSuccess}
            message={"Data berhasil dihapus"}
            onClickClose={() => setAlertDelete(false)}
          />
        )
      )}
    </>
  );
};

export default Kantor;
