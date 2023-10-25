import React from "react";

function Title({ title }) {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold flex text-white border-l-4  border-yellow-500 px-2 ">{title}</h1>
    </>
  );
}

export default Title;
