import React, { useState, useEffect } from "react";
import axios from "axios";
import LogoBank from "../../assets/img/logo-bank-bri.png";
import CircleDollar from "../../assets/img/circle-dollar.png";
import CircleMoney from "../../assets/img/circle-money.png";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";
import { numberWithCommas } from "../../config/utils/numberWithCommas";
import Pagination from "../../components/Pagination/Pagination";
import "./Pendapatan.css";

function Pendapatan() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [allRevenue, setAllRevenue] = useState();
  const [todayRevenue, setTodayRevenue] = useState();
  const [transaction, setTransaction] = useState();
  const pageSize = 5;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getRevenue = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/admin/revenue-widget",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setAllRevenue(res.data.data.TotalAllRevenue);
      setTodayRevenue(res.data.data.TotalTodayRevenue);
    } catch (error) {
      toast.error(`Gagal mendapatkan data revenue: ${error.message}`);
    }
  };

  const getTransaction = async (limit = 5, page = 1) => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        `https://api.officebuddy.space/api/v1/transaction/last?limit=${limit}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res);
      setTransaction(res.data.data);
    } catch (error) {
      toast.error(`Gagal mendapatkan data transaksi: ${error.message}`);
    }
  };

  const dummyData = [
    {
      id: 1,
      hari: `Jan`,
      Pendapatan: 2000,
    },
    {
      id: 2,
      hari: `Feb`,
      Pendapatan: 3000,
    },
    {
      id: 3,
      hari: `Mar`,
      Pendapatan: 2000,
    },
    {
      id: 4,
      hari: `April`,
      Pendapatan: 900,
    },
    {
      id: 5,
      hari: `Mei`,
      Pendapatan: 1000,
    },
    {
      id: 6,
      hari: `Jun`,
      Pendapatan: 4400,
    },
    {
      id: 7,
      hari: `Jul`,
      Pendapatan: 1000,
    },
    {
      id: 8,
      hari: `Aug`,
      Pendapatan: 1100,
    },
    {
      id: 9,
      hari: `Sep`,
      Pendapatan: 2000,
    },
    {
      id: 10,
      hari: `Oct`,
      Pendapatan: 1600,
    },
    {
      id: 11,
      hari: `Nov`,
      Pendapatan: 3000,
    },
    {
      id: 12,
      hari: `Des`,
      Pendapatan: 6000,
    },
  ];

  const pay = [
    {
      image: LogoBank,
      paragraf: "Virtual Account - BRI",
      harga: "Rp.120.000",
    },
    {
      image: LogoBank,
      paragraf: "Virtual Account - BRI",
      harga: "Rp.120.000",
    },
    {
      image: LogoBank,
      paragraf: "Virtual Account - BRI",
      harga: "Rp.120.000",
    },
    {
      image: LogoBank,
      paragraf: "Virtual Account - BRI",
      harga: "Rp.120.000",
    },
  ];

  useEffect(() => {
    getRevenue();
  }, []);

  useEffect(() => {
    getTransaction(pageSize, currentPage);
  }, [currentPage]);

  return (
    <div className="pendapatan p-8 flex flex-col gap-8">
      {/* card */}
      <div className="pendapatan__content-div flex gap-4">
        <div className="card__pendapatan shadow-sm p-6 grow">
          <img src={CircleDollar} alt="circle-dollar" />

          <h3 className="mb-1 mt-4 font-face-ro-med text-[#44474E] leading-6">
            Pendapatan Hari Ini
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Jumlah pendapatan hari ini
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">
            Rp. {numberWithCommas(todayRevenue)}
          </h1>
        </div>

        <div className="card__pendapatan shadow-sm p-6 grow">
          <img src={CircleMoney} alt="circle-money" />

          <h3 className="mb-1 mt-4 font-face-ro-med text-[#44474E] leading-6">
            Total Pendapatan
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Jumlah pendapatan secara keseluruhan
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">
            Rp. {numberWithCommas(allRevenue)}
          </h1>
        </div>
      </div>
      {/* end card */}

      {/* Working */}
      <div className="pendapatan__working flex gap-8 w-full">
        {/* pendapatan-kantor */}
        <div className="pendapatan__kantor w-[60%]">
          <div className="p-4">
            <div className="flex justify-between">
              <div>
                <button
                  className="bg-white-300 text-black font-semibold mb-4 rounded inline-flex items-center"
                  onClick={toggleDropdown}
                >
                  <span className="text-start">Pendapatan Untuk Kantor</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="bg-white rounded-md mb-4">
                    <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-start">
                      Pendapatan Untuk Co-Working Space
                    </button>
                  </div>
                )}
                <p className="font-face-ro text-[24px] leading-8">
                  Rp.60.000,00
                </p>
              </div>
              <div className="button-container font-face-ro-med flex gap-3 text-center">
                <button className="rounded-full">Minggu ini</button>
              </div>
            </div>

            {/* Bar */}
            <div className="graph-content mt-8 w-full">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={dummyData}>
                  <XAxis
                    dataKey="hari"
                    axisLine={false}
                    tick={{ fill: "#697586" }}
                  />
                  <YAxis axisLine={false} />
                  <CartesianGrid
                    stroke="#EEF2F6"
                    horizontal={true}
                    vertical={false}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="Pendapatan"
                    barSize={32}
                    stackId="stack"
                    fill="#84ADFF"
                    tick={null}
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              <style>
                {`
                  .recharts-cartesian-axis-tick-line {
                    display: none;
                  }
                `}
              </style>
            </div>
            {/* end bar */}
          </div>

          {/* metode pembayaran */}
          <div className="metode__pembayaran mt-6 text-center">
            <div className="box_pembayaran shadow bg-[#F9F9FC] px-6 py-2 flex justify-between">
              <div className="font-face-ro-med">
                <p>Metode Pembayaran</p>
              </div>
              <div className="font-face-ro-med">
                <p>Total Transaksi</p>
              </div>
            </div>
            <div className="px-6 my-4">
              {pay.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-2 py-2"
                  >
                    <div className="flex">
                      <img
                        src={data.image}
                        alt="logoBRI"
                        className="object-contain object-center"
                      />
                      <div className="ms-3">
                        <p>{data.paragraf}</p>
                      </div>
                    </div>
                    <div className="ms-3">
                      <p className="text-[#74777F] font-face-ro font-semibold">
                        {data.harga}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* end metode pembayaran */}
        </div>
        {/* end pendapatan kantor */}

        {/* card-pemesanan */}
        <div className="dashboard__activity-container grow shadow-sm flex flex-col gap-6">
          <div className="flex gap-2 justify-between items-center">
            <div className="title-container flex flex-col gap-1">
              <h1 className="font-face-ro-bold">Pemesanan Terakhir</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {transaction?.map((data, index) => {
              return (
                <div key={index}>
                  <div className="card__user flex justify-between">
                    <div className="flex gap-4 align-top w-full">
                      <img
                        className="user__image h-10 w-10 shrink-0 rounded-full bg-gray-300 object-cover"
                        style={{ width: "46px", height: "46px" }}
                        src={`https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=200`}
                      />
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-2 justify-between">
                          <h5 className="username font-face-ro-bold">
                            {data.BuyerName}
                          </h5>
                          <p className="font-face-ro text-right text-sm">
                            {data.Date}
                          </p>
                        </div>

                        <p className="font-face-ro text-sm">
                          {data.Description}
                        </p>
                        <p className="font-face-ro-bold text-[#16B364]">
                          {"+ "}
                          {numberWithCommas(data.Revenue)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index != transaction.length - 1 ? <hr /> : <></>}
                </div>
              );
            })}
          </div>
          {transaction && (
            <div className="flex flex-wrap justify-end items-center gap-5">
              <span className="font-face-ro text-[#BBBBBB]">
                Menampilkan data dari {1 + (currentPage - 1) * pageSize}-
                {currentPage * pageSize}
              </span>
              <Pagination
                currentPage={currentPage}
                dataLength={15}
                pageSize={pageSize}
                onClickPage={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
        {/* end card-pemesanan */}
      </div>
      {/* end working */}
    </div>
  );
}

export default Pendapatan;
