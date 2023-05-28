import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
const ModalFormOffice = ({ onClickClose, onClickSubmit }) => {
  const [modalConfirmClose, setModalConfirmClose] = useState(false);
  const [facilities, setFacilities] = useState([]);
  const [payment, setPayment] = useState([]);

  const formik = useFormik({
    initialValues: {
      officeName: "",
      address: "",
      openTime: "",
      closeTime: "",
    },
    validationSchema: Yup.object().shape({
      officeName: Yup.string().required("Please enter office name."),
      address: Yup.string().required("Please enter office address."),
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
      const newData = payment.filter((item) => item !== value);
      setPayment(newData);
    } else {
      setPayment([...payment, value]);
    }
  };

  const handleSubmit = (data) => {
    if (facilities.length < 1) {
      alert("ISI FASILITAS");
      return;
    }
    if (payment.length < 1) {
      alert("ISI PEMBAYARAN");
      return;
    }
    console.log("CREATED >>>>>>", data);
    onClickSubmit();
  };

  return (
    <>
      <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-hidden flex justify-center items-center">
        <div className={`w-3/4 bg-white rounded-3xl p-8`}>
          <div className="flex gap-3 justify-between items-center mb-11">
            <h2 className="font-face-ro text-[22px]">Tambah Kantor</h2>
            <button onClick={() => setModalConfirmClose(true)} type="button">
              <CloseIcon />
            </button>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-8">
              <InputFloating
                id="officeName"
                type="text"
                name="officeName"
                label="Nama Kantor"
                placeholder="Nama Kantor"
                value={formik.values.officeName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={formik.errors.officeName && formik.touched.officeName}
              />
            </div>

            <div className="mb-8">
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
            </div>
            <div className="flex gap-10 items-center mb-8">
              <InputFloating
                className={"w-[150px]"}
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
                className={"w-[150px]"}
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
                    <span className="font-face-ro text-[14px]">Projector</span>
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
                    <span className="font-face-ro text-[14px]">Whiteboard</span>
                  </button>
                </div>
              </div>

              <div>
                <h4 className="font-face-ro text-[#1A1B1E] text-[14px] mb-[10px]">
                  Pembayaran yang Tersedia
                </h4>
                <div className="flex flex-wrap gap-1 max-w-xs">
                  <button
                    onClick={() => onChangePayment("BRI VA")}
                    type="button"
                    className={`px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F] ${
                      payment.includes("BRI VA")
                        ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                        : "border-[#74777F] text-[#44474E]"
                    }`}
                  >
                    <span className="font-face-ro text-[14px]">BRI VA</span>
                  </button>
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
                  <button
                    onClick={() => onChangePayment("BRI TF")}
                    type="button"
                    className={`px-4 py-[6px] flex justify-center items-center rounded-full border-[1px] border-[#74777F] ${
                      payment.includes("BRI TF")
                        ? "bg-[#CEE5FF] border-[#CEE5FF] text-[#001D33] font-semibold"
                        : "border-[#74777F] text-[#44474E]"
                    }`}
                  >
                    <span className="font-face-ro text-[14px]">BRI TF</span>
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="p-4 w-full rounded-xl bg-bg-button font-face-ro text-xl text-white"
            >
              Tambah Kantor
            </button>
          </form>
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
