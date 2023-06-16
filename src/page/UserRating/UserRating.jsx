import React, { useState, useEffect } from "react";
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

const dummyRating = [
  {
    ID: 1,
    Name: "Michael Abraham",
    Office: {
      Name: "Wellspace",
      Type: "Office",
    },
    CreatedAt: "2023-06-14T12:12:04.616Z",
    star: 5,
  },
  {
    ID: 2,
    Name: "Irene Store",
    Office: {
      Name: "Wellspace",
      Type: "Office",
    },
    CreatedAt: "2023-06-12T12:12:04.616Z",
    star: 4,
  },
];

const UserRating = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalReview, setModalReview] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const pageSize = 10;

  useEffect(() => {}, []);

  const deleteReview = (id) => {
    alert(`oooo ${id}`);
    setModalConfirmDelete(false);
    setAlertDelete(true);
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
            {dummyRating.map((rating) => (
              <tr
                key={rating.ID}
                className="bg-white border-b-[1px] border-b-[#F4F3F7]"
              >
                <td className="py-10 pl-[22px]">{rating.Name}</td>
                <td className="py-10 pl-[22px]">
                  <h3 className="font-face-ro text-[#1E1F23]">
                    {rating.Office.Name}
                  </h3>
                  <h3 className="font-face-ro text-[#77777A]">
                    {rating.Office.Type}
                  </h3>
                </td>
                <td className="py-10 pl-[22px]">
                  {moment(rating.CreatedAt).format("DD/MM/YYYY")}
                </td>
                <td className="py-10 pl-[22px]">
                  <RatingStar rating={rating.star} />
                </td>
                <td className="py-[30px] pl-[22px]">
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => {
                        setModalReview(true);
                      }}
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
            dataLength={dummyRating.length}
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
        <ModalReview onClickClose={() => setModalReview(false)} />
      )}
    </>
  );
};

export default UserRating;
