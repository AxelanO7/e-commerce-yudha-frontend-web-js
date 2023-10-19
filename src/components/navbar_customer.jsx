import React from "react";
import iconSearch from "../assets/icons/ic_search.svg";
import iconCart from "../assets/icons/ic_cart.svg";
import iconUser from "../assets/icons/ic_user.svg";

import logo from "../assets/images/logo.png";

const NavbarCustomer = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-brown px-6">
      <img src={logo} alt="logo" className="w-28	h-28" />
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="text-4xl font-extrabold text-[#EEC765]">
          UD TOKO YUDHA
        </span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-xl font-semibold lg:flex-grow text-white">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#564C1B] mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#564C1B] mr-4"
          >
            All Product
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#564C1B] mr-4"
          >
            Contact Us
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 hover:text-[#564C1B]"
          >
            Informasi
          </a>
        </div>
        <div className="flex flex-col">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={iconSearch} alt="" />
              </div>
              <input
                type="search"
                id="default-search"
                class="py-2 text-sm text-gray-900 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-center"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <div className="my-2" />
          <div className="flex flex-row mr-4">
            <img src={iconCart} alt="cart" />
            <img src={iconUser} alt="user" className="mx-4" />
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
