import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersIcon from "../../assets/img/users-icon.png";
import RatingIcon from "../../assets/img/star-icon.png";
import DefaultAva from "../../assets/img/user_default.jpg";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import RatingStar from "../../components/RatingStar/RatingStar";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import "moment/dist/locale/id";
import _ from "lodash";

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
      fill="white"
      x={x}
      y={y}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${percent > 0 ? (percent * 100).toFixed(0) + " %" : ""}`}
    </text>
  );
};

const DatabaseUser = () => {
  const [widgetData, setWidgetData] = useState({});
  const [bookingList, setBookingList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [officeList, setOfficeList] = useState([]);
  const [ratingList, setRatingList] = useState([]);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [ratingLoading, setRatingLoading] = useState(false);

  const getWidgetData = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const res = await axios.get(
        "https://api.officebuddy.space/api/v1/admin/user-widget",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const widgetData = res.data.data;
      setWidgetData(widgetData);
    } catch (error) {
      console.log("GET WIDGET DATA ERROR >>>>", error);
      toast.error("GET WIDGET DATA ERROR");
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
    setBookingLoading(true);
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
      setBookingList(bookingData);
    } catch (error) {
      console.log("GET BOOKING DATA ERROR >>>>", error);
      toast.error("GET BOOKING DATA ERROR");
    } finally {
      setBookingLoading(false);
    }
  };

  const getRatings = async () => {
    setRatingLoading(true);
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
    } finally {
      setRatingLoading(false);
    }
  };

  useEffect(() => {
    getWidgetData();
    getUsers();
    getOffices();
    getBooking();
    getRatings();
  }, []);

  const userData = (id) => {
    return userList.find((user) => user.ID === id);
  };

  const officeData = (id) => {
    return officeList.find((office) => office.ID === id);
  };

  const lastBooking = () => {
    const bookingData = bookingList.slice(-5, bookingList.length);
    return (
      _.orderBy(
        bookingData?.map((booking) => {
          return {
            id: booking.ID,
            userData: userData(booking.UserID),
            officeData: officeData(booking.OfficeID),
            date: booking.CreatedAt,
            status: booking.Status,
          };
        }),
        "date",
        "desc",
      ) || []
    );
  };

  const lastRating = () => {
    const ratingData = ratingList.slice(-4, ratingList.length);
    return _.orderBy(ratingData, "CreatedAt", "desc") || [];
  };

  const chartData = [
    { name: "Tidak Aktif", value: 0 },
    { name: "Aktif", value: widgetData?.TotalUser || 0 },
  ];

  return (
    <div className="p-8 bg-[#FDFBFF]">
      <div className="grid grid-cols-2 gap-4 mb-[34px]">
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
          <h1 className="font-face-ro text-[24px] leading-8">
            {widgetData.TotalUser || "0"} Pengguna
          </h1>
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
            Penilaian Kantor dan Co-Working Space
          </p>
          <h1 className="font-face-ro text-[24px] leading-8">
            {widgetData.TotalRating || "0"} Penilaian Terbaru
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-9">
        <div className="basis-3/5">
          <div className="p-6">
            <div className="flex gap-2 items-center justify-between mb-5">
              <div>
                <h2 className="font-face-ro font-semibold mb-1">
                  Pebandingan Data Pengguna Aktif dan Tidak Aktif
                </h2>
                <p className="font-face-ro text-[#46474A] text-sm">
                  Lihat detail data pengguna
                </p>
              </div>
              <Link
                to="/database-user/total-user"
                className="font-face-ro font-semibold text-[#0074E5] text-end text-sm"
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
                <p className="font-face-ro text-[#46474A] text-sm">
                  Lihat penilaian pembeli
                </p>
              </div>
              <Link
                to="/database-user/user-rating"
                className="font-face-ro font-semibold text-[#0074E5] text-end text-sm"
              >
                Lihat Semua
              </Link>
            </div>

            {ratingLoading ? (
              <h1>Loading...</h1>
            ) : (
              lastRating().map((rating) => (
                <div key={rating.ID} className="mb-4">
                  <div className="flex gap-2 mb-4">
                    <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                      <img src={DefaultAva} alt="Profile" />
                    </div>
                    <div className="grow">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <h3 className="font-bold text-base">
                          {userData(rating.UserID)?.Name || "Unknown"}
                        </h3>
                        <p className="font-face-ro text-sm text-[#475467]">
                          {moment(rating.CreatedAt).fromNow()}
                        </p>
                      </div>
                      <div className="flex gap-1 mb-2">
                        <RatingStar rating={rating.Star} />
                      </div>
                      <p className="mb-2 text-sm text-[#475467] font-face-ro">
                        Menilai Bintang {rating.Star} pada{" "}
                        <b>{officeData(rating.OfficeID)?.Name || "Unknown"}</b>
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            )}
          </div>
        </div>

        <div className="basis-2/5 p-6">
          <div className="flex gap-2 items-center justify-between mb-6">
            <div>
              <h2 className="font-face-ro font-semibold mb-1">Data Pesanan</h2>
              <p className="font-face-ro text-[#46474A] text-sm">
                Lihat Detail Pesanan Pembeli
              </p>
            </div>
            <Link
              to="/database-user/total-booking"
              className="font-face-ro font-semibold text-[#0074E5] text-end text-sm"
            >
              Lihat Semua
            </Link>
          </div>
          {bookingLoading ? (
            <h1>Loading...</h1>
          ) : (
            lastBooking().map((booking) => (
              <div key={booking.id} className="mb-4">
                <div className="flex gap-2 mb-4">
                  <div className="rounded-full overflow-hidden w-[46px] h-[46px]">
                    <img src={DefaultAva} alt="Profile" />
                  </div>
                  <div className="grow">
                    <div className="flex gap-2 items-center justify-between mb-2">
                      <h3 className="font-bold text-base">
                        {booking.userData?.Name || "Unknown"}
                      </h3>
                      <p className="font-face-ro text-sm text-[#475467]">
                        {moment(booking.date).locale("id").fromNow()}
                      </p>
                    </div>
                    <h3 className="font-face-ro text-sm">
                      Memesan{" "}
                      <span className="font-bold">
                        {booking.officeData?.Name || "Unknown"}
                      </span>
                    </h3>
                    <p className="mb-2 font-face-ro text-[#666666]  text-[13px]">
                      {booking.officeData?.Type === "office"
                        ? "Kantor"
                        : booking.officeData?.Type === "coworking"
                        ? "Co-Working"
                        : ""}
                    </p>
                    <p
                      className={`font-face-ro-med rounded-full text-[13px] px-2 py-1 inline-block ${
                        booking.status
                          ? "bg-[#44474E1F] text-[#1a1b1ea3]"
                          : "bg-[#CEE5FF] text-[#001D33]"
                      }`}
                    >
                      {booking.status ? "Selesai" : "Menunggu Pembayaran"}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DatabaseUser;
