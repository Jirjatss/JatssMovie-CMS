import React from "react";
import * as icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const CardMvoie = ({ title, image, id, rating, slug, trailerUrl }) => {
  return (
    <>
      <div className="card lg:h-[500px] bg-[hsla(0,0%,100%,.10)]  hover:bg-[hsla(0,0%,100%,.20)]  shadow-xl rounded-none font-[rubik] text-white relative mx-2" key={id}>
        <button className="absolute -top-1 -left-3 hover:opacity-100 opacity-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            <path d="M 37 48 C 36.824219 48 36.652344 47.953125 36.496094 47.863281 L 25 41.15625 L 13.503906 47.863281 C 13.195313 48.042969 12.8125 48.046875 12.503906 47.867188 C 12.191406 47.6875 12 47.359375 12 47 L 12 3 C 12 2.449219 12.449219 2 13 2 L 37 2 C 37.554688 2 38 2.449219 38 3 L 38 47 C 38 47.359375 37.808594 47.6875 37.496094 47.867188 C 37.34375 47.957031 37.171875 48 37 48 Z" />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="30" fontWeight="thin" fill="white">
              +
            </text>
          </svg>
        </button>

        <figure>
          <img src={image} alt="" className="w-full md:h-72" />
        </figure>
        <div className="pt-2 pb-6 px-3 ">
          <div className="flex gap-3">
            <div className="flex gap-2 py-2">
              <icon.StarFill size={20} className="text-yellow-500" /> {rating}
            </div>

            <button className="flex rounded hover:bg-[hsla(0,0%,100%,.08)] px-3 py-2">
              <icon.Star size={20} className="text-blue-300" />
            </button>
          </div>

          <div className="mb-20 mt-2 ms-2">{title}</div>
        </div>
        <div className="absolute bottom-0 w-full p-3">
          <div className="m-auto space-y-2">
            <div className="w-full rounded bg-[hsla(0,0%,100%,.08)] hover:bg-[hsla(0,0%,100%,.20)]">
              {slug ? (
                <Link to={`/detail/${slug}`} className="px-2 py-1 text-blue-300 flex m-auto justify-center">
                  Detail Movie
                </Link>
              ) : (
                <button className="px-2 py-1 text-blue-300 flex m-auto justify-center ">
                  <icon.Plus size={25} />
                  <p>Watchlist</p>
                </button>
              )}
            </div>
            <a href={trailerUrl} target="_blank" className="px-5 py-1 flex justify-center rounded hover:bg-[hsla(0,0%,100%,.08)] text-white hover:cursor-pointer">
              <icon.PlayFill color="whitesmoke" size={25} />
              Trailer
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMvoie;
