import React from "react";
import Navbar from "../../layouts/navbar_customer";
import bgHome from "../../assets/images/bg_home.png";
import { useState } from "react";

const EditCustomerPage = () => {
  const [idCustomer, setIdCustomer] = useState("");
  const [nameCustomer, setNameCustomer] = useState("");
  const [phoneCustomer, setPhoneCustomer] = useState("");
  const [addressCustomer, setAddressCustomer] = useState("");
  const [passwordCustomer, setPasswordCustomer] = useState("");
  const [usernameCustomer, setUsernameCustomer] = useState("");
  const [emailCustomer, setEmailCustomer] = useState("");

  const tapEdit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      // await axios.get("http://localhost:8080/api/user", {
      // await axios.post("http://localhost:8080/admin/login", {
      //   username,
      //   password,
      // });
      // navigate("/admin-page");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <section>
      <div className="fixed top-0 w-full z-[1]">
        <Navbar />
      </div>
      <div className="static flex flex-col items-center">
        <img src={bgHome} alt="bgHome" className="w-full" />
        <div className="absolute top-72 text-center bg-white rounded-md px-16 py-10">
          <p>Nama Customer</p>
          <div className="h-12" />
          <form action="#" className="flex flex-col space-y-2">
            <div className="flex flex-row justify-between">
              <label>Id Customer</label>
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={idCustomer}
                onChange={(e) => setIdCustomer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Nama Customer</label>
              <div className="w-10" />
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={nameCustomer}
                onChange={(e) => setNameCustomer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>No. Telepon</label>
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={phoneCustomer}
                onChange={(e) => setPhoneCustomer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Alamat</label>
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={addressCustomer}
                onChange={(e) => setAddressCustomer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Password</label>
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={passwordCustomer}
                onChange={(e) => setPasswordCustomer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Username</label>
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={usernameCustomer}
                onChange={(e) => setUsernameCustomer(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between">
              <label>Email</label>
              <input
                type="text"
                className="form-control text-center border-yellow-950 border bg-white/75"
                value={emailCustomer}
                onChange={(e) => setEmailCustomer(e.target.value)}
              />
            </div>
            <div className="h-8" />
            <button
              type="submit"
              className="btn btn-primary bg-green-500 w-32 py-1 mx-auto border border-black"
              onClick={tapEdit}
            >
              SIMPAN
            </button>
            <div className="h-8" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditCustomerPage;
