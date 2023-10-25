import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, fetchGenre } from "../../store/actions";
function ModalAddMovie() {
  const [inputMovie, setInput] = useState({
    title: "",
    synopsis: "",
    imgCover: "",
    imgUrl: "",
    rating: "",
    genreId: "",
    trailerUrl: "",
  });
  const [inputCast, setInputCast] = useState([{ name: "", profilePict: "" }]);

  const { genres } = useSelector((state) => state.genreReducer);
  const dispatch = useDispatch();

  const addElementFormCast = () => {
    let cast = inputCast.concat({
      name: "",
      profilePict: "",
    });
    setInputCast(cast);
  };

  const deleteElementFormCast = (idx) => {
    const filterInputCast = inputCast.filter((e, i) => i !== idx);
    setInputCast(filterInputCast);
  };
  const handleChangeMovie = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputMovie,
      [name]: value,
    });
  };
  const handleChangeCast = (e, idx) => {
    const { value, name } = e.target;
    let inputCastString = JSON.stringify(inputCast);
    let newInputCastString = JSON.parse(inputCastString);
    newInputCastString[idx][name] = value;
    setInputCast(newInputCastString);
  };

  const handleSubmit = async () => {
    inputMovie.genreId = +inputMovie.genreId;
    inputMovie.rating = +inputMovie.rating;
    inputMovie.casts = inputCast;
    dispatch(addMovie(inputMovie)).finally(() => {
      const modalCheckbox = document.getElementById("addmovie");
      modalCheckbox.checked = false;
      setInput({ title: "", synopsis: "", imgCover: "", imgUrl: "", rating: "", genreId: "", trailerUrl: "" });
    });
  };
  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  return (
    <>
      <input type="checkbox" id="addmovie" className="modal-toggle" />

      <div className="flex flex-wrap rounded-l-md px-16 text-black modal  font-Rubik">
        <div className="w-full p-6 px-10 bg-white shadow-xl rounded modal-box m-auto">
          <h1 className="text-xl font-extrabold text-center ">Add new movie</h1>
          <p className="text-gray-400 text-center text">Please enter movie details</p>
          <form className="mt-3" onSubmit={(e) => handleSubmit(e.preventDefault())}>
            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Title</label>
                <input
                  onChange={handleChangeMovie}
                  name="title"
                  value={inputMovie.title}
                  type="text"
                  placeholder="Title"
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
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Image Cover</label>
                <input
                  onChange={handleChangeMovie}
                  value={inputMovie.imgCover}
                  name="imgCover"
                  type="text"
                  placeholder="https://sajadganteng.jpg"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Image Url</label>
                <input
                  onChange={handleChangeMovie}
                  value={inputMovie.imgUrl}
                  name="imgUrl"
                  type="text"
                  placeholder="https://sajadganteng.jpg"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-2 block text-sm font-semibold">Synopsis</label>
              <textarea
                onChange={handleChangeMovie}
                name="synopsis"
                value={inputMovie.synopsis}
                type="text"
                placeholder="Synopsis"
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Rating</label>
                <input
                  onChange={handleChangeMovie}
                  name="rating"
                  value={inputMovie.rating}
                  type="number"
                  placeholder="Rating"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Genre</label>
                <select
                  name="genreId"
                  className="block w-full rounded border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3.5 bg-white px-3 text-gray-500 text-sm"
                  defaultValue="Select Genre"
                  onChange={handleChangeMovie}
                >
                  <option disabled>Select Genre</option>
                  {genres.map((e) => (
                    <option value={e.id} key={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Cast</label>
              {inputCast.map((el, idx) => (
                <div className="grid" key={idx + "inputcast"}>
                  <div className="flex flex-wrap justify-between mb-3 gap-0.5">
                    <div className="mb-3">
                      <input
                        onChange={(e) => handleChangeCast(e, idx)}
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        onChange={(e) => handleChangeCast(e, idx)}
                        name="profilePict"
                        type="text"
                        placeholder="Profile Picture URL"
                        className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                      />
                    </div>
                    <a onClick={() => deleteElementFormCast(idx)} className="hover:cursor-pointer text-red-500 flex">
                      <span className="material-symbols-outlined text-md m-auto">delete</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2">
              <a className="mb-1.5 text-white bg-blue-500 px-4 py-2 rounded-md justify-self-start hover:cursor-pointer" onClick={addElementFormCast}>
                Add Cast
              </a>
              <div className="justify-self-end space-x-2">
                <label htmlFor="addmovie" className=" text-white bg-red-500 px-4 py-2 rounded-md hover:cursor-pointer" type="submit">
                  Cancel
                </label>

                <button className=" text-white bg-blue-500 px-6 py-2 rounded-md" type="submit">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalAddMovie;
