import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="max-w-5xl py-5 mx-auto px-5">
      {" "}
      <div className="flex justify-between items-center">
        <div className="">
          <Link href="/about">
            <h1 className="text-black border p-2 rounded-e-full hover:bg-black cursor-pointer hover:text-white  duration-150">
              About
            </h1>
          </Link>
        </div>
        <Link href="/">
          {" "}
          <div className="flex cursor-pointer items-center gap-1">
            <p className="text-sm ">ChiakyOtuteye</p>
            <Image
              src="/WhatsApp Image 2024-01-28 at 7.30.59 PM.jpeg"
              width={500}
              height={500}
              className="rounded-full object-cover border- w-[30px] h-[30px] "
              alt=""
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
