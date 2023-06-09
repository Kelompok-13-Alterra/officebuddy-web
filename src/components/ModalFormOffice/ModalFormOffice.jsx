import React, { useState } from "react";
import moment from "moment";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import InputFloating from "../InputFloating/InputFloating";
import {
  CloseIcon,
  ProjectorIcon,
  SpeakerIcon,
  WaterIcon,
  WhiteboardIcon,
} from "../../assets/svg";
import ModalConfirm from "../ModalConfirm/ModalConfirm";
import ImgDiscard from "../../assets/img/discard.png";

/* eslint-disable react/prop-types */
const ModalFormOffice = ({
  title,
  defaultValues = null,
  onClickClose,
  onClickSubmit,
}) => {
  const [modalConfirmClose, setModalConfirmClose] = useState(false);
  const [facilities, setFacilities] = useState(
    defaultValues?.Facilities?.split(",").filter((element) => element) || [],
  );
  const [payment, setPayment] = useState("BNI VA");

  const formik = useFormik({
    initialValues: {
      officeName: defaultValues?.Name || "",
      address: defaultValues?.Location || "",
      description: defaultValues?.Description || "",
      price: defaultValues?.Price || "",
      capacity: defaultValues?.Capacity || "",
      openTime: defaultValues?.Open || "",
      closeTime: defaultValues?.Close || "",
    },
    validationSchema: Yup.object().shape({
      officeName: Yup.string().required("Please enter office name."),
      address: Yup.string().required("Please enter office address."),
      description: Yup.string().required("Please add description."),
      price: Yup.number().min(1).required("Please enter the price."),
      capacity: Yup.number().min(1).required("Please enter capacity number."),
      openTime: Yup.string().required(),
      closeTime: Yup.string().required(),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const onChangeFacility = (value) => {
    if (facilities.includes(value)) {
      const newData = facilities.filter((item) => item !== value);
      setFacilities(newData);
    } else {
      setFacilities([...facilities, value]);
    }
  };

  const onChangePayment = (value) => {
    if (payment.includes(value)) {
      // const newData = payment.filter((item) => item !== value);
      // setPayment(newData);
      setPayment("");
    } else {
      // setPayment([...payment, value]);
      setPayment(value);
    }
  };

  const handleSubmit = (data) => {
    if (facilities.length < 1) {
      toast.warning("Tambahkan fasilitas");
      return;
    }
    if (payment.length < 1) {
      toast.warning("Tambahkan pembayaran");
      return;
    }
    const officeData = {
      ...(defaultValues?.ID && { id: defaultValues.ID }),
      name: data.officeName,
      description: data.description,
      capacity: data.capacity,
      open: moment(data.openTime, "HH:mm:ss").format("HH:mm:ss"),
      close: moment(data.closeTime, "HH:mm:ss").format("HH:mm:ss"),
      price: data.price,
      location: data.address,
      facilities: facilities.join(","),
      payment: payment,
    };
    console.log("DATA SENT >>>>>>", officeData);
    onClickSubmit(officeData);
  };

  return (
    <>
      <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-auto">
        <div className="flex justify-center items-center py-8">
          <div className={`w-3/4 bg-white rounded-3xl p-8`}>
            <div className="flex gap-3 justify-between items-center mb-11">
              <h2 className="font-face-ro text-[22px]">{title}</h2>
              <button onClick={() => setModalConfirmClose(true)} type="button">
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-6">
                <InputFloating
                  id="officeName"
                  type="text"
                  name="officeName"
                  label="Nama Kantor"
                  placeholder="Nama Kantor"
                  value={formik.values.officeName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={
                    formik.errors.officeName && formik.touched.officeName
                  }
                />
                {formik.errors.officeName && formik.touched.officeName && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.officeName}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <InputFloating
                  id="address"
                  type="text"
                  name="address"
                  label="Alamat"
                  placeholder="Alamat"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.address && formik.touched.address}
                />
                {formik.errors.address && formik.touched.address && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.address}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <InputFloating
                  id="description"
                  type="text"
                  name="description"
                  label="Deskripsi Kantor"
                  placeholder="Deskripsi Kantor"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={
                    formik.errors.description && formik.touched.description
                  }
                />
                {formik.errors.description && formik.touched.description && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.description}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <InputFloating
                  id="price"
                  type="number"
                  name="price"
                  label="Harga"
                  placeholder="Harga"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.price && formik.touched.price}
                />
                {formik.errors.price && formik.touched.price && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.price}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <InputFloating
                  id="capacity"
                  type="number"
                  name="capacity"
                  label="Kapasitas"
                  placeholder="Kapasitas"
                  value={formik.values.capacity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.capacity && formik.touched.capacity}
                />
                {formik.errors.capacity && formik.touched.capacity && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.capacity}
                  </p>
                )}
              </div>

              <div className="flex gap-10 items-center mb-6">
                <InputFloating
                  className={"w-[160px]"}
                  id="openTime"
                  type="time"
                  name="openTime"
                  label="Waktu Buka"
                  placeholder="Waktu Buka"
                  value={formik.values.openTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.openTime && formik.touched.openTime}
                />
                <hr className="w-4 border-2 rounded border-[#44474E]" />
                <InputFloating
                  className={"w-[160px]"}
                  min={formik.values.openTime}
                  id="closeTime"
                  type="time"
                  name="closeTime"
                  label="Waktu Tutup"
                  placeholder="Waktu Tutup"
                  value={formik.values.closeTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.closeTime && formik.touched.closeTime}
                />
              </div>

              <div className="flex gap-10 mb-12">
                <div>
                  <h4 className="font-face-ro text-[#1A1B1E] text-[14px] mb-[10px]">
                    Kelengkapan Fasilitas
                  </h4>
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    <button
                      onClick={() => onChangeFacility("Water Refill")}
                      type="button"
                      className={`px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] ${
                        facilities.includes("Water Refill")
                          ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                          : "border-[#74777F] text-[#44474E]"
                      }`}
                    >
                      <WaterIcon />
                      <span className="font-face-ro text-[14px]">
                        Water Refill
                      </span>
                    </button>
                    <button
                      onClick={() => onChangeFacility("Speaker")}
                      type="button"
                      className={`px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] ${
                        facilities.includes("Speaker")
                          ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                          : "border-[#74777F] text-[#44474E]"
                      }`}
                    >
                      <SpeakerIcon />
                      <span className="font-face-ro text-[14px]">Speaker</span>
                    </button>
                    <button
                      onClick={() => onChangeFacility("Projector")}
                      type="button"
                      className={`px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] ${
                        facilities.includes("Projector")
                          ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                          : "border-[#74777F] text-[#44474E]"
                      }`}
                    >
                      <ProjectorIcon />
                      <span className="font-face-ro text-[14px]">
                        Projector
                      </span>
                    </button>
                    <button
                      onClick={() => onChangeFacility("Whiteboard")}
                      type="button"
                      className={`px-4 py-[6px] flex gap-3 items-center rounded-full border-[1px] ${
                        facilities.includes("Whiteboard")
                          ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                          : "border-[#74777F] text-[#44474E]"
                      }`}
                    >
                      <WhiteboardIcon />
                      <span className="font-face-ro text-[14px]">
                        Whiteboard
                      </span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-face-ro text-[#1A1B1E] text-[14px] mb-[10px]">
                    Pembayaran yang Tersedia
                  </h4>
                  <div className="flex flex-wrap gap-1 max-w-xs">
                    <button
                      onClick={() => onChangePayment("BNI VA")}
                      type="button"
                      className={`px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F] ${
                        payment.includes("BNI VA")
                          ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                          : "border-[#74777F] text-[#44474E]"
                      }`}
                    >
                      <span className="font-face-ro text-[14px]">BNI VA</span>
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="p-4 w-full rounded-xl bg-bg-button font-face-ro text-xl text-white"
              >
                {title}
              </button>
            </form>
          </div>
        </div>
      </div>
      {modalConfirmClose && (
        <ModalConfirm
          image={ImgDiscard}
          message={
            "Data yang dibuat akan hilang apabila anda keluar. Teruskan?"
          }
          onClickBack={() => {
            setModalConfirmClose(false);
          }}
          onClickConfirm={onClickClose}
        />
      )}
    </>
  );
};

export default ModalFormOffice;
