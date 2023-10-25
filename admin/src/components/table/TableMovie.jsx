import { useEffect } from "react";
import TablerowMovie from "../tablerow/TablerowMovie";
import ModalCast from "../modal/ModalCast";
import { useSelector, useDispatch } from "react-redux";
import ModalEditMovie from "../modal/ModalEditMovie";
import ModalAddMovie from "../modal/ModalAddMovie";
import { fetchMovies } from "../../store/actions";
import Loading from "../Loading";

function TableMovie() {
  const { loading, movies } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
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
        <table className="table text-black font-signika">
          <thead>
            <tr className="text-black  font-Rubik text-center bg-gray-200">
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Author</th>
              <th>Main Casts</th>
              <th>Casts</th>
              <th>Action</th>
            </tr>
          </thead>
          {movies ? (
            movies.map((e, idx) => (
              <>
                <tbody key={idx}>
                  <TablerowMovie key={e.id + "movies"} idx={idx} id={e.id} title={e.title} image={e.imgUrl} rating={e.rating} genre={e.Genre.name} author={e.User.username} doDelete={() => doDelete(e.id)} casts={e.MovieCasts} />
                </tbody>
                <div key={e.id + "modal"}>
                  <ModalCast id={e.id} key={e.id + "modalcast"} casts={e.MovieCasts} />
                  <ModalEditMovie id={e.id} />
                </div>
              </>
            ))
          ) : (
            <></>
          )}
        </table>
      </div>

      <ModalAddMovie />
    </>
  );
}

export default TableMovie;
