import React from "react";
import * as icon from "react-bootstrap-icons";
const CardMovieList = ({ title, image, id, imageCover, genre, trailer }) => {
  return (
    <>
      <div className="image-full rounded-none relative mb-10 bg-cover" style={{ backgroundImage: `url(${imageCover}` }} key={id + "movielist"}>
        <div className="hero-overlay h-[500px] bg-gradient-to-t from-black "></div>
        <div className="bg-gradient-to-r from-green-400 to-blue-500 absolute top-0 z-20"></div>
        <div className="absolute bottom-0 px-3 pb-2">
          <div className="flex gap-5">
            <div className="card md:w-58 bg-base-100 shadow-xl rounded-none font-[rubik] text-white relative">
              <figure>
                <img src={image} alt="" className="w-full md:h-72" />
              </figure>
            </div>
            <a href={trailer} target="_blank" className="flex mt-44 gap-4 text-white hover:text-yellow-500">
              <icon.PlayCircleFill size={70} />
              <div className="text-start">
                <h1 className="text-4xl mb-2">{title}</h1>
                <h1 className="text-xl ">{genre}</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMovieList;
