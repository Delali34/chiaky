import React from "react";
import { MdOutlineTrendingFlat } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

const Recent = () => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto ">
        {" "}
        <div className="flex text-2xl py-5 text-gray-500  px-5 duration-100 cursor-pointer   items-center gap-1">
          <FaArrowTrendUp className="bg-black text-white p-1 rounded-full" />
          Trending
        </div>
      </div>
      <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700" />
    </section>
  );
};

export default Recent;
