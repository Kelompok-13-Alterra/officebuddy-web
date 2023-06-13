import React from "react";
import { Link } from "react-router-dom";
import UsersIcon from "../../assets/img/users-icon.png";
import CalendarIcon from "../../assets/img/calendar-icon.png";
import RatingIcon from "../../assets/img/star-icon.png";
import ProfileImg from "../../assets/img/Kantor.png";
import ProfileImg2 from "../../assets/img/Ellipse_imgman.png";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import RatingStar from "../../components/RatingStar/RatingStar";

const chartData = [
  { name: "Tidak Aktif", value: 350 },
  { name: "Aktif", value: 650 },
];
const COLORS = ["#D6E3FF", "#0074E5"];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="font-bold font-face-ro"
      x={x}
      y={y}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)} %`}
    </text>
  );
};

const DatabaseUser = () => {
  return (
    <div className="p-8 bg-[#FDFBFF]">
      <div className="grid grid-cols-3 gap-4 mb-[34px]">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="mb-4">
            <img
              className="w-[50px] h-[50px]"
              src={UsersIcon}
              alt="Office Icon"
            />
          </div>
          <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
            Total Pengguna
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Lihat data pengguna
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">510 Pengguna</h1>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="mb-4">
            <img
              className="w-[50px] h-[50px]"
              src={CalendarIcon}
              alt="Office Icon"
            />
          </div>
          <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
            Total Booking
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Total Pengguna booking pada hari ini
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">150 Orang</h1>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="mb-4">
            <img
              className="w-[50px] h-[50px]"
              src={RatingIcon}
              alt="Office Icon"
            />
          </div>

          <h3 className="mb-1 font-face-ro-med text-[#44474E] leading-6">
            Penilaian
          </h3>
          <p className="mb-1 font-face-ro text-[12px] text-[#8E9099] leading-4">
            Penilaian Co-Working Space
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">
            16 Penilaian Terbaru
          </h1>
        </div>
      </div>

      <div className="flex gap-9">
        <div className="basis-3/5">
          <div className="p-6">
            <div className="flex gap-2 items-center justify-between mb-5">
              <div>
                <h2 className="font-face-ro font-semibold mb-1">
                  Pebandingan Data Pengguna Aktif dan Tidak Aktif
                </h2>
                <p className="font-face-ro text-[#46474A]">
                  Lihat detail data pengguna
                </p>
              </div>
              <Link
                to="/database-user/total-user"
                className="font-face-ro font-semibold text-[#0074E5]"
              >
                Lihat Semua
              </Link>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <div className="w-72 h-72">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      startAngle={-270}
                      endAngle={90}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div>
                <div className="flex gap-5 items-center mb-5">
                  <div className="bg-[#0074E5] w-[30px] h-[30px] shrink-0"></div>
                  <h3 className="font-face-ro font-bold">Aktif</h3>
                </div>
                <div className="flex gap-5 items-center">
                  <div className="bg-[#D6E3FF] w-[30px] h-[30px] shrink-0"></div>
                  <h3 className="font-face-ro font-bold">Tidak Aktif</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex gap-2 items-center justify-between mb-5">
              <div>
                <h2 className="font-face-ro font-semibold mb-1">
                  Penilaian Pembeli
                </h2>
                <p className="font-face-ro text-[#46474A]">
                  Lihat penilaian pembeli
                </p>
              </div>
              <Link
                to="/database-user/user-rating"
                className="font-face-ro font-semibold text-[#0074E5]"
              >
                Lihat Semua
              </Link>
            </div>

            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                  <img src={ProfileImg2} alt="Profile" />
                </div>
                <div className="grow">
                  <div className="flex gap-2 items-center justify-between mb-2">
                    <h3 className="font-bold text-base">Michael Abraham</h3>
                    <p className="font-face-ro text-sm text-[#475467]">
                      2 Jam yang lalu
                    </p>
                  </div>
                  <div className="flex gap-1 mb-2">
                    <RatingStar rating={5} />
                  </div>
                  <p className="mb-2 text-sm text-[#475467] font-face-ro">
                    Menilai Bintang 5 pada <b>Wellspace</b>
                  </p>
                </div>
              </div>
              <hr />
            </div>
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                  <img src={ProfileImg} alt="Profile" />
                </div>
                <div className="grow">
                  <div className="flex gap-2 items-center justify-between mb-2">
                    <h3 className="font-bold text-base">Irene Store</h3>
                    <p className="font-face-ro text-sm text-[#475467]">
                      Kemarin
                    </p>
                  </div>
                  <div className="flex gap-1 mb-2">
                    <RatingStar rating={4} />
                  </div>
                  <p className="mb-2 text-sm text-[#475467] font-face-ro">
                    Menilai Bintang 4 pada <b>Wellspace</b>
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="basis-2/5 p-6">
          <div className="flex gap-2 items-center justify-between mb-6">
            <div>
              <h2 className="font-face-ro font-semibold mb-1">Data Pesanan</h2>
              <p className="font-face-ro text-[#46474A]">
                Lihat Detail Pesanan Pembeli
              </p>
            </div>
            <Link
              to="/database-user/total-booking"
              className="font-face-ro font-semibold text-[#0074E5]"
            >
              Lihat Semua
            </Link>
          </div>

          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                <img src={ProfileImg2} alt="Profile" />
              </div>
              <div className="grow">
                <div className="flex gap-2 items-center justify-between mb-2">
                  <h3 className="font-bold text-base">Michael Abraham</h3>
                  <p className="font-face-ro text-sm text-[#475467]">Kemarin</p>
                </div>
                <h3 className="font-face-ro">
                  Memesan <span className="font-bold">Wellspace</span>
                </h3>
                <p className="mb-2 text-sm font-face-ro">Co-Working Space</p>
                <p className="font-face-ro-med bg-[#44474E1F] rounded-full text-sm text-[#1a1b1ea3] px-2 py-1 inline-block">
                  Selesai
                </p>
              </div>
            </div>
            <hr />
          </div>

          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                <img src={ProfileImg} alt="Profile" />
              </div>
              <div className="grow">
                <div className="flex gap-2 items-center justify-between mb-2">
                  <h3 className="font-bold text-base">Irene Store</h3>
                  <p className="font-face-ro text-sm text-[#475467]">Kemarin</p>
                </div>
                <h3 className="font-face-ro">
                  Memesan <span className="font-bold">Wellspace</span>
                </h3>
                <p className="mb-2 text-sm font-face-ro">Co-Working Space</p>
                <p className="font-face-ro-med bg-[#44474E1F] rounded-full text-sm text-[#1a1b1ea3] px-2 py-1 inline-block">
                  Selesai
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseUser;
