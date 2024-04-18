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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        setPosts(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <Navbar />
        <hr className="bg-black" />
        <Latest />
      </div>
      <div className="bg-[#f7f1e1]">
        <Recent />

        <div className="max-w-5xl mt-10 mx-auto h-[100%] pb-10 w-full">
          <div>
            {/* {posts[0] && <Blogbanner post={posts[0].node} />} */}
            {/* <Categories /> */}
            <div className="px-5 mb-8">
              <div className="lg:mt-20 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {loading
                    ? // Render loading skeleton when data is loading
                      Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="flex">
                          {/* Skeleton */}
                          <div className="animate-pulse w-full bg-gray-100 h-[180px]"></div>
                        </div>
                      ))
                    : // Render post cards when data is fetched
                      posts.map((post, index) => (
                        <div key={index} className="flex">
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
