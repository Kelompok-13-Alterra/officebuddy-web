import React, { useState } from "react";
import kantorIcon from "../../assets/img/kantor-icon.png";
import LogoBank from "../../assets/img/logo-bank-bri.png";
import CircleDollar from "../../assets/img/circle-dollar.png";
import CircleMoney from "../../assets/img/circle-money.png";
import NavbarDashboard from "../../components/DahsboardNavbar/NavbarDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, YAxis } from "recharts";
import "./Pendapatan.css";

function Pendapatan() {
  const link = localStorage.getItem("activelink");
  const [isOpen, setIsOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(link);

  const handleLinkclick = (link) => {
    setClickedMenu(link);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dummyData = [
    {
      id: 1,
      hari: `Jan`,
      order: 1000,
      stock: 2000,
    },
    {
      id: 2,
      hari: `Feb`,
      order: 2000,
      stock: 3000,
    },
    {
      id: 3,
      hari: `Mar`,
      order: 500,
      stock: 2000,
    },
    {
      id: 4,
      hari: `April`,
      order: 1500,
      stock: 900,
    },
    {
      id: 5,
      hari: `Mei`,
      order: 300,
      stock: 1000,
    },
    {
      id: 6,
      hari: `Jun`,
      order: 3000,
      stock: 4400,
    },
    {
      id: 7,
      hari: `Jul`,
      order: 200,
      stock: 1000,
    },
    {
      id: 8,
      hari: `Aug`,
      order: 200,
      stock: 1100,
    },
    {
      id: 9,
      hari: `Sep`,
      order: 200,
      stock: 2000,
    },
    {
      id: 10,
      hari: `Oct`,
      order: 200,
      stock: 1600,
    },
    {
      id: 11,
      hari: `Nov`,
      order: 200,
      stock: 3000,
    },
    {
      id: 12,
      hari: `Des`,
      stock: 6000,
    },
  ];

  const user = [
    {
      image: kantorIcon,
      username: "Farhan",
      buying: "Indihome",
      date: "2 Jam yang lalu",
    },
    {
      image: kantorIcon,
      username: "Rajo",
      buying: "Wellspace",
      date: "3 Jam yang lalu",
    },
    {
      image: kantorIcon,
      username: "Faizal",
      buying: "Go-jek",
      date: "4 Jam yang lalu",
    },
    {
      image: kantorIcon,
      username: "Udin",
      buying: "Google",
      date: "5 Jam yang lalu",
    },
    {
      image: kantorIcon,
      username: "Komang",
      buying: "Orange",
      date: "6 Jam yang lalu",
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

  return (
    <div className="flex">
      <div className="pendapatan flex flex-col gap-8 w-full ">
        {/* card */}
        <div className="pendapatan__content-div flex justify-between ps-10 gap-5">
          <div className="card__pendapatan shadow-sm ps-6 pt-6">
            <img src={CircleDollar} alt="circle-dollar" />
            <div className="font-face-ro-med pt-4">
              <p>Pendapatan Hari Ini</p>
            </div>
            <div className="font-face-ro">
              <p className="text-slate-400">Jumlah pendapatan hari ini</p>
            </div>
            <div>
              <p>Rp.300.000</p>
            </div>
          </div>
          <div className="card__pendapatan shadow-sm ps-6 pt-6">
            <img src={CircleMoney} alt="circle-money" />
            <div className="font-face-ro-med  pt-4">
              <p>Total Pendapatan</p>
            </div>
            <div className="font-face-ro">
              <p className="text-slate-400">
                Jumlah pendapatan secara keseluruhan
              </p>
            </div>
            <div>
              <p>Rp.160.000,00</p>
            </div>
          </div>
        </div>
        {/* end card */}

        {/* Working */}
        <div className="pendapatan__working flex ps-10 gap-20">
          {/* pendapatan-kantor */}
          <div className="pendapatan__kantor">
            <div className="">
              <div className="block">
                <div className="flex justify-between h-24">
                  <div className="relative">
                    <button
                      className="bg-white-300 text-black font-semibold py-2 px-4 rounded inline-flex items-center"
                      onClick={toggleDropdown}
                    >
                      <span>Pendapatan Untuk Kantor</span>
                      <svg
                        className="fill-current h-4 w-4 ml-2"
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
                      <div className=" bg-white rounded-md ">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        >
                          Pendapatan Untuk Co-Working Space
                        </a>
                      </div>
                    )}
                    <div className="ps-4">
                      <p>Rp.60.000,00</p>
                    </div>
                  </div>
                  <div className="button-container font-face-ro-med flex gap-3 text-center">
                    <button>Minggu ini</button>
                  </div>
                </div>

                {/* Bar */}
                <div className="graph-content mt-10">
                  {" "}
                  <BarChart width={780} height={381} data={dummyData}>
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
                      dataKey="stock"
                      barSize={32}
                      stackId="stack"
                      fill="#84ADFF"
                      tick={null}
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
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
              <div className="metode__pembayaran mt-16 px-5 shadow text-center ms-4">
                <div className="box_pembayaran flex justify-between border-b-2">
                  <div className="font-face-ro-med">
                    <p>Metode Pembayaran</p>
                  </div>
                  <div className="font-face-ro-med">
                    <p>Total Transaksi</p>
                  </div>
                </div>
                <div className="pt-4">
                  {pay.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="pb-4">
                          <div className="flex">
                            <img src={data.image} alt="logoBRI" />
                            <div className="ps-3">
                              <p>{data.paragraf}</p>
                            </div>
                            <div className="ps-[420px]">
                              <p>{data.harga}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* end metode pembayaran */}
            </div>
          </div>
          {/* end pendapatan kantor */}

          {/* card-pemesanan */}
          <div className="dashboard__activity-container shadow-sm flex flex-col gap-6">
            <div className="flex gap-2 justify-between items-center">
              <div className="title-container flex flex-col gap-1">
                <h1 className="font-face-ro-bold">Pemesanan Terakhir</h1>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {user.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="card__user flex justify-between w-[300px]">
                      <div className="flex gap-6">
                        <img
                          className="user__image h-10 w-10 shrink-0 rounded-full bg-gray-300"
                          src={`https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=200`}
                        />
                        <div className="flex flex-col gap-2">
                          <h5 className="username font-face-ro-bold">
                            {data.username}
                          </h5>
                          <p className="font-face-ro text-xs">
                            Memesan Coworking space{" "}
                            <span className="font-face-ro-bold">
                              {" "}
                              {data.buying}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="font-face-ro text-right text-xs">
                        {data.date}
                      </p>
                    </div>
                    {index != user.length - 1 ? <hr /> : <></>}
                  </div>
                );
              })}
            </div>
            <div className="pagination__text mt-4 ">
              <p className="font-face-ro">Menampilkan 3 dari 30 Data</p>
            </div>
          </div>
          {/* end card-pemesanan */}
        </div>
        {/* end working */}
      </div>
    </div>
  );
}

export default Pendapatan;
