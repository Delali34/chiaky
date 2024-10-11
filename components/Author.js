import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="">
      <div></div>
      <div className="">
        <h3 className=" text-sm font-semibold">{author.name}</h3>
      </div>
    </div>
  );
};

export default Author;
