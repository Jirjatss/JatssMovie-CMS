import * as icon from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteMovie, fetchMovieById, movieFetchByIdSuccess } from "../../store/actions";

function TablerowMovie({ id, idx, title, image, genre, rating, author, casts }) {
  const dispatch = useDispatch();
  return (
    <tr className={idx % 2 === 0 ? "font-semibold text-center border-b-gray-200 bg-gray-100" : "font-semibold text-center border-b-gray-200 bg-gray-200"}>
      <th>{idx + 1}</th>
      <td>
        <div className="bg-cover md:w-20 md:h-24" style={{ backgroundImage: `url(${image})` }}></div>
        {/* <img src={image} alt={title} className="md:w-20 md:h-24" /> */}
      </td>
      <td>{title}</td>
      <td>{genre}</td>
      <td>
        <div className="flex">
          <icon.StarFill size={16} className="me-1 text-yellow-500" />
          <span>{rating}</span>
        </div>
      </td>
      <td>{author}</td>
      <td>
        <div className="flex justify-center">
          {casts ? (
            <div>
              <div className="m-auto bg-cover w-20 h-20 rounded-full" style={{ backgroundImage: `url(${casts[0].Cast.profilePict})` }}></div>
              <p className="text-xs mt-2">{casts[0].Cast.name}</p>
            </div>
          ) : (
            <p className="m-auto">Tidak ada cast</p>
          )}
        </div>
      </td>
      <td>
        <button className="px-5 py-1 bg-blue-500 rounded text-white" onClick={() => document.getElementById(`${id}-cast`).showModal()}>
          Show Cast
        </button>
      </td>

      <td>
        <div className="">
          <label
            onClick={() => {
              dispatch(movieFetchByIdSuccess(null));
              dispatch(fetchMovieById(id));
            }}
            className="px-5 py-1 bg-green-500 rounded-l text-white hover:cursor-pointer"
            type="submit"
            htmlFor={id + "editmovie"}
          >
            Edit
          </label>
          <button
            className="px-3 py-1 bg-red-500 rounded-r text-white"
            onClick={() => {
              dispatch(deleteMovie(id));
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default TablerowMovie;
