import React, { useState } from "react";
import icData from "../assets/icons/ic_data.svg";
import icDashboard from "../assets/icons/ic_dashboard.svg";
import icDataTransaction from "../assets/icons/ic_transaction.svg";
import icReport from "../assets/icons/ic_report.svg";
import { TECollapse } from "tw-elements-react";

// todo : make space for accordion

export default function SidebarAdmin() {
  const [dataMaster, setDataMaster] = useState(false);
  const [dataTransaction, setDataTransaction] = useState(false);
  const [report, setReport] = useState(false);
  return (
    <div className="bg-cream h-screen">
      <h1>ADMIN</h1>
      <div className="h-20"></div>
      <div className="flex ml-1">
        <img src={icDashboard} alt="" width={16} />
        <div className="w-5" />
        <p>Dashboard</p>
      </div>
      <div className="h-6" />
      <div className="bg-transparant w-full">
        <div className="h-6" />
        <button
          className="group relative flex items-center"
          type="button"
          onClick={() => setDataMaster(!dataMaster)}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <img src={icData} alt="" width={24} />
          <div className="w-4" />
          Data Master
          <span
            className={`${
              dataMaster ? `rotate-[-180deg] -mr-1` : `rotate-0`
            }transition-transform duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
        <TECollapse
          show={dataMaster}
          className="!mt-0 !rounded-none !shadow-none"
        >
          <div className="ml-10">
            <p>Data User</p>
            <p>Data Customer</p>
            <p>Data Barang</p>
            <p>Data Jenis Barang</p>
          </div>
        </TECollapse>
      </div>
      <div className="h-6" />
      <div className="bg-transparant w-full">
        <h2>
          <button
            className="group relative flex items-center"
            type="button"
            onClick={() => setDataTransaction(!dataTransaction)}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <img src={icDataTransaction} alt="" width={24} />
            <div className="w-4" />
            Data Transaksi
            <span
              className={`${
                dataTransaction ? `rotate-[-180deg] -mr-1` : `rotate-0`
              }transition-transform duration-200`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={dataTransaction}
          className="!mt-0 !rounded-none !shadow-none"
        >
          <div className="ml-10">
            <p>Data User</p>
          </div>
        </TECollapse>
      </div>
      <div className="h-6" />
      <div className="bg-transparant w-full">
        <h2>
          <button
            className="group relative flex items-center"
            type="button"
            onClick={() => setReport(!report)}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <img src={icReport} alt="" width={24} />
            <div className="w-4" />
            Laporan
            <div className="w-4" />
            <span
              className={`${
                report ? `rotate-[-180deg] -mr-1` : `rotate-0`
              }transition-transform duration-200`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse show={report} className="!mt-0 !rounded-none !shadow-none">
          <div className="ml-10">
            <p>Data User</p>
          </div>
        </TECollapse>
      </div>
    </div>
  );
}
