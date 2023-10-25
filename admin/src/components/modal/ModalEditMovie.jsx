import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, fetchGenre } from "../../store/actions";
import Loading from "../Loading";

function ModalEditMovie({ id }) {
  const [inputMovie, setInputMovie] = useState(null);

  const { movie } = useSelector((state) => state.movieReducer);
  const { genres } = useSelector((state) => state.genreReducer);

  const dispatch = useDispatch();

  const handleChangeMovie = (e) => {
    const { value, name } = e.target;
    setInputMovie({
      ...inputMovie,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    inputMovie.genreId = +inputMovie.genreId;
    dispatch(editMovie(id, inputMovie)).finally(() => {
      const modalCheckbox = document.getElementById(`${id}editmovie`);
      modalCheckbox.checked = false;
    });
  };

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  useEffect(() => {
    if (movie) setInputMovie(movie);
    else setInputMovie(null);
  }, [movie]);

  return (
    <>
      <input type="checkbox" id={id + "editmovie"} className="modal-toggle" />

      <div className="flex flex-wrap rounded-l-md px-16 text-black modal  font-Rubik" key={id + "modaledit"}>
        <div className="w-[34rem] p-6 px-10 bg-white shadow-xl rounded modal-box m-auto">
          <h1 className="text-xl font-extrabold text-center ">Edit Movie</h1>
          <p className="text-gray-400 text-center mb-5">Please enter movie details</p>
          {inputMovie ? (
            <form className="mt-3" onSubmit={(e) => handleSubmit(e.preventDefault())}>
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Title</label>
                <input
                  onChange={handleChangeMovie}
                  name="title"
                  value={inputMovie.title}
                  type="text"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Trailer Url</label>
                <input
                  onChange={handleChangeMovie}
                  name="trailerUrl"
                  value={inputMovie.trailerUrl}
                  type="text"
                  placeholder="Trailer Url"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-3">
                  <label className="mb-2 block text-sm font-semibold">Image Cover</label>
                  <input
                    onChange={handleChangeMovie}
                    name="imgCover"
                    type="text"
                    value={inputMovie.imgCover}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2 block text-sm font-semibold">Image Url</label>
                  <input
                    onChange={handleChangeMovie}
                    name="imgUrl"
                    type="text"
                    value={inputMovie.imgUrl}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Synopsis</label>
                <textarea
                  onChange={handleChangeMovie}
                  name="synopsis"
                  type="text"
                  value={inputMovie.synopsis}
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="mb-3">
                  <label className="mb-2 block text-sm font-semibold">Rating</label>
                  <input
                    onChange={handleChangeMovie}
                    name="rating"
                    type="number"
                    value={inputMovie.rating}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-sm font-semibold">Genre</label>
                  <select
                    name="genreId"
                    className="block w-full border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3.5 bg-white px-3 text-gray-500 text-sm"
                    value={inputMovie.genreId}
                    onChange={handleChangeMovie}
                  >
                    {genres.map((e) => (
                      <option value={e.id} key={e.id + "genreOption"}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-5">
                <label htmlFor={id + "editmovie"} className=" text-white bg-red-500 px-4 py-2 rounded-md hover:cursor-pointer" type="submit">
                  Cancel
                </label>

                <button className=" text-white bg-blue-500 px-6 py-2 rounded-md" type="submit">
                  Save
                </button>
              </div>
            </form>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}

export default ModalEditMovie;
