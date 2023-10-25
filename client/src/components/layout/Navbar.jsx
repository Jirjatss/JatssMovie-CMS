import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#181414] px-24 text-black py-0 font-roboto">
      <div className="navbar-start">
        <Link to="/" className="normal-case text-md px-3 py-1 bg-yellow-500 text-black font-roboto font-extrabold">
          JatssMovie
        </Link>
        <div className="flex">
          <button className=" text-white flex px-3 py-1 gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <p className="m-auto">Menu</p>
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="w-96 flex">
          <select className="rounded-l-lg border-r border-gray-400 py-2 px-2 bg-white font-semibold" defaultValue="All">
            <option>All</option>
            <option value="movie">Movie</option>
          </select>
          <input type="text" placeholder="Search" className="rounded-r-lg w-24 md:w-full bg-white border-l border-gray-400 px-3" />
        </div>
      </div>
      <div className="navbar-end text-white font-semibold">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-md">
            <li>
              <a>WatchList</a>
            </li>
            <li>
              <a>Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
