import React, { useState } from "react";
import StarIcon from "../../assets/img/star-icon.png";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import ImgDiscard from "../../assets/img/discard.png";
import ImgSuccess from "../../assets/img/success.png";
import ImgDeleteSuccess from "../../assets/img/delete-success.png";
import TotalCoWorking from "../../assets/img/total-coworking.png";
import BookingCoWorking from "../../assets/img/booking-coworking.png";
import ImgConfirmEdit from "../../assets/img/update-confirm.png";
import ImgUpdateSuccess from "../../assets/img/update-success.png";
import {
  FilterIcon,
  PlusIcon,
  SpeakerIcon,
  ProjectorIcon,
  WhiteboardIcon,
  WaterIcon,
} from "../../assets/svg";
import Pagination from "../../components/Pagination/Pagination";
import ModalFormCoWorking from "../../components/ModalFormCoWorking/ModalFormCoWorking";

const dataDummy = [
  {
    id: 1,
    name: "Wellspace",
    address: "Jl Melahayu No.12",
    open: "10:00 AM",
    close: "10:00 PM",
    facilities: ["Water Refill", "Speaker", "Projector", "Whiteboard"],
    payment: ["BNI VA"],
  },
  {
    id: 2,
    name: "Seo Office",
    address: "Jl Melati No.1",
    open: "09:00 AM",
    close: "04:00 PM",
    facilities: ["Water Refill", "Speaker", "Whiteboard"],
    payment: ["BNI VA"],
  },
];

