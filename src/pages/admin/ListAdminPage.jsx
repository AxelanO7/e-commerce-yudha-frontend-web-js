import React, { useState } from "react";
import axios from "axios";
import NavbarAdmin from "../../components/navbar_admin";
import SidebarAdmin from "../../components/sidebar_admin";

const ListAdminPage = () => {
  const [manage, setManage] = useState(false);
  const [idOrder, setIdOrder] = useState(null);
  const [dateTransaction, setDateTransaction] = useState(null);
  const [idSupplier, setIdSupplier] = useState(null);
  const [typeTransaction, setTypeTransaction] = useState(null);
  const [suppliers, setSuppliers] = useState(null);

  const addOrder = async () => {
    const response = await axios.post("http://localhost:3001/api/v1/supplier", {
      date_transaction: dateTransaction,
      id_supplier: idSupplier,
      type_transaction: typeTransaction,
    });
    if (response.status === 200) {
      alert("Berhasil menambahkan data");
      // getSuppliers();
    } else alert("Gagal menambahkan data");
  };

  const updateOder = async (id) => {
    const response = await axios.put(
      `http://localhost:3001/api/v1/supplier/${id}`,
      {
        date_transaction: dateTransaction,
        id_supplier: idSupplier,
        type_transaction: typeTransaction,
      }
    );
    if (response.status === 200) {
      alert("Berhasil mengubah data");
      // getSuppliers();
    } else alert("Gagal mengubah data");
  };

  const closeManage = () => {
    setIdOrder(null);
    setDateTransaction(null);
    setIdSupplier(null);
    setTypeTransaction(null);
    setSuppliers(null);
    setManage(false);
  };

  return (
    <>
      {manage !== null ? (
        <div className="w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed z-[1] flex flex-col justify-center items-center bg-white rounded-md shadow-md border border-dark_green px-10 py-10">
          <button
            className="absolute top-4 right-4 text-red-500"
            onClick={() => closeManage()}
          >
            X
          </button>
          <label className="text-2xl">
            {manage === "add"
              ? "Tambah Order"
              : manage === "edit"
              ? "Ubah Order"
              : "Supplier"}
          </label>
          {manage === "add" ? null : (
            <>
              <div className="h-4" />
              <div className="flex flex-col w-1/2">
                <label className="text-left">ID Order</label>
                <input
                  className="border border-dark_green rounded-md py-1 px-3 w-full"
                  type="number"
                  value={idOrder}
                  onChange={(e) => setIdOrder(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Tanggal Transaksi</label>
            <input
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={dateTransaction}
              onChange={(e) => setDateTransaction(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Supplier</label>
            <select
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              defaultValue={suppliers[0].ID}
              value={idSupplier}
              onChange={(e) => setIdSupplier(e.target.value)}
            >
              {suppliers.map((supplier) => (
                <option
                  key={supplier.ID}
                  value={supplier.ID}
                  selected={supplier.ID}
                >
                  {supplier.name_supplier}
                </option>
              ))}
            </select>
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Status</label>
            <input
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={typeTransaction}
              onChange={(e) => setTypeTransaction(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <button
            className="border border-dark_green rounded-md py-1 px-3 w-1/2 hover:bg-dark_green/25 hover:text-white"
            onClick={() =>
              manage === "add" ? addOrder() : updateOder(idOrder)
            }
          >
            {manage === "add"
              ? "Tambah"
              : manage === "edit"
              ? "Ubah"
              : "Simpan"}
          </button>
        </div>
      ) : null}

      <NavbarAdmin />
      <div className="flex">
        <SidebarAdmin />
        <div className="w-full bg-gray-50">
          <h2>Data User</h2>
          <div className="flex">
            <ol className="list-reset flex">
              <li>
                <p className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700">
                  Dashboard
                </p>
              </li>
              <li>
                <span className="mx-2 text-neutral-500">{">"}</span>
              </li>
              <li className="text-neutral-500">Data User</li>
            </ol>
            <button
              className="text-white px-4 py-2 rounded-md ml-auto flex items-center bg-purple"
              onClick={() => setManage(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                width={16}
                height={16}
              >
                <g clip-path="url(#a)">
                  <path
                    fill="#fff"
                    d="M15.333 7.333H8.667V.667A.667.667 0 0 0 8 0a.667.667 0 0 0-.667.667v6.666H.667A.667.667 0 0 0 0 8a.667.667 0 0 0 .667.667h6.666v6.666a.667.667 0 1 0 1.334 0V8.667h6.666a.667.667 0 1 0 0-1.334Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="w-2" />
              Tambah User
            </button>
          </div>
          <div className="bg-white h-screen">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-2">Nama</th>
                  <th className="px-4 py-2">No Telepon</th>
                  <th className="px-4 py-2">Alamat</th>
                  <th className="px-4 py-2">Password</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Pande Nova</td>
                  <td className="border px-4 py-2">081777777777</td>
                  <td className="border px-4 py-2">Tulikup, Gianyar</td>
                  <td className="border px-4 py-2">pandeganteng</td>
                  <td className="border px-4 py-2">Pande Nova</td>
                  <td className="border px-4 py-2">pandenova12@gmail.com</td>
                  <td className="border px-4 py-2 flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={20}
                      height={20}
                    >
                      <g fill="#A3A9B6" clip-path="url(#a)">
                        <path d="M.781 12.746c-.5.5-.78 1.178-.781 1.885V16h1.369c.707 0 1.385-.281 1.885-.782l8.895-8.895L9.677 3.85.78 12.746ZM15.43.57a1.747 1.747 0 0 0-2.473 0l-2.338 2.338 2.473 2.473 2.338-2.338a1.749 1.749 0 0 0 0-2.473Z" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h16v16H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={20}
                      height={20}
                    >
                      <path
                        fill="#A3A9B6"
                        d="M8 10.666a2.666 2.666 0 1 0 0-5.332 2.666 2.666 0 0 0 0 5.332Z"
                      />
                      <path
                        fill="#A3A9B6"
                        d="M15.511 6.28C14.478 4.597 12.127 1.772 8 1.772c-4.126 0-6.478 2.825-7.511 4.508a3.27 3.27 0 0 0 0 3.44C1.522 11.403 3.874 14.228 8 14.228c4.127 0 6.478-2.825 7.511-4.508a3.27 3.27 0 0 0 0-3.44ZM8 11.998a3.999 3.999 0 1 1 0-7.997 3.999 3.999 0 0 1 0 7.997Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      width={20}
                      height={20}
                    >
                      <path
                        fill="#A3A9B6"
                        d="M14 2.667h-2.067A3.34 3.34 0 0 0 8.667 0H7.333a3.34 3.34 0 0 0-3.266 2.667H2A.667.667 0 1 0 2 4h.667v8.667A3.337 3.337 0 0 0 6 16h4a3.337 3.337 0 0 0 3.333-3.333V4H14a.667.667 0 1 0 0-1.333Zm-6.667 8.666a.667.667 0 1 1-1.333 0v-4a.667.667 0 0 1 1.333 0v4Zm2.667 0a.667.667 0 1 1-1.333 0v-4a.667.667 0 1 1 1.333 0v4ZM5.447 2.667a2.004 2.004 0 0 1 1.886-1.334h1.334a2.004 2.004 0 0 1 1.886 1.334H5.447Z"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListAdminPage;
