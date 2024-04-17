"use client";
import React from "react";
import { getPostDetails } from "@/services";
import PostDetail from "@/components/PostDetails";

import Author from "@/components/Author";
import Navbar from "@/components/Navbar";

const Page = ({ params }) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostDetails(params.slug);
        setPost(postData);
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (!post) {
    return (
      <div className="bg-white flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className=" h-[100%]">
      <Navbar />
      <PostDetail post={post} />
    </div>
  );
};

export default Page;
