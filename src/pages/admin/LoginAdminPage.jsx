import axios from "axios";
import React, { useState } from "react";
import logoImage from "../../assets/images/logo.png";

const LoginAdminPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const tapLogin = async (e) => {
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
      <div class="flex h-screen w-full items-center justify-center bg-cream bg-cover bg-no-repeat min-h-screen flex-col text-center static">
        <img src={logoImage} className="absolute h-96" alt="logo" />
        <div className="z-[1]">
          <h1 className="text-4xl text-brown">LOGIN</h1>
          <div className="h-16" />
          <form action="#">
            <input
              type="text"
              className="form-control text-center border-yellow-950 border bg-white/75"
              placeholder="Masukkan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="h-8" />
            <input
              type="text"
              className="form-control text-center border-yellow-950 border bg-white/75"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="h-8" />
            <button
              type="submit"
              className="btn btn-primary bg-orange/50 w-40 py-1"
              onClick={tapLogin}
            >
              LOGIN
            </button>
            <div className="h-8" />
          </form>
          <div className="flex flex-row">
            <p className="text-1xl">Don't have an account?</p>
            <div className="w-2" />
            <a href="/register" className="text-1xl text-blue-700 underline">
              Register
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginAdminPage;
