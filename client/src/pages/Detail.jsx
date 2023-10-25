import React, { useEffect, useRef } from "react";
import * as icon from "react-bootstrap-icons";
import CardCast from "../components/card/CardCast";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieByslug } from "../store/actions";
import Loading from "../components/Loading";
function Detail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { movie, loading } = useSelector((state) => state.movieReducer);
  const targetRef = useRef(null);

  useEffect(() => {
    dispatch(fetchMovieByslug(slug));
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex">
        <div className="m-auto">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="px-24 py-10 bg-gradient-to-b from-[#212326] to-transparent text-white" ref={targetRef}>
      {/* Masthead */}
      <div className="grid grid-cols-2 ">
        <div className="text-start">
          <h1 className="text-4xl m-auto">{movie ? movie.title : ""}</h1>
        </div>
        <div className="flex flex-row justify-end gap-3 text-gray-400 font-bold font-[roboto] text-sm">
          <div className="flex flex-col p-3 text-center">
            <h1>RATING</h1>
            <button className="flex p-2 gap-1 hover:bg-[hsla(0,0%,100%,.20)] rounded font-thin m-auto">
              <icon.StarFill className="text-yellow-500 text-xl" />
              <p>
                <span className="text-lg text-white">{movie ? movie.rating : ""}</span>/10
              </p>
            </button>
          </div>
          <div className="flex flex-col p-3 flex-wrap text-center">
            <h1>YOUR RATING</h1>
            <button className="flex p-2 gap-1 hover:bg-[hsla(0,0%,100%,.20)] rounded font-thin m-auto">
              <icon.Star className="text-blue-500 text-xl m-auto" />
              <p className="text-xl text-blue-500">Rate</p>
            </button>
          </div>

          <div className="flex flex-col p-3">
            <h1>POPULARITY</h1>
            <button className="flex p-2 gap-2 hover:bg-[hsla(0,0%,100%,.20)] rounded font-thin m-auto">
              <icon.HeartPulseFill className="text-red-500 text-xl m-auto" />
              <p className="text-xl text-white">30</p>
            </button>
          </div>
        </div>
      </div>
      {/* end Masthead */}
      {/* main */}
      <div className="flex flex-wrap gap-2 font-[rubik]">
        <div>
          <img src={movie ? `${movie.imgUrl}` : ""} alt={movie ? `${movie.title}` : ""} className="w-[320px] h-[450px]" />
        </div>
        <div className="relative ">
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
          <img src={movie ? `${movie.imgCover}` : ""} alt={movie ? `${movie.title}` : ""} className="w-[800px] h-[450px]" />
          <a href={movie ? `${movie.trailerUrl}` : ""} target="_blank" className="absolute bottom-0  text-white hover:text-yellow-500 px-4 py-2 rounded-md text-center flex">
            <icon.PlayCircleFill size={45} className=" hover:cursor-pointer mb-2 " />
            <p className="m-auto text-2xl ms-2 ">Watch Trailer</p>
          </a>
        </div>
        <div className="grid grid-rows-2 gap-2 flex-1">
          <div className="bg-[hsla(0,0%,100%,.08)] hover:bg-[hsla(0,0%,100%,.20)] flex flex-col hover:cursor-pointer">
            <div className="m-auto text-center text-white space-y-3">
              <icon.CameraReels className="md:text-4xl m-auto" />
              <p className="md:text-md">10 Videos</p>
            </div>
          </div>

          <div className="bg-[hsla(0,0%,100%,.08)] hover:bg-[hsla(0,0%,100%,.20)] flex flex-col hover:cursor-pointer">
            <div className="m-auto text-center text-white space-y-3">
              <icon.ImageFill className="md:text-4xl m-auto" />
              <p className="md:text-md">10 Photos</p>
            </div>
          </div>
        </div>
      </div>
      {/* main */}

      <div className="flex flex-wrap mb-5 py-5 font-[roboto] gap-2">
        {/* details */}
        <div className="grid grid-rows w-4/6 gap-3">
          <div className="badge badge-outline p-5">{movie ? `${movie.Genre.name}` : ""}</div>
          <div>
            <p className="mb-4">
              Synopsis : <span className="text-blue-500">{movie ? movie.synopsis : ""}</span>
            </p>
            <hr />
          </div>
          <div>
            <p className="mb-4">
              Author : <span className="text-blue-500 text-lg ms-2"> {movie ? movie.User.username : ""}</span>{" "}
            </p>
            <hr />
          </div>
          <div className="mb-3 grid grid-rows">
            <p className="mb-4">Casts :</p>
            <div className="flex flex-wrap">{movie ? movie.MovieCasts.map((e) => <CardCast name={e.Cast.name} profilePict={e.Cast.profilePict} key={e.id + "cast"} />) : ""}</div>
          </div>
          <div className="flex gap-2 mt-5">
            <p>See production, box office & company info</p>
          </div>
        </div>
        {/* details */}

        {/*next */}
        <div className="mt-16 md:ps-16 flex-1">
          <button className="w-full py-3 text-start px-3 bg-yellow-500 flex gap-3 text-black font-semibold mb-2">
            <icon.TicketPerforatedFill size={25} className="text-black text-xl" />
            <p>See Showtimes</p>
          </button>
          <button className="bg-[hsla(0,0%,100%,.08)] hover:bg-[hsla(0,0%,100%,.20)] flex w-full py-3 text-start px-3 gap-3">
            <icon.Plus size={25} className="text-white text-xl" />
            <p>Add to Watchlist</p>
          </button>
        </div>
        {/* next */}
      </div>
    </div>
  );
}

export default Detail;
