import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { toast } from "react-toastify";
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
  PlusIcon,
  SpeakerIcon,
  ProjectorIcon,
  WhiteboardIcon,
  WaterIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "../../assets/svg";
import Pagination from "../../components/Pagination/Pagination";
import ModalFormOffice from "../../components/ModalFormOffice/ModalFormOffice";
import _ from "lodash";

const CoWorking = () => {
  const [coWorkingList, setCoWorkingList] = useState([]);
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
  const [selectedEdit, setSelectedEdit] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [widgetData, setWidgetData] = useState({});

  const currentCoWorkingList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    return coWorkingList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, coWorkingList]);

  const getCoWorking = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/office",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const coWorking = res.data.data.filter(
        (office) => office.Type === "coworking",
      );
      setCoWorkingList(coWorking);
    } catch (err) {
      toast.error(`Gagal mendapatkan data co-working space: ${err.message}`);
    }
  };

  const getWidgetData = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/admin/office-widget?type=coworking",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const widgetData = res.data.data;
      setWidgetData(widgetData);
    } catch (err) {
      toast.error(`Gagal mendapatkan data widget: ${err.message}`);
    }
  };

  useEffect(() => {
    getCoWorking();
    getWidgetData();
  }, []);

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    const newcoWorkingList = [...coWorkingList];
    setCoWorkingList(
      _.orderBy(
        newcoWorkingList,
        [(office) => office.Name.toLowerCase()],
        newSortOrder,
      ),
    );
  };

  const handleClickEdit = async (coWorkingId) => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        `https://api.officebuddy.space/api/v1/office/${coWorkingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const selectedCoWorking = res.data.data;
      setSelectedEdit(selectedCoWorking);
      setModalUpdate(true);
      setIsLoading(false);
    } catch (err) {
      toast.error(
        `Gagal mendapatkan detail data co-working space: ${err.message}`,
      );
    }
  };

  const insertOffice = async (insertData) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    const { formData, ...coWorkingData } = insertData;
    try {
      const res = await axios.post(
        `https://api.officebuddy.space/api/v1/office?type=coworking`,
        coWorkingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const coWorkingId = res.data.data.ID;
      setIsLoading(false);
      setModalInsert(false);

      if (!res.data.meta.is_error) {
        if (formData) {
          const uploadRes = await axios.post(
            `https://api.officebuddy.space/api/v1/office/${coWorkingId}/upload-image`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            },
          );

          if (!uploadRes.data.meta.is_error) {
            setAlertInsert(true);
            getCoWorking();
            getWidgetData();
          } else {
            toast.error("Upload image error");
          }
        } else {
          setAlertInsert(true);
          getCoWorking();
          getWidgetData();
        }
      } else {
        toast.error("Insert Co-Working error");
      }
    } catch (err) {
      toast.error(`Gagal menambahkan data co-working space: ${err.message}`);
      console.log("INSERT CO-WORKING ERROR >>>>", err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateOffice = async (updateData) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    const { id, formData, ...coWorkingData } = updateData;
    try {
      const res = await axios.put(
        `https://api.officebuddy.space/api/v1/office/${id}`,
        coWorkingData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsLoading(false);
      setModalUpdate(false);
      setEditData(null);
      setModalConfirmUpdate(false);
      setSelectedEdit(null);

      if (!res.data.meta.is_error) {
        if (formData) {
          const uploadRes = await axios.post(
            `https://api.officebuddy.space/api/v1/office/${id}/upload-image`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            },
          );

          if (!uploadRes.data.meta.is_error) {
            setAlertUpdate(true);
            getCoWorking();
            getWidgetData();
          } else {
            toast.error("Upload image error");
          }
        }
        setAlertUpdate(true);
        getCoWorking();
        getWidgetData();
      } else {
        toast.error("Update Co-Working error");
      }
    } catch (err) {
      toast.error(`Gagal mengubah data co-working space: ${err.message}`);
      console.log("UPDATE CO-WORKING ERROR >>>>", err);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteOffice = async (id) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.delete(
        `https://api.officebuddy.space/api/v1/office/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsLoading(false);
      setModalConfirmDelete(false);
      setDeleteData(null);

      if (!res.data.meta.is_error) {
        setAlertDelete(true);
        getCoWorking();
        getWidgetData();
      } else {
        toast.error("Gagal menghapus data co-working space");
      }
    } catch (err) {
      toast.error(`Gagal menghapus data co-working space: ${err.message}`);
      setIsLoading(false);
      setModalConfirmDelete(false);
    }
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
            <h1 className="font-face-ro text-[24px] leading-8">
              {widgetData?.OfficeCount || 0}
            </h1>
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
            <h1 className="font-face-ro text-[24px] leading-8">
              {widgetData?.TotalRating || "0"}
            </h1>
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
            <h1 className="font-face-ro text-[24px] leading-8">
              {widgetData?.TotalBooking || "0"} Orang
            </h1>
          </div>
        </div>

        <div>
          <div className="px-6 py-[18px] flex items-center justify-between bg-white">
            <h2 className="font-face-ro text-[#44474E] leading-7">
              Co-working Space yang Terdaftar
            </h2>

            <div className="flex gap-3">
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
                <th className="py-[18px] pl-[22px] flex gap-3 items-center">
                  Nama Co-Working
                  <button onClick={handleSort}>
                    {sortOrder === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />}
                  </button>
                </th>
                <th className="py-[18px] pl-[22px]">Jam buka & tutup</th>
                <th className="py-[18px] pl-[22px]">Fasilitas</th>
                <th className="py-[18px] pl-[22px]">Pembayaran</th>
                <th className="py-[18px] pl-[22px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCoWorkingList.map((office) => (
                <tr
                  key={office.ID}
                  className="bg-white border-b-[1px] border-b-[#F4F3F7]"
                >
                  <td className="py-[30px] pl-[22px] max-w-[200px]">
                    <h3 className="font-face-ro text-[#1E1F23]">
                      {office.Name}
                    </h3>
                    <h3 className="font-face-ro text-[#77777A]">
                      {office.Location}
                    </h3>
                  </td>
                  <td className="py-[30px] pl-[22px]">
                    <h3 className="font-face-ro text-[#46474A]">
                      {moment(office.Open, "HH:mm:ss")
                        .locale("en")
                        .format("HH:mm A")}{" "}
                      -{" "}
                      {moment(office.Close, "HH:mm:ss")
                        .locale("en")
                        .format("HH:mm A")}
                    </h3>
                  </td>
                  <td className="py-3 pl-[22px] max-w-[230px]">
                    <div className="flex flex-wrap gap-1">
                      {office.Facilities.split(",")
                        .filter((element) => element)
                        .map((facility, index) => (
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
                      <div className="px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F]">
                        <span className="font-face-ro text-[#44474E] text-[14px]">
                          BNI VA
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-[30px] pl-[22px]">
                    <div className="flex flex-wrap gap-1">
                      <button
                        onClick={() => handleClickEdit(office.ID)}
                        className="px-6 py-[10px] rounded-full bg-[#005DB9] shadow-lg"
                      >
                        <span className="font-face-ro text-white text-[14px]">
                          Ubah
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          setModalConfirmDelete(true);
                          setDeleteData(office.ID);
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
            <span className="font-face-ro text-[#46474A] text-[14px]">
              Menampilkan data dari {1 + (currentPage - 1) * 10}-
              {currentPage * 10}
            </span>
            <Pagination
              currentPage={currentPage}
              dataLength={coWorkingList.length}
              pageSize={10}
              onClickPage={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>

      {/* Modal Insert */}
      {modalInsert ? (
        <ModalFormOffice
          title={"Tambah Co-working Space"}
          type="coworking"
          onClickClose={() => {
            setModalInsert(false);
          }}
          onClickSubmit={(coWorkingData) => insertOffice(coWorkingData)}
        />
      ) : (
        modalUpdate && (
          <ModalFormOffice
            title={"Ubah Co-working Space"}
            type="coworking"
            defaultValues={selectedEdit}
            onClickClose={() => {
              setModalUpdate(false);
              setSelectedEdit(null);
              setEditData(null);
            }}
            onClickSubmit={(coWorkingData) => {
              setEditData(coWorkingData);
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

      {isLoading && (
        <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-hidden flex justify-center items-center">
          <div className="w-[250px] bg-white flex flex-col gap-6 justify-center items-center rounded-3xl px-4 py-8">
            <div
              className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <h1>Please Wait...</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default CoWorking;
