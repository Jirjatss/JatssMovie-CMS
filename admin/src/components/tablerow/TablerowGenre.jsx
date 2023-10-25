import { useDispatch } from "react-redux";
import { deleteGenre, fetchGenreById } from "../../store/actions";

function TablerowGenre({ id, idx, name, createdAt, updatedAt }) {
  const dispatch = useDispatch();
  return (
    <tr className={idx % 2 === 0 ? "font-semibold text-center border-b-gray-200 bg-gray-100" : "font-semibold text-center border-b-gray-200 bg-gray-200"}>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
      <td>
        <div className="flex">
          <div className="m-auto flex gap-1">
            <label htmlFor="modalgenre" className="hover:cursor-pointer px-3 py-1 bg-green-500 rounded text-white" onClick={() => dispatch(fetchGenreById(id))}>
              Edit
            </label>
            <button className="px-3 py-1 bg-red-500 rounded text-white" onClick={() => dispatch(deleteGenre(id))}>
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TablerowGenre;
