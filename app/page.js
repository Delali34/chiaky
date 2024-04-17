"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getPosts } from "@/services/index";
import Blogbanner from "@/components/Blogbanner";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";
import Latest from "@/components/Latest";
import Recent from "@/components/Recent";

const Page = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-[#FFC017]">
        <Navbar />
        <hr className="bg-black " />
        <Latest />
      </div>
      <div className="bg-[#f7f1e1]">
        <Recent />

        <div className="max-w-5xl mt-10 mx-auto h-[100%] pb-10 w-full">
          <div>
            {/* {posts[0] && <Blogbanner post={posts[0].node} />} */}
            {/* <Categories /> */}
            <div className="  px-5 mb-8">
              <div className="lg:mt-20 mt-10">
                <div className="grid grid-cols-1  md:grid-cols-2  gap-10">
                  {posts.map((post, index) => (
                    <div key={index} className="flex ">
                      <PostCard post={post.node} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
