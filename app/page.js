"use client";
import React, { useState, useEffect } from "react";
import { getPosts, getCategories } from "@/services/index";
import Blogbanner from "@/components/Blogbanner";
import PostCard from "@/components/PostCard";
import Navbar from "@/components/Navbar";
import Latest from "@/components/Latest";
import Recent from "@/components/Recent";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await getPosts();
        setPosts(postData);

        const categoryData = await getCategories();
        setCategories(categoryData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllClick = () => {
    setSelectedCategory(null);
  };

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.node.categories.some(
          (category) => category.slug === selectedCategory
        )
      )
    : posts;

  return (
    <div>
      <div className="bg-[#F1C2D7]">
        <Navbar />
        <hr className="bg-black" />
        <Latest />
      </div>
      <div className="bg-yellow-50">
        <Recent />
        <div className="max-w-5xl mt-4 mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-4">
            <button
              onClick={handleAllClick}
              className={`mx-2 my-1 px-3 py-1 rounded-md ${
                selectedCategory === null
                  ? "bg-black text-white"
                  : "border-2 border-black text-black"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryClick(category.slug)}
                className={`mx-2 my-1 md:text-[16px] text-[12px] px-3 py-1 flex-wrap rounded-md ${
                  selectedCategory === category.slug
                    ? "bg-black text-white"
                    : "border-2 border-black text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mt-4 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loading
              ? Array.from({ length: 4 }, (_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-gray-100 h-40"
                  ></div>
                ))
              : filteredPosts.map((post) => (
                  <PostCard key={post.node.id} post={post.node} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
