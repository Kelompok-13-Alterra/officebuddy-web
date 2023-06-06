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
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const ModalFormCoWorking = ({
  title,
  onClickClose,
  onClickSubmit,
  defaultValues,
}) => {
  const [modalConfirmClose, setModalConfirmClose] = useState(false);
  const [facilities, setFacilities] = useState(defaultValues?.facilities || []);
  const [payment, setPayment] = useState(defaultValues?.payment || []);

  const formik = useFormik({
    initialValues: {
      coworkingName: defaultValues?.name || "",
      address: defaultValues?.address || "",
      description: defaultValues?.description || "",
      price: defaultValues?.price || "",
      capacity: defaultValues?.capacity || "",
      openTime: defaultValues?.open || "",
      closeTime: defaultValues?.close || "",
    },
    validationSchema: Yup.object().shape({
      coworkingName: Yup.string().required("Please enter office name."),
      address: Yup.string().required("Please enter office address."),
      description: Yup.string().required("Please enter office description."),
      price: Yup.number().required("Please enter office price."),
      capacity: Yup.number().required("Please enter office capacity."),
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
      toast.warning("Tambahkan Fasilitas");
      return;
    }
    if (payment.length < 1) {
      toast.warning("Tambahkan Pembayaran");
      return;
    }
    const officeData = {
      ...(defaultValues?.id && { id: defaultValues.id }),
      name: data.coworkingName,
      address: data.address,
      description: data.description,
      price: data.price,
      capacity: data.capacity,
      open: data.openTime,
      close: data.closeTime,
      facilities: facilities,
      payment: payment,
    };
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
                  id="coworkingName"
                  type="text"
                  name="coworkingName"
                  label="Nama Co-working Space"
                  placeholder="Nama Co-working Space"
                  value={formik.values.coworkingName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={
                    formik.errors.coworkingName && formik.touched.coworkingName
                  }
                />
                {formik.errors.coworkingName &&
                  formik.touched.coworkingName && (
                    <p className="mt-1 text-red-500 max-[640px]:text-sm">
                      {formik.errors.coworkingName}
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
                  label="Deskripsi"
                  placeholder="Deskripsi"
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

export default ModalFormCoWorking;
