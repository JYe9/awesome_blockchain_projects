import React from "react";

//INTERNAL IMPORT
import { Footer, HeroSection, Header, Card } from "../components/index";

const home = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <Header />
      <HeroSection />
      <Card />
      <Footer />
    </div>
  );
};

export default home;
