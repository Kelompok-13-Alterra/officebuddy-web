import React, { useState, useEffect, useMemo } from "react";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "../../assets/svg";
import Pagination from "../../components/Pagination/Pagination";
import ModalConfirm from "../../components/ModalConfirm/ModalConfirm";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import ModalFormUser from "../../components/ModalFormUser/ModalFormUser";
import ImgDiscard from "../../assets/img/discard2.png";
import ImgDeleteSuccess from "../../assets/img/delete-success.png";
import ImgUpdateSuccess from "../../assets/img/update-success.png";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import _ from "lodash";

const TotalUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
  const [alertUpdate, setAlertUpdate] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [selectedEdit, setSelectedEdit] = useState();
  const [orderByName, setOrderByName] = useState();

  const pageSize = 10;

  const currenUserList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return userList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, userList]);

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

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (orderByName === "desc") {
      const newOrder = _.orderBy(
        userList,
        [(user) => user.Name.toLowerCase()],
        "desc",
      );
      setUserList(newOrder);
    } else {
      const newOrder = _.orderBy(
        userList,
        [(user) => user.Name.toLowerCase()],
        "asc",
      );
      setUserList(newOrder);
    }
  }, [orderByName]);

  const handleClickEdit = (userData) => {
    setSelectedEdit(userData);
    setModalEdit(true);
  };

  const deleteUser = async (id) => {
    const token = sessionStorage.getItem("access_token");
    setIsLoading(true);
    try {
      const res = await axios.delete(
        `https://api.officebuddy.space/api/v1/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!res.data.meta.is_error) {
        setAlertDelete(true);
        getUsers();
      } else {
        toast.error(`Gagal menghapus akun user!`);
      }
    } catch (error) {
      toast.error(`Gagal menghapus akun user: ${error.message}`);
      console.log("DELETE USER ERROR >>>>", error);
    } finally {
      setModalConfirmDelete(false);
      setIsLoading(false);
    }
  };

  const updateUser = async (updateData) => {
    setIsLoading(true);

    const token = sessionStorage.getItem("access_token");

    try {
      const res = await axios.put(
        `https://api.officebuddy.space/api/v1/user/edit/${selectedEdit.id}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setIsLoading(false);
      setSelectedEdit(undefined);
      setModalEdit(false);

      if (!res.data.meta.is_error) {
        setAlertUpdate(true);
        getUsers();
      } else {
        toast.error("Update user error");
      }
    } catch (error) {
      toast.error(`Update user error: ${error.message}`);
      console.log("UPDATE USER ERROR >>>>", error.message);
      setIsLoading(false);
    }
  };

  const handleOrderByName = () => {
    if (orderByName === "desc") {
      setOrderByName("asc");
    } else {
      setOrderByName("desc");
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
          <p className="text-[#0085FF]">Total Pengguna</p>
        </div>

        <div className="px-6 py-[18px] flex items-center justify-between gap-2">
          <h2 className="font-face-ro text-[#44474E] text-[18px] leading-7">
            Data Pengguna
          </h2>

          {/* <button className="flex items-center gap-3 px-4 py-[10px] bg-white rounded-full border-[1px] border-[#C7C6CA] text-[#5E5E62] font-medium">
            <FilterIcon /> Filters
          </button> */}
        </div>

        <table className="w-full table mb-[5px]">
          <thead>
            <tr className="bg-[#F4F3F7] font-face-ro text-[#46474A] text-left">
              <th className="py-[18px] pl-[22px] flex gap-3 items-center">
                Nama
                <button onClick={handleOrderByName}>
                  {orderByName === "desc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </button>
              </th>
              <th className="py-[18px] pl-[22px]">Email</th>
              <th className="py-[18px] pl-[22px]">Tanggal Pendaftaran</th>
              <th className="py-[18px] pl-[22px]">Status</th>
              <th className="py-[18px] pl-[22px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {currenUserList.map((user) => (
              <tr
                key={user.ID}
                className="bg-white border-b-[1px] border-b-[#F4F3F7]"
              >
                <td className="py-10 pl-[22px]">
                  {user.Name}
                  {user.Role === 1 && (
                    <span className="ms-3 px-2 py-1 bg-green-300 rounded-full font-face-ro-med text-green-900 text-xs capitalize">
                      Admin
                    </span>
                  )}
                </td>
                <td className="py-10 pl-[22px]">{user.Email}</td>
                <td className="py-10 pl-[22px]">
                  {moment(user.CreatedAt).format("DD/MM/YYYY")}
                </td>
                <td className="py-10 pl-[22px]">
                  <span className="px-4 py-[6px] bg-[#CEE5FF] rounded-full font-face-ro-med text-[#001D33] text-[14px] capitalize">
                    Aktif
                  </span>
                </td>
                <td className="py-[30px] pl-[22px]">
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => {
                        handleClickEdit({
                          id: user.ID,
                          name: user.Name,
                          email: user.Email,
                        });
                      }}
                      className="px-6 py-[10px] rounded-full bg-[#005DB9] shadow-lg"
                    >
                      <span className="font-face-ro text-white text-[14px]">
                        Ubah
                      </span>
                    </button>
                    <button
                      onClick={() => {
                        setDeleteId(user.ID);
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
            dataLength={userList.length}
            pageSize={pageSize}
            onClickPage={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {modalEdit ? (
        <ModalFormUser
          defaultValues={selectedEdit}
          onClickClose={() => {
            setSelectedEdit(undefined);
            setModalEdit(false);
          }}
          onClickSubmit={(updateData) => {
            updateUser(updateData);
          }}
        />
      ) : alertUpdate ? (
        <ModalAlert
          image={ImgUpdateSuccess}
          message={"Data Akun berhasil diubah"}
          onClickClose={() => setAlertUpdate(false)}
        />
      ) : modalConfirmDelete ? (
        <ModalConfirm
          image={ImgDiscard}
          message={"Apakah anda yakin untuk menghapus pengguna tersebut?"}
          onClickBack={() => {
            setDeleteId(undefined);
            setModalConfirmDelete(false);
          }}
          onClickConfirm={() => {
            deleteUser(deleteId);
          }}
        />
      ) : (
        alertDelete && (
          <ModalAlert
            image={ImgDeleteSuccess}
            message={"Akun berhasil dihapus"}
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

export default TotalUser;
