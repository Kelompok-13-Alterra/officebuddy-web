import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import moment from "moment";
import Officeicon from "../../assets/img/office-icon.png";
import StarIcon from "../../assets/img/star-icon.png";
import BookingIcon from "../../assets/img/booking-icon.png";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import ImgDiscard from "../../assets/img/discard.png";
import ImgConfirmEdit from "../../assets/img/update-confirm.png";
import ImgSuccess from "../../assets/img/success.png";
import ImgDeleteSuccess from "../../assets/img/delete-success.png";
import ImgUpdateSuccess from "../../assets/img/update-success.png";
import {
  PlusIcon,
  SpeakerIcon,
  ProjectorIcon,
  WhiteboardIcon,
  WaterIcon,
} from "../../assets/svg";
import ModalFormOffice from "../../components/ModalFormOffice/ModalFormOffice";
import Pagination from "../../components/Pagination/Pagination";
import { toast } from "react-toastify";

const Kantor = () => {
  const [officeList, setOfficeList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [modalConfirmUpdate, setModalConfirmUpdate] = useState(false);
  const [alertInsert, setAlertInsert] = useState(false);
  const [alertUpdate, setAlertUpdate] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [editData, setEditData] = useState();
  const [selectedEdit, setSelectedEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [widgetData, setWidgetData] = useState({});

  const pageSize = 10;

  const currentOfficeList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return officeList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, officeList]);

  const getOffices = async () => {
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
      const offices = res.data.data.filter(
        (office) => office.Type === "office",
      );
      setOfficeList(offices);
    } catch (error) {
      toast.error(`Gagal mendapatkan data kantor: ${error.message}`);
      console.log("GET OFFICE ERROR >>>>", error);
    }
  };

  const getWidgetData = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/admin/office-widget?type=office",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const widgetData = res.data.data;
      setWidgetData(widgetData);
    } catch (error) {
      console.log("GET WIDGET DATA ERROR >>>>", error);
    }
  };

  useEffect(() => {
    getOffices();
    getWidgetData();
  }, []);

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    const newOfficeList = [...officeList];
    newOfficeList.sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.ID - b.ID;
      }
      return b.ID - a.ID;
    });
    setOfficeList(newOfficeList);
  };

  const handleClickEdit = async (officeId) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        `https://api.officebuddy.space/api/v1/office/${officeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const selectedOffice = res.data.data;
      setSelectedEdit(selectedOffice);
      setModalEdit(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("GET DETAIL OFFICE ERROR");
      console.log("GET DETAIL OFFICE ERROR >>>>", error.message);
    }
  };

  const insertOffice = async (insertData) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    const { payment, formData, ...officeData } = insertData;
    console.log(payment, formData);

    try {
      const res = await axios.post(
        `https://api.officebuddy.space/api/v1/office?type=office`,
        officeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsLoading(false);
      setModalInsert(false);

      if (!res.data.meta.is_error) {
        setAlertInsert(true);
        getOffices();
        getWidgetData();
      } else {
        toast.error("Insert office error");
      }
    } catch (error) {
      toast.error(`Insert office error: ${error.message}`);
      console.log("INSERT OFFICE ERROR >>>>", error);
      setIsLoading(false);
    }
  };

  const updateOffice = async (updateData) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    const { id, payment, formData, ...officeData } = updateData;
    console.log(payment, formData);

    try {
      const res = await axios.put(
        `https://api.officebuddy.space/api/v1/office/${id}`,
        officeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsLoading(false);
      setEditData(undefined);
      setSelectedEdit(undefined);
      setModalEdit(false);
      setModalConfirmUpdate(false);

      if (!res.data.meta.is_error) {
        setAlertUpdate(true);
        getOffices();
        getWidgetData();
      } else {
        toast.error("Update office error");
      }
    } catch (error) {
      toast.error(`Update office error: ${error.message}`);
      console.log("UPDATE OFFICE ERROR >>>>", error.message);
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
      setDeleteId(undefined);
      setModalConfirmDelete(false);

      if (!res.data.meta.is_error) {
        setAlertDelete(true);
        getOffices();
        getWidgetData();
      } else {
        toast.error("Delete office error");
      }
    } catch (error) {
      toast.error(`Delete office error: ${error.message}`);
      console.log("DELETE OFFICE ERROR >>>>", error);
      setIsLoading(false);
      setModalConfirmDelete(false);
    }
  };

  return (
    <>
      <div className="p-8 bg-[#FDFBFF]">
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-sm">
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
            <h1 className="font-face-ro text-[24px] leading-8">
              {widgetData?.OfficeCount || "0"}
            </h1>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
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
            <h1 className="font-face-ro text-[24px] leading-8">
              {widgetData?.TotalRating || "0"}
            </h1>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
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
            <h1 className="font-face-ro text-[24px] leading-8">
              {widgetData?.TotalBooking || "0"} Orang
            </h1>
          </div>
        </div>

        <div>
          <div className="px-6 py-[18px] flex items-center justify-between">
            <h2 className="font-face-ro text-[#44474E] leading-7">
              Kantor yang terdaftar
            </h2>

            <div className="flex gap-3">
              {/* <button className="flex items-center gap-3 px-4 py-[10px] bg-white rounded-full border-[1px] border-[#C7C6CA] text-[#5E5E62] font-medium">
                <FilterIcon /> Filters
              </button> */}
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
                <th className="py-[18px] pl-[22px] flex gap-4 justify-between items-center">
                  Nama Kantor
                  <button onClick={handleSort}>
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
                  </button>
                </th>
                <th className="py-[18px] pl-[22px]">Jam buka & tutup</th>
                <th className="py-[18px] pl-[22px]">Fasilitas</th>
                <th className="py-[18px] pl-[22px]">Pembayaran</th>
                <th className="py-[18px]"></th>
              </tr>
            </thead>
            <tbody>
              {currentOfficeList.map((office) => (
                <tr
                  key={office.ID}
                  className="bg-white border-b-[1px] border-b-[#F4F3F7]"
                >
                  <td className="py-[30px] pl-[22px]">
                    <h3 className="font-face-ro text-[#1E1F23]">
                      {office.Name}
                    </h3>
                    <h3 className="font-face-ro text-[#77777A]">
                      {office.Location}
                    </h3>
                  </td>
                  <td className="py-[30px] pl-[22px]">
                    <h3 className="font-face-ro text-[#46474A]">
                      {moment(office.Open, "HH:mm:ss").format("hh:mm A")} -{" "}
                      {moment(office.Close, "HH:mm:ss").format("hh:mm A")}
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

                            <span className="font-face-ro text-[#44474E] text-[14px]">
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
                          Edit
                        </span>
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(office.ID);
                          setModalConfirmDelete(true);
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
          <div className="px-6 py-5 flex flex-wrap justify-center sm:justify-between items-center gap-3">
            <span className="font-face-ro text-[#46474A] text-[14px]">
              Menampilkan data dari {1 + (currentPage - 1) * pageSize}-
              {currentPage * pageSize}
            </span>
            <Pagination
              currentPage={currentPage}
              dataLength={officeList.length}
              pageSize={pageSize}
              onClickPage={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>

      {modalInsert ? (
        <ModalFormOffice
          title={"Tambah Kantor"}
          type="office"
          onClickClose={() => {
            setModalInsert(false);
          }}
          onClickSubmit={(officeData) => insertOffice(officeData)}
        />
      ) : (
        modalEdit && (
          <ModalFormOffice
            title={"Ubah Kantor"}
            type="office"
            defaultValues={selectedEdit}
            onClickClose={() => {
              setEditData(undefined);
              setSelectedEdit(undefined);
              setModalEdit(false);
            }}
            onClickSubmit={(officeData) => {
              setEditData(officeData);
              setModalConfirmUpdate(true);
            }}
          />
        )
      )}

      {modalConfirmDelete ? (
        <ModalConfirm
          image={ImgDiscard}
          message={"Apakah anda yakin untuk menghapus data Kantor?"}
          onClickBack={() => {
            setDeleteId(undefined);
            setModalConfirmDelete(false);
          }}
          onClickConfirm={() => {
            deleteOffice(deleteId);
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
          message={"Kantor baru berhasil ditambahkan"}
          onClickClose={() => setAlertInsert(false)}
        />
      ) : alertUpdate ? (
        <ModalAlert
          image={ImgUpdateSuccess}
          message={"Data berhasil diubah"}
          onClickClose={() => setAlertUpdate(false)}
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

export default Kantor;
