import React from "react";
import UserPersona1 from "../../assets/img/1_User Persona.png";
import UserPersona2 from "../../assets/img/2_User Persona.png";
import UserPersona3 from "../../assets/img/3_User Persona.png";

const FourthLanding = () => {
  return (
    <div className="p-3 w-full bg-bg-fourth">
      <div className="flex justify-center w-[600px flex-col mx-auto items-center">
        <p className="md:text-4xl text-3xl text-center text-white font-face-ro-bold mb-3">
          Kamu Bisa Menyewa Kantor Dengan
        </p>
        <p className="md:text-4xl text-3xl text-center text-white font-face-ro-bold">
          Cara yang Mudah
        </p>
      </div>
      <div className="md:flex-row mt-7 flex flex-col justify-center gap-6 md:gap-16 items-center">
        <div className="md:mb-16 flex flex-col justify-center items-center">
          <img src={UserPersona3} alt="persona1" className="w-63 h-99" />
          <p className="font-face-ro-bold text-3xl text-white my-3">
            Sign Up Gratis
          </p>
          <p className="font-face-ro-med text-white w-56 text-center">
            Sign Up akun yang gratis membuat mudah untuk mengakses aplikasi.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:mt-32">
          <img src={UserPersona1} alt="persona3" className="w-59 h-99" />
          <p className="font-face-ro-bold text-3xl text-white my-3">
            Booking Mudah
          </p>
          <p className="font-face-ro-med text-white w-56 text-center">
            Pilih tanggal booking dengan mudah dan cepat
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={UserPersona2} alt="persona2" className="w-59 h-99" />
          <p className="font-face-ro-bold text-3xl text-white my-3">
            Cari Kantor Mudah
          </p>
          <p className="font-face-ro-med text-white w-56 text-center">
            Pencarian ruangan kantor yang mudah, cepat dan aman
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthLanding;
