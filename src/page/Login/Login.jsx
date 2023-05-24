import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../assets/img/office-buddy-logo.png";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter an email address"),
      password: Yup.string().required("Please enter your password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-[#CEE5FF] h-screen flex justify-center items-center p-12">
      <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-md w-full sm:w-auto">
        <img className="w-[150px] mb-10" src={Logo} alt="logo" />
        <h1 className="text-4xl mb-10 font-face-ro">Login Admin</h1>
        <div className="w-full">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4 w-full">
              <div className="relative">
                <input
                  className={`w-full sm:w-[400px] h-14 p-4 rounded block border border-gray-400 focus:outline-[#74777F] placeholder-transparent peer ${
                    formik.errors.email &&
                    formik.touched.email &&
                    "border-red-500 focus:outline-red-500"
                  }`}
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="mt-1 text-red-500">{formik.errors.email}</p>
                )}

                <label
                  htmlFor="email"
                  className={`absolute px-1 transition-all bg-white text-sm text-gray-400 left-3 -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:-top-3 peer-focus:text-slate-600  ${
                    formik.errors.email &&
                    formik.touched.email &&
                    "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500"
                  }`}
                >
                  Email
                </label>
              </div>
            </div>
            <div className="mb-4 w-full">
              <div className="relative">
                <input
                  className={`w-full sm:w-[400px] h-14 p-4 rounded block border border-gray-400 focus:outline-[#74777F] placeholder-transparent peer ${
                    formik.errors.password &&
                    formik.touched.password &&
                    "border-red-500 focus:outline-red-500"
                  }`}
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="mt-1 text-red-500">{formik.errors.password}</p>
                )}
                <label
                  htmlFor="password"
                  className={`absolute px-1 transition-all bg-white text-sm text-gray-400 left-3 -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:text-sm peer-focus:-top-3 peer-focus:text-slate-600  ${
                    formik.errors.password &&
                    formik.touched.password &&
                    "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500"
                  }`}
                >
                  Password
                </label>
              </div>
            </div>
            <button className="w-full bg-[#005DB9] rounded-full h-12 text-white">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
