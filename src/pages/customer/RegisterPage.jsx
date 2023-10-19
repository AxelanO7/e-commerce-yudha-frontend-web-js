import axios from "axios";
import React, { useState } from "react";
import logoImage from "../../assets/images/logo.png";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const tapRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:8080/api/user", {
        // await axios.post("http://localhost:8080/admin/login", {
        //   username,
        //   password,
        // });
        // navigate("/admin-page");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div class="flex w-full items-center justify-center bg-cream bg-cover bg-no-repeat flex-col py-12 min-h-screen static">
        <img src={logoImage} className="absolute h-full" alt="logo" />
        <h1 className="text-4xl text-yellow-950">REGISTER</h1>
        <div className="h-16" />
        <form action="#" className="flex-col flex w-9/12">
          <label className="text-1xl">First Name</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="h-2" />
          <label className="text-1xl">Last Name</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <div className="h-2" />
          <label className="text-1xl">Email</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="h-2" />
          <label className="text-1xl">Phone Number</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="h-2" />
          <label className="text-1xl">Address</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="h-2" />
          <label className="text-1xl">Password</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="h-2" />
          <label className="text-1xl">Confirm Password</label>
          <input
            type="text"
            className="form-control text-center border-yellow-950 border"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="h-12" />
          <button
            type="submit"
            className="btn btn-primary btn_orange/50 w-40 py-1 w-2/4 mx-auto"
            onClick={tapRegister}
          >
            REGISTER
          </button>
          <div className="h-2" />
        </form>
        <div className="flex flex-row">
          <p className="text-1xl">Yes i have an account?</p>
          <div className="w-2" />
          <a href="/login" className="text-1xl text-blue-700 underline">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
