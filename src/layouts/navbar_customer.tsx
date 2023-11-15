import React from "react";
import logo from "../assets/images/logo.png";

const NavbarCustomer = () => {
  return (
    <nav className="flex items-center bg-brown px-12">
      <img src={logo} alt="logo" className="w-28	h-28" />
      <div className="flex items-center text-white ml-6">
        <span className="text-4xl font-extrabold text-[#EEC765]">
          UD TOKO YUDHA
        </span>
      </div>
      <div className="flex grow" />
      <div className="flex items-center">
        <div className="text-xl font-semibold text-white space-x-8 mr-16">
          <a href="#responsive-header" className="mt-4 hover:text-[#564C1B]">
            Home
          </a>
          <a href="#responsive-header" className="mt-4 hover:text-[#564C1B]">
            All Product
          </a>
          <a href="#responsive-header" className="mt-4  hover:text-[#564C1B]">
            Contact Us
          </a>
          <a href="#responsive-header" className="mt-4  hover:text-[#564C1B]">
            Informasi
          </a>
        </div>
        <div>
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="py-2 text-sm text-gray-900 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-center"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="my-2" />
          <div className="flex flex-row mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                clipRule="evenodd"
              />
            </svg>
            <select className="bg-transparent grow text-center text-white">
              <option value="login">Login</option>
              <option value="register">Register</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustomer;
