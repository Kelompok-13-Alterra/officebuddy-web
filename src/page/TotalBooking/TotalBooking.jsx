import React, { useState, useEffect, useMemo } from "react";
import { ArrowRightIcon } from "../../assets/svg";
import { Link } from "react-router-dom";
import moment from "moment";
import Pagination from "../../components/Pagination/Pagination";
import axios from "axios";
import { toast } from "react-toastify";

const TotalBooking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pageSize = 10;

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
      setBookingData(bookingData);
    } catch (error) {
      console.log("GET BOOKING DATA ERROR >>>>", error);
      toast.error("GET BOOKING DATA ERROR");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooking();
  }, []);

  const currentBookingList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return bookingData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, bookingData]);

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
            <th className="py-[18px] pl-[22px]">Tanggal Pesanan</th>
            <th className="py-[18px] pl-[22px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <h1>Loading...</h1>}
          {currentBookingList.map((booking) => (
            <tr
              key={booking.ID}
              className="bg-white border-b-[1px] border-b-[#F4F3F7]"
            >
              <td className="py-10 pl-[22px]">
                {booking.User?.Name || "Michael"}
              </td>
              <td className="py-10 pl-[22px]">
                {booking.User?.Email || "mic2332@gmail.com"}
              </td>
              <td className="py-10 pl-[22px]">
                <div>
                  <h3 className="font-face-ro text-[#1E1F23]">
                    {booking.Office.Name || "Wellspace"}
                  </h3>
                  <h3 className="font-face-ro text-[#77777A]">
                    {booking.Office.Type || "Office"}
                  </h3>
                </div>
              </td>
              <td className="py-10 pl-[22px]">
                {moment(booking.CreatedAt).format("DD/MM/YYYY")}
              </td>
              <td className="py-10 pl-[22px]">
                <span className="px-4 py-[6px] bg-[#CEE5FF] rounded-full font-face-ro-med text-[#001D33] text-[14px] capitalize">
                  {!booking.status ? "Menunggu Pembayaran" : "Selesai"}
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
