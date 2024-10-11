import React from "react";
import moment from "moment";
import Link from "next/link";
import { getCategories } from "@/services";
import { FaRegNewspaper } from "react-icons/fa";
import Image from "next/image";

const PostCard = ({ post }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className=" font-mont">
      <div className="">
        <div className="relative  cursor-pointer ">
          <div className="overflow-hidden ">
            {" "}
            <Link href={`/post/${post.slug}`}>
              <Image
                width={1000}
                height={1000}
                className="w-[500px] h-[200px] overflow-hidden object-cover hover:scale-110 transition duration-700 "
                src={post.featuredImage.url}
                alt=""
              />
            </Link>
          </div>

          {/* <div className="gradient-overlay3"></div> */}
          <Link href="/">
            <div className="text-black/90 mt-5">
              <h2 className="text-sm flex items-center gap-2">
                <FaRegNewspaper />
                {post.categories[0]?.name || "Category"}
              </h2>
            </div>
          </Link>
          <Link href={`/post/${post.slug}`}>
            <div className="   text-black py-3 ">
              <h2 className="md:text-[16px] text-[13px] text-gray-500 hover:text-black duration-100 font-medium">
                {post.title}
              </h2>
              <p className="text-[10px]">{post.excerpt}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
