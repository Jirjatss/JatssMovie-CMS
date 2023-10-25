import { useState, useEffect } from "react";
import TablerowGenre from "../tablerow/TablerowGenre";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenre } from "../../store/actions";
import Loading from "../Loading";
import ModalGenre from "../modal/ModalGenre";
function TableGenre() {
  const { genres, loading } = useSelector((state) => state.genreReducer);

  const fDate = (newDate) => {
    const date = new Date(newDate);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  if (loading) {
    return (
      <div className="mt-24">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table text-black font-signika text-center">
          <thead>
            <tr className="text-black  font-Rubik bg-gray-200">
              <th></th>
              <th>Category</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((e, idx) => (
              <TablerowGenre id={e.id} name={e.name} idx={idx} key={e.id + "genres"} createdAt={fDate(e.createdAt)} updatedAt={fDate(e.updatedAt)} />
            ))}
          </tbody>
        </table>
      </div>
      <ModalGenre />
    </>
  );
}

export default TableGenre;
