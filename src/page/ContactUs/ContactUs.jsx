import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/Navbar";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qnt3udr",
      "template_9tt6yq6",
      form.current,
      "tjk-mo2i4UhBICSU2",
    );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-xl mb-4 ">
          Tim kami akan sangat senang untuk bisa membantu anda
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <form className="p-4" ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-12 gap-4 mb-4">
            <div className="col-span-6 sm:col-span-6 mb-4 relative">
              <label
                htmlFor="namaDepan"
                className="absolute -top-3 left-2 bg-white px-1"
              >
                Nama Depan
              </label>
              <input
                type="text"
                id="namaDepan"
                name="namaDepan"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-6 sm:col-span-6 mb-4 relative">
              <label
                htmlFor="namaBelakang"
                className="absolute -top-3 left-2 bg-white px-1"
              >
                Nama Belakang
              </label>
              <input
                type="namaBelakang"
                id="namaBelakang"
                name="namaBelakang"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 mb-4 relative">
              <label
                htmlFor="email"
                className="absolute -top-3 left-2 bg-white px-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 mb-4 relative">
              <label
                htmlFor="message"
                className="absolute -top-3 left-2 bg-white px-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="col-span-12 sm:col-span-12 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
