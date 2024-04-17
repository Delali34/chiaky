import React from "react";

const Latest = () => {
  return (
    <section className="max-w-5xl py-20 mx-auto px-5">
      {" "}
      <div className="flex md:flex-row flex-col justify-between gap-10 md:items-center">
        <div className="md:w-[50%] flex-1 text-3xl font-bold">
          Welcome to my Blog
        </div>

        <div className="md:w-[50%] w-[80%] flex-1">
          <div>
            {" "}
            This is the best place to be when you want to read amazing articles
            put together.{" "}
          </div>
          <p className="mt-5 bg-black text-white p-4">
            Get a cup of coffee🍵 and<span> enjoy😍</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Latest;
