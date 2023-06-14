import React, { useState, useEffect } from "react";
import { ArrowRightIcon, FilterIcon } from "../../assets/svg";
import { Link } from "react-router-dom";
import moment from "moment";
import Pagination from "../../components/Pagination/Pagination";

const dummyOrder = [
  {
    ID: 1,
    Name: "Michael Abraham",
    Email: "mic2332@gmail.com",
    Office: {
      Name: "Canada Office",
      Type: "Co-Working",
    },
    CreatedAt: "2023-06-12T12:12:04.616Z",
    status: false,
  },
  {
    ID: 2,
    Name: "Abraham",
    Email: "abraham@gmail.com",
    Office: {
      Name: "Canada Office",
      Type: "Co-Working",
    },
    CreatedAt: "2023-07-12T12:12:04.616Z",
    status: false,
  },
];

const TotalBooking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {}, []);

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

        <button className="flex items-center gap-3 px-4 py-[10px] bg-white rounded-full border-[1px] border-[#C7C6CA] text-[#5E5E62] font-medium">
          <FilterIcon /> Filters
        </button>
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
          {dummyOrder.map((booking) => (
            <tr
              key={booking.ID}
              className="bg-white border-b-[1px] border-b-[#F4F3F7]"
            >
              <td className="py-10 pl-[22px]">{booking.Name}</td>
              <td className="py-10 pl-[22px]">{booking.Email}</td>
              <td className="py-10 pl-[22px]">
                <div>
                  <h3 className="font-face-ro text-[#1E1F23]">
                    {booking.Office.Name}
                  </h3>
                  <h3 className="font-face-ro text-[#77777A]">
                    {booking.Office.Type}
                  </h3>
                </div>
              </td>
              <td className="py-10 pl-[22px]">
                {moment(booking.CreatedAt).format("DD/MM/YYYY")}
              </td>
              <td className="py-10 pl-[22px]">
                <span className="px-4 py-[6px] bg-[#CEE5FF] rounded-full font-face-ro-med text-[#001D33] text-[14px] capitalize">
                  Menunggu Pembayaran
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
          dataLength={dummyOrder.length}
          pageSize={pageSize}
          onClickPage={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default TotalBooking;
