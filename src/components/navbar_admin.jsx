import React from "react";
import icSearch from "../assets/icons/ic_search.svg";
import icCalender from "../assets/icons/ic_calendar.svg";
import icBell from "../assets/icons/ic_bell.svg";
import icEnvelope from "../assets/icons/ic_envelope.svg";

const NavbarAdmin = () => {
  return (
    <nav class="flex items-center bg-brown px-6 py-4">
      <div className="flex flw-row">
        <img src={icSearch} alt="search" />
        <div className="w-4" />
        <p className="text-white">Search</p>
      </div>
      <div className="grow" />
      <div className="flex flw-row space-x-4">
        <img src={icCalender} alt="calender" />
        <img src={icBell} alt="bell" />
        <img src={icEnvelope} alt="envelope" />
        <div className="w-5 h-5 bg-black rounded-full" />
      </div>
      <div class="w-0.5 self-stretch bg-black mx-4"></div>
      <div className="w-8 h-8 bg-white rounded-full" />
      <div className="w-4" />
      <div className="flex flex-col">
        <p>Yesi</p>
        <p>Admin</p>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
