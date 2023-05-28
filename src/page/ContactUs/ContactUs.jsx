import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/Navbar";
import "./ContactUs.css";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8o3xwhr",
        "template_h9gkpsl",
        form.current,
        "wiEXZq5BTtiYQ4Y2l",
      )
      .then(
        (result) => {
          toast.success(`${result.text}, Message sent successfully`, {
            position: "top-right",
          });
        },
        (error) => {
          toast.error(`Message failed to send, ${error.text}`, {
            position: "top-right",
          });
        },
      );
    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="text__contact__us flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 font-face-ro-bold">
          Contact Us
        </h1>
      </div>
      <div className="tim__kami flex justify-center items-center">
        <h1 className="text-xl mb-4 font-face-ro-med">
          Tim kami akan sangat senang untuk bisa membantu anda
        </h1>
      </div>
      <div className="contact_us flex justify-center items-center">
        <form className="form__tabel p-4" ref={form} onSubmit={sendEmail}>
          <div className="name grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="relative">
              <label
                htmlFor="namaDepan"
                className="label__name absolute -top-3 left-2 bg-white px-1 font-face-ro"
              >
                Nama Depan
              </label>
              <input
                type="text"
                id="namaDepan"
                name="namaDepan"
                className="w-full p-1 border border-gray-300 rounded font-face-ro"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="namaBelakang"
                className="label__name absolute -top-3 left-2 bg-white px-1 font-face-ro"
              >
                Nama Belakang
              </label>
              <input
                type="text"
                id="namaBelakang"
                name="namaBelakang"
                className="w-full p-1 border border-gray-300 rounded font-face-ro"
              />
            </div>
          </div>
          <div className="grid gap-12">
            <div className="relative">
              <label
                htmlFor="email"
                className="label__name absolute -top-3 left-2 bg-white px-1 font-face-ro"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                rows="4"
                className="w-full p-1 border border-gray-300 rounded font-face-ro"
                required
              />
            </div>
            <div className="relative">
              <label
                htmlFor="message"
                className="label__name absolute -top-3 left-2 bg-white px-1 font-face-ro"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-1 border border-gray-300 rounded font-face-ro"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="btn__message col-span-12 sm:col-span-12 text-white px-4 py-2 hover:bg-blue-600 font-face-ro-med"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <hr />
      <Footer />
    </>
  );
};

export default ContactUs;
