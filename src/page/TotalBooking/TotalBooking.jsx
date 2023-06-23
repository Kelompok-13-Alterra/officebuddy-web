import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "../../assets/svg";
import { Link } from "react-router-dom";
import moment from "moment";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import { toast } from "react-toastify";
import _ from "lodash";

const TotalBooking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingData, setBookingData] = useState([]);
  const [userList, setUserList] = useState([]);
  const [officeList, setOfficeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByDate, setSortByDate] = useState("desc");
  const [sortByStatus, setSortByStatus] = useState("desc");
  const [sortBy, setSortBy] = useState("date");
  const pageSize = 10;

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
      console.log("GET OFFICE ERROR >>>>", error);
    }
  };

  const getBooking = async () => {
    const token = sessionStorage.getItem("access_token");
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/transaction",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const bookingData = res.data.data;
      setBookingData(_.orderBy(bookingData, "CreatedAt", "desc"));
    } catch (error) {
      console.log("GET BOOKING DATA ERROR >>>>", error);
      toast.error("GET BOOKING DATA ERROR");
    } finally {
      setIsLoading(false);
    }
  };

  const userData = (id) => {
    return userList.find((user) => user.ID === id);
  };

  const officeData = (id) => {
    return officeList.find((office) => office.ID === id);
  };

  useEffect(() => {
    getUsers();
    getOffices();
    getBooking();
  }, []);

  const currentBookingList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return bookingData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, bookingData]);

  const handleSortByDate = useCallback(() => {
    if (sortByDate === "desc") {
      const newSort = "asc";
      setSortByDate(newSort);

      const newOrder = _.orderBy(bookingData, "CreatedAt", newSort);
      setBookingData(newOrder);
    } else {
      const newSort = "desc";
      setSortByDate(newSort);

      const newOrder = _.orderBy(bookingData, "CreatedAt", newSort);
      setBookingData(newOrder);
    }
  }, [sortByDate, bookingData]);

  const handleSortByStatus = () => {
    if (sortByStatus === "desc") {
      const newSort = "asc";
      setSortByStatus(newSort);

      const newOrder = _.orderBy(
        bookingData,
        [
          (booking) => {
            if (
              booking.PaymentStatus === "" ||
              booking.PaymentStatus === "pending" ||
              booking.PaymentStatus === "challange"
            ) {
              return "pending";
            } else {
              return booking.PaymentStatus;
            }
          },
        ],
        newSort,
      );
      setBookingData(newOrder);
      console.log(bookingData);
    } else {
      const newSort = "desc";
      setSortByStatus(newSort);
      const newOrder = _.orderBy(
        bookingData,
        [
          (booking) => {
            if (
              booking.PaymentStatus === "" ||
              booking.PaymentStatus === "pending" ||
              booking.PaymentStatus === "challange"
            ) {
              return "pending";
            } else {
              return booking.PaymentStatus;
            }
          },
        ],
        newSort,
      );
      setBookingData(newOrder);
      console.log(bookingData);
    }
  };

  const handleSorting = (sortBy) => {
    setSortBy(sortBy);
    if (sortBy === "date") {
      handleSortByDate();
    } else if (sortBy === "status") {
      handleSortByStatus();
    }
  };

  const bookingStatus = useCallback(
    (status) => {
      if (status === "pending" || status === "" || status === "challange")
        return "Menunggu Pembayaran";
      if (status === "failure") return "Gagal";
      if (status === "success") return "Selesai";
    },
    [bookingData],
  );

  const statusStyle = useCallback(
    (status) => {
      if (status === "pending" || status === "" || status === "challange")
        return "bg-[#CEE5FF] text-[#001D33]";
      if (status === "failure") return "bg-red-300 text-red-950";
      if (status === "success") return "bg-[#44474E1F] text-[#1a1b1ea3]";
    },
    [bookingData],
  );
  return (
    <div className="p-8 bg-[#FDFBFF]">
      <div className="ms-4 mb-10 flex items-center gap-8 font-face-ro">
        <Link to="/database-user" className="text-[#878787]">
          Database User
        </Link>
        <ArrowRightIcon fill={"#5E5B50"} />
        <p className="text-[#0085FF]">Total Booking</p>
      </div>

      <div className="px-6 py-[18px] flex items-center justify-between gap-2">
        <h2 className="font-face-ro text-[#44474E] text-[18px] leading-7">
          Data Pesanan Pembeli
        </h2>

        {/* <button className="flex items-center gap-3 px-4 py-[10px] bg-white rounded-full border-[1px] border-[#C7C6CA] text-[#5E5E62] font-medium">
          <FilterIcon /> Filters
        </button> */}
      </div>

      <table className="w-full table mb-[5px]">
        <thead>
          <tr className="bg-[#F4F3F7] font-face-ro text-[#46474A] text-left">
            <th className="py-[18px] pl-[22px]">Nama</th>
            <th className="py-[18px] pl-[22px]">Email</th>
            <th className="py-[18px] pl-[22px]">Booking</th>
            <th className="py-[18px] pl-[22px]">
              <div className="flex gap-3 items-center">
                Tanggal Pesanan
                <button
                  className={`${
                    sortBy === "date" && "bg-[#CEE5FF] rounded-md p-1"
                  }`}
                  onClick={() => handleSorting("date")}
                >
                  {sortByDate === "desc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </button>
              </div>
            </th>
            <th className="py-[18px] pl-[22px]">
              <div className="flex gap-3 items-center">
                Status
                <button
                  className={`${
                    sortBy === "status" && "bg-[#CEE5FF] rounded-md p-1"
                  }`}
                  onClick={() => handleSorting("status")}
                >
                  {sortByStatus === "desc" ? (
                    <ArrowUpIcon />
                  ) : (
                    <ArrowDownIcon />
                  )}
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {currentBookingList.map((booking) => (
            <tr
              key={booking.ID}
              className="bg-white border-b-[1px] border-b-[#F4F3F7]"
            >
              <td className="py-10 pl-[22px]">
                {userData(booking.UserID)?.Name || (
                  <span className="text-red-600 italic">[Data not found]</span>
                )}
              </td>
              <td className="py-10 pl-[22px]">
                {userData(booking.UserID)?.Email || (
                  <span className="text-red-600 italic">[Data not found]</span>
                )}
              </td>
              <td className="py-10 pl-[22px]">
                <div>
                  <h3 className="font-face-ro text-[#1E1F23]">
                    {officeData(booking.OfficeID)?.Name || (
                      <span className="text-red-600 italic">
                        [Data not found]
                      </span>
                    )}
                  </h3>
                  <h3 className="font-face-ro text-[#77777A]">
                    {officeData(booking.OfficeID)?.Type === "office"
                      ? "Kantor"
                      : officeData(booking.OfficeID)?.Type === "coworking"
                      ? "Co-Working"
                      : ""}
                  </h3>
                </div>
              </td>
              <td className="py-10 pl-[22px]">
                {moment(booking.CreatedAt).format("DD/MM/YYYY")}
              </td>
              <td className="py-10 pl-[22px]">
                <span
                  className={`px-4 py-[6px]  rounded-full font-face-ro-med text-[14px] capitalize ${statusStyle(
                    booking.PaymentStatus,
                  )}`}
                >
                  {bookingStatus(booking.PaymentStatus)}
                </span>
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
          dataLength={bookingData.length}
          pageSize={pageSize}
          onClickPage={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default TotalBooking;