const CoWorking = () => {
  const [officeList, setOfficeList] = useState(dataDummy);
  const [sortOrder, setSortOrder] = useState("asc");
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [modalConfirmUpdate, setModalConfirmUpdate] = useState(false);
  const [alertUpdate, setAlertUpdate] = useState(false);
  const [alertInsert, setAlertInsert] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editData, setEditData] = useState();
  const [deleteData, setDeleteData] = useState();

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    // Perform sorting logic here
  };

  const handleClickEdit = (id) => {
    const selectedOffice = officeList.find((office) => office.id === id);
    setEditData(selectedOffice);
    setModalUpdate(true);
  };

  const insertOffice = (insertData) => {
    const newOfficeList = [...officeList, insertData];
    officeList.push({
      id: officeList.length + 1,
      ...insertData,
    });
    setOfficeList(newOfficeList);
    setModalInsert(false);
    setAlertInsert(true);
  };

  const updateOffice = (updateData) => {
    const newOfficeList = officeList.map((office) => {
      if (office.id === editData.id) {
        return {
          ...office,
          ...updateData,
        };
      }
      return office;
    });
    setOfficeList(newOfficeList);
    setEditData(null);
    setModalUpdate(false);
    setModalConfirmUpdate(false);
    setAlertUpdate(true);
  };

  const deleteOffice = (id) => {
    const newOfficeList = officeList.filter((office) => office.id !== id);
    setOfficeList(newOfficeList);
    setDeleteData(null);
    setModalConfirmDelete(false);
    setAlertDelete(true);
  };

  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="p-6 bg-white rounded-[8px]">
            <div className="mb-4">
              <img
                className="w-[50px] h-[50px]"
                src={TotalCoWorking}
                alt="Co-office Icon"
              />
            </div>
            <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
              Total Co-working Space
            </h3>
            <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
              Jumlah Co-working Space saat ini
            </p>
            <h1 className="font-face-ro text-[24px] leading-8">36</h1>
          </div>
          <div className="p-6 bg-white rounded-[8px]">
            <div className="mb-4">
              <img
                className="w-[50px] h-[50px]"
                src={StarIcon}
                alt="Star Icon"
              />
            </div>
            <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
              Penilaian Co-working Space
            </h3>
            <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
              Penilaian Co-working Space saat ini
            </p>
            <h1 className="font-face-ro text-[24px] leading-8">16</h1>
          </div>
          <div className="p-6 bg-white rounded-[8px]">
            <div className="mb-4">
              <img
                className="w-[50px] h-[50px]"
                src={BookingCoWorking}
                alt="Booking Icon"
              />
            </div>
            <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
              Total Booking
            </h3>
            <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
              Booking Co-working Space hari ini
            </p>
            <h1 className="font-face-ro text-[24px] leading-8">150 Orang</h1>
          </div>
        </div>

        <div>
          <div className="px-6 py-[18px] flex items-center justify-between bg-white">
            <h2 className="font-face-ro text-[#44474E] leading-7">
              Co-working Space yang Terdaftar
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

          <table className="table min-w-full mb-[5px]">
            <thead>
              <tr className="bg-[#F4F3F7] font-face-ro text-[#46474A] text-left">
                <th
                  className="py-3 px-6 text-left cursor-pointer"
                  onClick={handleSort}
                >
                  <span className="py-[18px] pl-[22px] flex justify-between">
                    <span>Nama</span>
                    {sortOrder === "asc" && (
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {sortOrder === "desc" && (
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                  </span>
                </th>
                <th className="py-[18px] pl-[22px]">Jam buka & tutup</th>
                <th className="py-[18px] pl-[22px]">Fasilitas</th>
                <th className="py-[18px] pl-[22px]">Pembayaran</th>
                <th className="py-[18px] pl-[22px]">Action</th>
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
                          <span className="font-face-ro text-[#74777F] text-[14px]">
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
                      <button
                        onClick={() => handleClickEdit(office.id)}
                        className="px-6 py-[10px] rounded-full bg-[#005DB9] shadow-lg"
                      >
                        <span className="font-face-ro text-white text-[14px]">
                          Ubah
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          setModalConfirmDelete(true);
                          setDeleteData(office.id);
                        }}
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
          {/* Pagination */}
          <div className="px-6 py-5 flex flex-wrap justify-center sm:justify-between items-center gap-3">
            <span className="font-face-ro text-[#44474E] text-[12px]">
              Menampilkan data dari {1 + (currentPage - 1) * 10}-{" "}
              {10 * currentPage}
            </span>
            <Pagination
              currentPage={currentPage}
              dataLength={officeList.length}
              pageSize={10}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>

      {/* Modal Insert */}
      {modalInsert ? (
        <ModalFormCoWorking
          title={"Tambah Co-working Space"}
          onClickClose={() => {
            setModalInsert(false);
          }}
          onClickSubmit={(officeData) => insertOffice(officeData)}
        />
      ) : (
        modalUpdate && (
          <ModalFormCoWorking
            title={"Ubah Co-working Space"}
            defaultValues={editData}
            onClickClose={() => {
              setModalUpdate(false);
              setEditData(null);
            }}
            onClickSubmit={(officeData) => {
              setEditData(officeData);
              setModalConfirmUpdate(true);
            }}
          />
        )
      )}

      {/* Modal Confirm Delete */}
      {modalConfirmDelete ? (
        <ModalConfirm
          image={ImgDiscard}
          message={"Apakah anda yakin untuk menghapus data Co-working Space?"}
          onClickBack={() => {
            setModalConfirmDelete(false);
            setDeleteData(null);
          }}
          onClickConfirm={() => {
            deleteOffice(deleteData);
          }}
        />
      ) : modalConfirmUpdate ? (
        <ModalConfirm
          image={ImgConfirmEdit}
          message={"Apakah anda yakin untuk mengubah data?"}
          onClickBack={() => {
            setModalConfirmUpdate(false);
          }}
          onClickConfirm={() => {
            updateOffice(editData);
          }}
        />
      ) : alertInsert ? (
        <ModalAlert
          image={ImgSuccess}
          message={"Co-working space baru berhasil ditambahkan"}
          onClickClose={() => setAlertInsert(false)}
        />
      ) : alertUpdate ? (
        <ModalAlert
          image={ImgUpdateSuccess}
          message={"Data berhasil diubah"}
          onClickClose={() => setAlertUpdate(false)}
        />
      ) : alertDelete ? (
        <ModalAlert
          image={ImgDeleteSuccess}
          message={"Data berhasil dihapus"}
          onClickClose={() => setAlertDelete(false)}
        />
      ) : null}
    </>
  );
};

export default CoWorking;
