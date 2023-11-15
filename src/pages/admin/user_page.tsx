import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseLayout from "../../layouts/base";
import Breadcrumb from "../../components/breadcrumb";

interface User {
  ID: number;
  name_user: string;
  address_user: string;
  phone_user: string;
  username_user: string;
  password_user: string;
  email_user: string;
}

export default function UserPage() {
  const [manage, setManage] = useState<string | null>(null);

  const [users, setUsers] = useState<User[]>([]);

  const [idUser, setIdUser] = useState<number | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const itemBreadCrumbs = ["Dashboard", "Data User"];

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/api/user");
    if (response.status === 200) {
      setUsers(response.data.data);
    } else alert("Gagal mengambil data");
  };

  const addUser = async () => {
    if (!validateInput()) return;
    const response = await axios.post("http://localhost:8080/api/user", {
      ID: null,
      name_user: name,
      phone_user: phone,
      address_user: address,
      password_user: password,
      username_user: username,
      email_user: email,
    });
    if (response.status === 201) {
      alert("Berhasil menambahkan data");
      closeManage();
      getUsers();
    } else alert("Gagal menambahkan data");
  };

  const updateUser = async (idProps: string) => {
    if (!validateInput()) return;
    const response = await axios.put(
      `http://localhost:8080/api/user/${idProps}`,
      {
        name_user: name,
        phone_user: phone,
        address_user: address,
        password_user: password,
        username_user: username,
        email_user: email,
      }
    );
    if (response.status === 200) {
      alert("Berhasil mengubah data");
      getUsers();
    } else alert("Gagal mengubah data");
  };

  const deleteUser = async (idProps: string) => {
    const response = await axios.delete(
      `http://localhost:8080/api/user/${idProps}`
    );
    if (response.status === 200) {
      alert("Berhasil menghapus data");
      getUsers();
    } else alert("Gagal menghapus data");
  };

  const tapEdit = (idProps: string) => {
    const user = users.find((user) => user.ID.toString() === idProps);
    if (user === undefined) return;
    setIdUser(user.ID);
    setName(user.name_user);
    setPhone(user.phone_user);
    setAddress(user.address_user);
    setPassword(user.password_user);
    setUsername(user.username_user);
    setEmail(user.email_user);
    setManage("edit");
  };

  const tapView = (idProps: string) => {
    const user = users.find((user) => user.ID.toString() === idProps);
    if (user === undefined) return;
    setIdUser(user.ID);
    setName(user.name_user);
    setPhone(user.phone_user);
    setAddress(user.address_user);
    setPassword(user.password_user);
    setUsername(user.username_user);
    setEmail(user.email_user);
    setManage("view");
  };

  const closeManage = () => {
    setIdUser(null);
    setPhone(null);
    setAddress(null);
    setPassword(null);
    setUsername(null);
    setManage(null);
  };

  const validateInput = () => {
    if (
      name === null ||
      phone === null ||
      address === null ||
      password === null ||
      username === null ||
      email === null
    ) {
      alert("Mohon lengkapi data");
      return false;
    } else return true;
  };

  return (
    <BaseLayout>
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
              ? "Tambah User"
              : manage === "edit"
              ? "Ubah User"
              : manage === "view"
              ? "Detail User"
              : "User"}
          </label>
          {manage === "add" ? null : (
            <>
              <div className="h-4" />
              <div className="flex flex-col w-1/2">
                <label className="text-left">ID User</label>
                <input
                  disabled={manage === "view" ? true : false}
                  className="border border-dark_green rounded-md py-1 px-3 w-full"
                  type="number"
                  value={idUser!}
                  onChange={(e) => setIdUser(Number(e.target.value))}
                />
              </div>
            </>
          )}
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Nama</label>
            <input
              disabled={manage === "view" ? true : false}
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={name!}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">No Telp</label>
            <input
              disabled={manage === "view" ? true : false}
              type="number"
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={phone!}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Alamat</label>
            <input
              disabled={manage === "view" ? true : false}
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={address!}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Password</label>
            <input
              disabled={manage === "view" ? true : false}
              type="password"
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={password!}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Username</label>
            <input
              disabled={manage === "view" ? true : false}
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={username!}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="h-4" />
          <div className="flex flex-col w-1/2">
            <label className="text-left">Email</label>
            <input
              disabled={manage === "view" ? true : false}
              type="email"
              className="border border-dark_green rounded-md py-1 px-3 w-full"
              value={email!}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="h-4" />
          {manage === "view" ? null : (
            <button
              className="border border-dark_green rounded-md py-1 px-3 w-1/2 hover:bg-dark_green/25 hover:bg-brown hover:text-white"
              onClick={() =>
                manage === "add" ? addUser() : updateUser(idUser!.toString())
              }
            >
              {manage === "add"
                ? "Tambah"
                : manage === "edit"
                ? "Ubah"
                : "Simpan"}
            </button>
          )}
        </div>
      ) : null}

      <div className="flex justify-between p-4">
        <Breadcrumb title="Data User" items={itemBreadCrumbs} />
        <button
          className="text-white px-4 py-2 rounded-md flex items-center bg-purple h-min self-center"
          onClick={() => setManage("add")}
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

      <div className="bg-white rounded-t-xl">
        <table className="table-fixed w-full text-center">
          <thead>
            <tr className="border-b">
              <th className="py-2">Nama</th>
              <th className="py-2">No Telepon</th>
              <th className="py-2">Alamat</th>
              <th className="py-2">Password</th>
              <th className="py-2">Username</th>
              <th className="py-2">Email</th>
              <th className="py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr className="border-b">
                <td className="border px-4 py-2 text-center" colSpan={7}>
                  Tidak ada data
                </td>
              </tr>
            ) : null}
            {users.map((user) => (
              <tr key={user.ID} className="border-b">
                <td className="py-2">{user.name_user}</td>
                <td className="py-2">{user.phone_user}</td>
                <td className="py-2">{user.address_user}</td>
                <td className="py-2">{user.password_user}</td>
                <td className="py-2">{user.username_user}</td>
                <td className="py-2">{user.email_user}</td>
                <td className="flex space-x-4 py-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    width={20}
                    height={20}
                    onClick={() => tapEdit(user.ID.toString())}
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
                    onClick={() => tapView(user.ID.toString())}
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
                    onClick={() => deleteUser(user.ID.toString())}
                  >
                    <path
                      fill="#A3A9B6"
                      d="M14 2.667h-2.067A3.34 3.34 0 0 0 8.667 0H7.333a3.34 3.34 0 0 0-3.266 2.667H2A.667.667 0 1 0 2 4h.667v8.667A3.337 3.337 0 0 0 6 16h4a3.337 3.337 0 0 0 3.333-3.333V4H14a.667.667 0 1 0 0-1.333Zm-6.667 8.666a.667.667 0 1 1-1.333 0v-4a.667.667 0 0 1 1.333 0v4Zm2.667 0a.667.667 0 1 1-1.333 0v-4a.667.667 0 1 1 1.333 0v4ZM5.447 2.667a2.004 2.004 0 0 1 1.886-1.334h1.334a2.004 2.004 0 0 1 1.886 1.334H5.447Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BaseLayout>
  );
}
