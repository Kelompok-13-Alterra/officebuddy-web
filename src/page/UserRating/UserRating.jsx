import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../../assets/svg";
import moment from "moment";
import Pagination from "../../components/Pagination/Pagination";
import ModalReview from "../../components/ModalReview/ModalReview";
import RatingStar from "../../components/RatingStar/RatingStar";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ImgDiscard from "../../assets/img/discard2.png";
import ImgDeleteSuccess from "../../assets/img/delete-success.png";
import { toast } from "react-toastify";
import axios from "axios";

const UserRating = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalReview, setModalReview] = useState(false);
  const [selectedReview, setSelectedReview] = useState({});
  const [ratingList, setRatingList] = useState([]);
  const [officeList, setOfficeList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const pageSize = 10;

  const currenRatingList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return ratingList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, ratingList]);

  const getRatings = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/rating",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const users = res.data.data;
      setRatingList(users);
    } catch (error) {
      toast.error(`Gagal mendapatkan data rating: ${error.message}`);
      console.log("GET RATINGS ERROR >>>>", error);
    }
  };

  const getUsers = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get("https://api.officebuddy.space/api/v1/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const users = res.data.data;
      setUserList(users);
    } catch (error) {
      toast.error(`Gagal mendapatkan data user: ${error.message}`);
      console.log("GET USERS ERROR >>>>", error);
    }
  };

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
      const offices = res.data.data;
      setOfficeList(offices);
    } catch (error) {
      toast.error(`Gagal mendapatkan data kantor: ${error.message}`);
      console.log("GET OFFICE ERROR >>>>", error);
    }
  };

  useEffect(() => {
    getUsers();
    getOffices();
    getRatings();
  }, []);

  const deleteReview = async (id) => {
    const token = sessionStorage.getItem("access_token");
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `https://api.officebuddy.space/api/v1/rating/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.data.meta.is_error) {
        setAlertDelete(true);
        getRatings();
      } else {
        toast.error(`Gagal menghapus data review!`);
      }
    } catch (error) {
      toast.error(`Gagal menghapus data review: ${error.message}`);
      console.log("DELETE REVIEW ERROR >>>>", error);
    } finally {
      setModalConfirmDelete(false);
      setIsLoading(false);
    }
  };

  const userData = (id) => {
    return userList.find((user) => user.ID === id);
  };

  const officeData = (id) => {
    return officeList.find((office) => office.ID === id);
  };

  const handleDetail = async (id) => {
    setIsLoading(true);
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        `https://api.officebuddy.space/api/v1/rating/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const selectedReview = res.data.data;
      setSelectedReview({
        User: userData(selectedReview.UserID),
        Office: officeData(selectedReview.OfficeID),
        ...selectedReview,
      });
      setModalReview(true);
    } catch (error) {
      toast.error("GET DETAIL REVIEW ERROR");
      console.log("GET DETAIL REVIEW ERROR >>>>", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="p-8 bg-[#FDFBFF]">
        <div className="ms-4 mb-10 flex items-center gap-8 font-face-ro">
          <Link to="/database-user" className="text-[#878787]">
            Database User
          </Link>
          <ArrowRightIcon fill={"#5E5B50"} />
          <p className="text-[#0085FF]">Penilaian Pembeli</p>
        </div>

        <div className="px-6 py-[18px] flex items-center justify-between gap-2">
          <h2 className="font-face-ro text-[#44474E] text-[18px] leading-7">
            Data Penilaian Pembeli
          </h2>

          {/* <button className="flex items-center gap-3 px-4 py-[10px] bg-white rounded-full border-[1px] border-[#C7C6CA] text-[#5E5E62] font-medium">
            <FilterIcon /> Filters
          </button> */}
        </div>

        <table className="w-full table mb-[5px]">
          <thead>
            <tr className="bg-[#F4F3F7] font-face-ro text-[#46474A] text-left">
              <th className="py-[18px] pl-[22px]">Nama</th>
              <th className="py-[18px] pl-[22px]">Booking</th>
              <th className="py-[18px] pl-[22px]">Tanggal Penilaian</th>
              <th className="py-[18px] pl-[22px]">Penilaian</th>
              <th className="py-[18px] pl-[22px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currenRatingList.map((rating) => (
              <tr
                key={rating.ID}
                className="bg-white border-b-[1px] border-b-[#F4F3F7]"
              >
                <td className="py-10 pl-[22px]">
                  {userData(rating.UserID)?.Name || (
                    <span className="text-red-600 italic">
                      [Data not found]
                    </span>
                  )}
                </td>
                <td className="py-10 pl-[22px]">
                  <h3 className="font-face-ro text-[#1E1F23]">
                    {officeData(rating.OfficeID)?.Name || (
                      <span className="text-red-600 italic">
                        [Data not found]
                      </span>
                    )}
                  </h3>
                  <h3 className="font-face-ro text-[#77777A]">
                    {officeData(rating.OfficeID)?.Type === "office"
                      ? "Kantor"
                      : officeData(rating.OfficeID)?.Type === "coworking"
                      ? "Co-Working"
                      : ""}
                  </h3>
                </td>
                <td className="py-10 pl-[22px]">
                  {moment(rating.CreatedAt).format("DD/MM/YYYY")}
                </td>
                <td className="py-10 pl-[22px]">
                  <RatingStar rating={rating.Star} />
                </td>
                <td className="py-[30px] pl-[22px]">
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => handleDetail(rating.ID)}
                      className="px-6 py-[10px] rounded-full bg-[#005DB9] shadow-lg"
                    >
                      <span className="font-face-ro text-white text-[14px]">
                        Details
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setDeleteId(rating.ID);
                        setModalConfirmDelete(true);
                      }}
                      className="px-6 py-[10px] rounded-full bg-[#BA1A1A]"
                    >
                      <span className="font-face-ro text-white text-[14px]">
                        Hapus
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
            dataLength={ratingList.length}
            pageSize={pageSize}
            onClickPage={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      {modalConfirmDelete ? (
        <ModalConfirm
          image={ImgDiscard}
          message={"Apakah anda yakin untuk menghapus Penilaian tersebut?"}
          onClickBack={() => {
            setDeleteId(undefined);
            setModalConfirmDelete(false);
          }}
          onClickConfirm={() => {
            deleteReview(deleteId);
          }}
        />
      ) : (
        alertDelete && (
          <ModalAlert
            image={ImgDeleteSuccess}
            message={"Penilaian berhasil dihapus"}
            onClickClose={() => setAlertDelete(false)}
          />
        )
      )}

      {modalReview && (
        <ModalReview
          reviewData={selectedReview}
          onClickClose={() => setModalReview(false)}
        />
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

export default UserRating;
