import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Header } from "./";

const Login = () => {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleLogin = () => {
    fetch("http://localhost:8080/api/v1/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginValues),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed.");
        }
        return response.json();
      })
      .then((data) => {
        const { user } = data;
        const { token } = user.data;
        const currentUser = user.data.user;
        localStorage.setItem("token", token);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0  flex items-center justify-center z-20">
        <div className="w-full md:w-375 p-4 pb-8 bg-gray-100 rounded-md shadow-lg   backdrop-blur-md flex flex-col items-center justify-center gap-4 border-4 border-primarycolor">
          <div className="flex gap-2 items-center justify-start">
            <p className="text-[24px] text-primarycolor font-semibold uppercase">
              EasyDone
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4 p-0">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
              name="username"
              onChange={handleLoginChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
              onChange={handleLoginChange}
            />
          </div>
          <div
            className="flex items-center justify-center  gap-2 px- py-3 rounded-md w-full bg-primarycolor text-white cursor-pointer hover:bg-primaryHovercolor duration-100 ease-in-out transition-all"
            onClick={handleLogin}
          >
            <p className="">Sign In</p>
          </div>

          <div className="flex gap-2 items-center justify-start">
            <p className="text-[18px] text-base">First Time Here?</p>
          </div>
          <div className="flex items-center justify-center  gap-2 px- py-3 rounded-md w-full bg-[#71b7e6] text-white cursor-pointer hover:bg-[#7db9ff] duration-100 ease-in-out transition-all">
            <NavLink to={"/signup"}>
              <p className="">Sign Up</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
