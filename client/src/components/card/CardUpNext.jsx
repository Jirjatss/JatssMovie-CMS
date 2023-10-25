import * as icon from "react-bootstrap-icons";
function CardUpNext({ image, title, genre, id, trailerUrl }) {
  return (
    <div className="flex gap-3" key={id + "upnext"}>
      <figure className="hover:cursor-pointer relative">
        <img src={image} alt="" className="md:w-24 md:h-32" />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity"></div>
      </figure>
      <a href={trailerUrl} target="_blank" className="my-auto text-white hover:text-yellow-500 hover:cursor-pointer">
        <icon.PlayCircleFill size={30} className="mb-2" />
        <h1 className="text-sm mb-1">{title}</h1>
        <h1 className="text-xs">{genre}</h1>
      </a>
    </div>
  );
}

export default CardUpNext;
