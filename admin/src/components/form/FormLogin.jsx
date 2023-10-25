import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import { doLogin } from "../../store/actions";

function FormLogin() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(doLogin(input)).finally(() => navigate("/"));
  };

  return (
    <>
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200  text-black font-roboto">
        <div className="flex shadow-md">
          <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white p-20 rounded">
            <div className="w-96">
              <div className="mb-6">
                <h1 className="text-xl font-semibold text-center">Welcome back</h1>
                <p className="text-gray-400 text-center text">Sign in! Please enter your details</p>
              </div>
              <form onSubmit={(e) => handleSubmit(e.preventDefault())}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">Email</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    placeholder="sajadhijir@gmail.com"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-semibold">Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder="*****"
                    name="password"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <button className="mb-1.5 block w-full text-center text-white bg-primary px-2 py-2.5 rounded-md">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
