import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Login,
  Public,
  Home,
  SignUp,
  Dashboard,
  AllServices,
  Header,
} from "./components";

const App = () => {
  return (
    <div className="relative h-auto flex items-center justify-center min-w-[680px] flex-col">
      <div className="w-full flex-none shadow-md z-30">
        <Header />
      </div>
      <div className="absolute w-[900px] h-[900px] bg-gradient-to-l  from-[#eae4f8] to-[#f7f4fa] rounded-full top-0 right left-0 translate-x-[-40%]  translate-y-[-50%] z-[-10]"></div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Public />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/allservices" element={<AllServices />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
