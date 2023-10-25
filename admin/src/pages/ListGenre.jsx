import React from "react";
import TableGenre from "../components/table/TableGenre";
import { useDispatch } from "react-redux";
import { fetchGenreById, genreFetchByIdSuccess } from "../store/actions";

function ListGenre() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-end mb-5">
        <label className="px-6 py-2 bg-blue-500 rounded text-white font-semibold hover:cursor-pointer" htmlFor="modalgenre" onClick={() => dispatch(genreFetchByIdSuccess(null))}>
          Add Genre
        </label>
      </div>
      <TableGenre />
    </>
  );
}

export default ListGenre;
