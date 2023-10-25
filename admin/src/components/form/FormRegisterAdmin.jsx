import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerNewAdmin } from "../../store/actions/userActions";
import Loading from "../Loading";

function FormRegisterAdmin() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userReducer);

  // const navigate = useNavigate();
  const [inputAdmin, setInputAdmin] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputAdmin({
      ...inputAdmin,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerNewAdmin(inputAdmin)).then(() => {
      setInputAdmin({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
    });
  };

  if (loading) {
    return (
      <div className="flex  max-h-10">
        <Loading />;
      </div>
    );
  }

  return (
    <>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-white p-5 rounded font-roboto">
        <p className="text-lg text-black font-bold md:mx-6 mt-2 font">Personal Information</p>
        <p className="text-sm text-black font-light mb-3 md:mx-6 mt-2">Enter information details</p>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="flex gap-3">
            <label className="label w-1/3 text-black">Username</label>
            <input
              onChange={handleChange}
              type="text"
              value={inputAdmin.username}
              name="username"
              placeholder="Username"
              className="input input-bordered rounded-none border-black focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 w-full text-black"
            />
          </div>
          <div className="flex gap-3">
            <label className="label w-1/3 text-black">Email </label>
            <input
              onChange={handleChange}
              value={inputAdmin.email}
              type="text"
              name="email"
              placeholder="Email"
              className="input input-bordered rounded-none border-black text-black focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 w-full "
            />
          </div>
          <div className="flex gap-3">
            <label className="label w-1/3 text-black">Password</label>
            <input
              onChange={handleChange}
              value={inputAdmin.password}
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered rounded-none border-black focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 w-full  text-black"
            />
          </div>
          <div className="flex gap-3">
            <label className="label w-1/3 text-black">Phone</label>
            <input
              onChange={handleChange}
              value={inputAdmin.phoneNumber}
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input input-bordered rounded-none border-black focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 w-full  text-black"
            />
          </div>
          <div className="flex gap-3">
            <label className="label w-1/3 text-black">Address</label>
            <input
              onChange={handleChange}
              value={inputAdmin.address}
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered rounded-none border-black focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 w-full  text-black"
            />
          </div>

          <div className="flex justify-end text-end mt-6 gap-2">
            <button className="py-2 px-5 rounded bg-blue-500 text-white hover:bg-blue-800" type="submit">
              Add
            </button>
            <Link to="/" className="py-2 px-3 rounded bg-red-500 text-white hover:bg-red-800 text-center">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormRegisterAdmin;
