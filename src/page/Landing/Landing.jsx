import React from "react";
import HeroLanding from "../../components/Landing/HeroLanding";
import SecondHeroLanding from "../../components/Landing/SecondHeroLanding";
import ThirdLandingPage from "../../components/Landing/ThirdLandingPage";
import FourthLanding from "../../components/Landing/FourthLanding";
import Navbar from "../../components/Navbar/Navbar";

export const Landing = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <HeroLanding />
      <SecondHeroLanding />
      <ThirdLandingPage />
      <FourthLanding />
    </div>
  );
};
