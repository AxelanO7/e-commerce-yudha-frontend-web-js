import React from "react";
import Navbar from "../../layouts/navbar_customer";

import bgHome from "../../assets/images/bg_home.png";

const HomePage = () => {
  return (
    <section className="relative h-max">
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <img src={bgHome} alt="bgHome" className="w-full" />
    </section>
  );
};

export default HomePage;
