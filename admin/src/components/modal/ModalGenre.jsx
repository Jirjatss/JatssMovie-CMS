import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGenre, editGenre } from "../../store/actions";
import Loading from "../Loading";

function ModalGenre() {
  const { genre } = useSelector((state) => state.genreReducer);
  const [inputGenre, setInputGenre] = useState({ name: "" });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (genre) {
      dispatch(editGenre(genre.id, inputGenre)).then(() => {
        const modalCheckbox = document.getElementById("modalgenre");
        modalCheckbox.checked = false;
        setInputGenre({ name: "" });
      });
    } else {
      dispatch(addGenre(inputGenre)).then(() => {
        const modalCheckbox = document.getElementById("modalgenre");
        modalCheckbox.checked = false;
        setInputGenre({ name: "" });
      });
    }
  };

  useEffect(() => {
    if (genre) {
      setLoading(true);
      setTimeout(() => {
        setInputGenre(genre);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(false);
      setInputGenre({ name: "" });
    }
  }, [genre]);

  return (
    <>
      <input type="checkbox" id="modalgenre" className="modal-toggle" />
      <div className="flex flex-wrap rounded-l-md px-16 text-black modal  font-Rubik">
        <div className="w-full p-6 px-10 bg-white shadow-xl rounded modal-box m-auto">
          <h1 className="text-xl font-extrabold text-center ">{genre ? "Edit Genre" : "Add new Genre"}</h1>
          <p className="text-gray-400 text-center text">Please enter movie details</p>
          {loading ? (
            <div className="mt-4">
              <Loading />
            </div>
          ) : (
            <form className="mt-3" onSubmit={(e) => handleSubmit(e.preventDefault())}>
              <div className="mb-3">
                <label className="mb-2 block text-sm font-semibold">Title</label>
                <input
                  onChange={(e) => setInputGenre({ name: e.target.value })}
                  value={inputGenre.name}
                  type="text"
                  placeholder="Title"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-3 bg-white px-3 text-gray-500 text-sm"
                />
              </div>

              <div className=" flex gap-2 justify-end">
                <label htmlFor="modalgenre" className=" text-white bg-red-500 px-4 py-2 rounded-md hover:cursor-pointer" type="submit">
                  Cancel
                </label>
                <button className=" text-white bg-blue-500 px-6 py-2 rounded-md" type="submit">
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default ModalGenre;
