import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="px-6 py-3 mr-1 mb-1 rounded shadow hover:shadow-lg outline-none focus:outline-none border-2 border-teal-500 text-white bg-teal-500 font-bold text-sm"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        className="px-6 py-3 mr-1 mb-1 rounded shadow hover:shadow-lg outline-none focus:outline-none border-2 border-teal-500 text-white bg-teal-500 font-bold text-sm"
        onClick={() => {
          navigate("/user");
        }}
      >
        User
      </button>
      <button
        className="px-6 py-3 mr-1 mb-1 rounded shadow hover:shadow-lg outline-none focus:outline-none border-2 border-teal-500 text-white bg-teal-500 font-bold text-sm"
        onClick={() => {
          navigate("/account");
        }}
      >
        Account
      </button>
      <button
        className="px-6 py-3 mr-1 mb-1 rounded shadow hover:shadow-lg outline-none focus:outline-none border-2 border-teal-500 text-white bg-teal-500 font-bold text-sm"
        onClick={() => {
          navigate("/input");
        }}
      >
        Input
      </button>
      <button
        className="px-6 py-3 mr-1 mb-1 rounded shadow hover:shadow-lg outline-none focus:outline-none border-2 border-teal-500 text-white bg-teal-500 font-bold text-sm"
        onClick={() => {
          navigate("/output");
        }}
      >
        Output
      </button>
    </>
  );
};

export default MainPage;
