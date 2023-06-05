import React from "react";
import kantorIcon from "../../assets/img/kantor-icon.png";
import coWorkingIcon from "../../assets/img/co-working-icon.png";
import bookingKantorIcon from "../../assets/img/kantor-booking-icon.png";
import bookingCoWorkingIcon from "../../assets/img/co-working-booking-icon.png";
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from "recharts";
import "./Dashboard.css";

function Dashboard() {
  const dummyData = [
    {
      id: 1,
      hari: `Senin`,
      order: 1000,
      stock: 2000,
    },
    {
      id: 2,
      hari: `Selasa`,
      order: 2000,
      stock: 3000,
    },
    {
      id: 3,
      hari: `Rabu`,
      order: 500,
      stock: 2000,
    },
    {
      id: 4,
      hari: `Kamis`,
      order: 1500,
      stock: 900,
    },
    {
      id: 5,
      hari: `Jumat`,
      order: 300,
      stock: 1000,
    },
    {
      id: 6,
      hari: `Sabtu`,
      order: 3000,
      stock: 4400,
    },
    {
      id: 7,
      hari: `Minggu`,
      order: 200,
      stock: 1000,
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

  return (
    <div className="dashboard">
      <div className="dashboard__content-container flex flex-col gap-6 ">
        <div className="dashboard__content-container__statistik flex gap-4">
          {/* Kantor */}
          <div className="dashboard__card-container shadow-sm">
            <div className="flex flex-col gap-6">
              <img src={kantorIcon} width={50} height={50} alt="icon" />
              <div className="flex flex-col gap-1">
                <h1 className="dashboard__card-container__title font-face-ro-bold">
                  Total Kantor
                </h1>
                <p className="dashboard__card-container__desc font-face-ro">
                  Jumlah kantor saat ini
                </p>
                <p className="dashboard__card-container__count font-face-ro">
                  36
                </p>
              </div>
            </div>
          </div>

          {/* Co-working */}
          <div className="dashboard__card-container shadow-sm">
            <div className="flex flex-col gap-6">
              <img src={coWorkingIcon} width={50} height={50} alt="icon" />
              <div className="flex flex-col gap-1">
                <h1 className="dashboard__card-container__title font-face-ro-bold">
                  Total Co-Working Space
                </h1>
                <p className="dashboard__card-container__desc font-face-ro">
                  Jumlah Co-Working Space saat ini
                </p>
                <p className="dashboard__card-container__count font-face-ro">
                  16
                </p>
              </div>
            </div>
          </div>

          {/* Booking Kantor */}
          <div className="dashboard__card-container shadow-sm">
            <div className="flex flex-col gap-6">
              <img src={bookingKantorIcon} width={50} height={50} alt="icon" />
              <div className="flex flex-col gap-1">
                <h1 className="dashboard__card-container__title font-face-ro-bold">
                  Total Booking
                </h1>
                <p className="dashboard__card-container__desc font-face-ro">
                  Booking kantor saat ini
                </p>
                <p className="dashboard__card-container__count font-face-ro">
                  160 Orang
                </p>
              </div>
            </div>
          </div>

          {/* Booking Co-working */}
          <div className="dashboard__card-container shadow-sm">
            <div className="flex flex-col gap-6">
              <img
                src={bookingCoWorkingIcon}
                width={50}
                height={50}
                alt="icon"
              />
              <div className="flex flex-col gap-1">
                <h1 className="dashboard__card-container__title font-face-ro-bold">
                  Total Booking
                </h1>
                <p className="dashboard__card-container__desc font-face-ro">
                  Booking Co-Working Space hari ini
                </p>
                <p className="dashboard__card-container__count font-face-ro">
                  89 Orang
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard__content-container__activity flex gap-5">
          <div className="dashboard__graph-container shadow-sm flex flex-col gap-3">
            <h1 className="font-face-ro-med">
              Statistik Pesanan Kantor/Co-Working Space
            </h1>
            <div className="button-container font-face-ro-med flex gap-3 text-center">
              <button>Minggu ini</button>
              <button>Bulan ini</button>
              <button>Tahun ini</button>
            </div>
            <div className="graph-content">
              {" "}
              <BarChart width={573} height={381} data={dummyData}>
                <XAxis
                  dataKey="hari"
                  axisLine={false}
                  tick={{ fill: "#697586" }}
                />
                <CartesianGrid
                  stroke="#EEF2F6"
                  horizontal={true}
                  vertical={false}
                />
                <Tooltip />
                <Bar
                  dataKey="order"
                  barSize={32}
                  stackId="stack"
                  fill="#2970FF"
                  tick={null}
                  radius={[0, 0, 0, 0]}
                />
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
            <div className="graph-desc">
              <div className="flex gap-2 items-center">
                <div className="kantor" />
                <p>Kantor</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="coWorking" />
                <p>Co-Working Space</p>
              </div>
            </div>
          </div>
          <div className="dashboard__activity-container shadow-sm flex flex-col gap-6">
            <div className="flex gap-2 justify-between items-center">
              <div className="title-container flex flex-col gap-1">
                <h1 className="font-face-ro-bold">Aktivitas Pengguna</h1>
                <p className="font-face-ro text-justify">
                  Pengguna yang melakukan booking Kantor / Co-Working Space
                </p>
              </div>
              <div className="link-container font-face-ro-bold">
                <p>Lihat Selengkapnya</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {user.map((data, index) => {
                return (
                  <>
                    <div key={index} className="card__user flex">
                      <div className="flex gap-6">
                        <img
                          className="user__image"
                          src={`https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960`}
                        />
                        <div className="flex flex-col gap-2">
                          <h5 className="username font-face-ro-bold">
                            {data.username}
                          </h5>
                          <p className="font-face-ro">
                            Memesan Coworking space{" "}
                            <span className="font-face-ro-bold">
                              {" "}
                              {data.buying}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="font-face-ro flex-grow text-right">
                        {data.date}
                      </p>
                    </div>
                    {index != user.length - 1 ? <hr /> : <></>}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
