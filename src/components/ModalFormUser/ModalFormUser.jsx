import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputFloating from "../InputFloating/InputFloating";
import { CloseIcon } from "../../assets/svg";
import ImgConfirmEdit from "../../assets/img/update-user.png";
import ModalConfirm from "../ModalConfirm/ModalConfirm";

/* eslint-disable react/prop-types */
const ModalFormUser = ({ defaultValues, onClickClose, onClickSubmit }) => {
  const [modalConfirmUpdate, setModalConfirmUpdate] = useState(false);
  const [userData, setUserData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: defaultValues?.name || "",
      email: defaultValues?.email || "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter user name."),
      email: Yup.string().email().required("Please enter email address."),
      password: Yup.string().required("Please enter password."),
    }),
    onSubmit: (values) => {
      setUserData(values);
      handleSubmit();
    },
  });

  const handleSubmit = () => {
    setModalConfirmUpdate(true);
  };

  return (
    <>
      <div className="fixed w-full h-full inset-0 z-50 bg-black/[.15] backdrop-blur-[2px] overflow-auto ">
        <div className="flex h-full justify-center items-center py-8">
          <div className={`w-3/4 bg-white rounded-3xl p-8`}>
            <div className="flex gap-3 justify-between items-center mb-11">
              <h2 className="font-face-ro text-[22px]">Ubah Data Akun</h2>
              <button onClick={onClickClose} type="button">
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-6">
                <InputFloating
                  id="name"
                  type="text"
                  name="name"
                  label="Nama Pengguna"
                  placeholder="Nama Pengguna"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.name && formik.touched.name}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <InputFloating
                  id="email"
                  type="email"
                  name="email"
                  label="Alamat Email"
                  placeholder="Alamat Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.email && formik.touched.email}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <InputFloating
                  id="password"
                  type="text"
                  name="password"
                  label="Password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isError={formik.errors.password && formik.touched.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="mt-1 text-red-500 max-[640px]:text-sm">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="p-4 w-full rounded-xl bg-bg-button font-face-ro text-xl text-white"
              >
                Ubah Akun
              </button>
            </form>
          </div>
        </div>
      </div>
      {modalConfirmUpdate && (
        <ModalConfirm
          image={ImgConfirmEdit}
          message={"Apakah anda yakin untuk mengubah data akun?"}
          onClickBack={() => {
            setModalConfirmUpdate(false);
          }}
          onClickConfirm={() => {
            onClickSubmit(userData);
          }}
        />
      )}
    </>
  );
};

export default ModalFormUser;
