import React, { useEffect, useState } from "react";
import Siderbar from "../components/layout/Siderbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (localStorage.access_token) setUsername(localStorage.name);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    setDate(`${day} ${month} ${year}`);
  }, []);
  return (
    <>
      <Siderbar />

      <div className="w-full pl-0 lg:pl-64 min-h-screen py-4 card-mentor bg-cover">
        <div className="px-2 bg-light ">
          <marquee className="py-3 mb-5 text-white text-md font-roboto bg-gradient-to-r from-cyan-500 to-blue-500" scrollamount="15" direction="right">
            Hai {username} - Welcome to JatssMovie - Enjoy your day - {date}
          </marquee>
        </div>
        <div className="md:mx-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
