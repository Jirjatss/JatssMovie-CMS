import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doLogout } from "../../store/actions";

function Siderbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(doLogout()).then(() => navigate("/login"));
  };
  return (
    <div className="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-white border-r z-20" id="main-nav">
      <div className="w-full h-20 border-b flex px-4 items-center mb-8">
        <p className="font-semibold text-3xl text-[#002e74] pl-4">JatssMovie</p>
      </div>

      <div className="mb-4 px-4">
        <p className="pl-4 text-sm font-semibold mb-1">ADMIN</p>
        <Link to="/" className="w-full flex items-center text-[#002e74] h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span className="material-symbols-outlined me-2"> dashboard </span>
          <span className="text-gray-700">Dashboard</span>
        </Link>

        <Link to="/genres" className="w-full flex items-center text-[#002e74] h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span className="material-symbols-outlined me-2"> genres </span>
          <span className="text-gray-700">Genre</span>
        </Link>
        <div className="w-full flex items-center text-[#002e74] h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span className="material-symbols-outlined me-2">person_add</span>
          <Link to="/register-admin">
            <span className="text-gray-700">Register Admin</span>
          </Link>
        </div>
      </div>

      <div className="mb-4 px-4">
        <p className="pl-4 text-sm font-semibold mb-1">ACCOUNT</p>
        <div className="w-full flex items-center text-[#002e74] h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
          <span className="material-symbols-outlined me-2"> logout </span>
          <button onClick={handleLogout}>
            <span className="text-gray-700">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Siderbar;
