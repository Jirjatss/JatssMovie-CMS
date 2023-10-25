import React from "react";

function CardCast({ name, profilePict }) {
  return (
    <div className="flex flex-col mx-2 ">
      <div className="w-48 h-48 bg-cover rounded-full m-auto" style={{ backgroundImage: `url(${profilePict})` }}></div>
      <p className="text-center mt-5">{name}</p>
    </div>
  );
}

export default CardCast;
