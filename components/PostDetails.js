// Import dependencies and getPosts function
import React, { useState, useEffect } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../services/index";
import Author from "./Author";
import { CiCalendarDate } from "react-icons/ci";

const PostDetail = ({ post }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        const shuffledPosts = shuffleArray(data); // Shuffle the posts array
        setPosts(shuffledPosts.slice(0, 4)); // Keep the first 5 shuffled posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const renderers = {
    a: ({ children, openInNewTab, href, ...rest }) => {
      // Check if the href starts with "http://" or "https://"
      const isExternalLink =
        href.startsWith("http://") || href.startsWith("https://");

      // If it's not an external link, prepend "http://"
      const correctedHref = isExternalLink ? href : `http://${href}`;

      return (
        <a
          href={correctedHref}
          target="_blank"
          rel={openInNewTab ? "noopener noreferrer" : ""}
          style={{ color: "blue" }}
          {...rest}
        >
          {children}
        </a>
      );
    },
    // Custom renderer for videos
    video: ({ src, title }) => (
      <video controls style={{ width: "100%" }} title={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    // Custom renderer for paragraphs
    p: ({ children }) => <p className="paragraph mb-7">{children}</p>,

    // ... add other custom renderers if needed
  };

  return (
    <div>
      {/* Post content */}

      <div className="max-w-[780px]  pt-10 mx-auto px-5 ">
        {/* Post title */}
        <h2 className="inline-block lg:text-2xl text-xl z-50 py-0.5 pl-3 text-heading font-semibold relative mb-7 ">
          {post.title}
        </h2>
        {/* Post meta */}
        <div className="flex gap-2 items-center">
          <Image
            src={post.author?.photo?.url}
            alt={post.author?.name}
            className="align-middle object-cover rounded-full w-[50px] h-[50px]"
            width={40}
            height={40}
          />
          <div>
            <Author author={post.author} />
            <div className="flex items-center gap-1">
              <CiCalendarDate />
              <p className="text-primary pt-1 font-semibold text-[10px]">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-4 h-1" />
      </div>
      <div className="w-full font-mont mt-10 h-full ">
        <Image
          className="w-full h-[350px] object-cover"
          src={post.featuredImage?.url}
          alt={post.title}
          width={1000}
          height={1000}
        />
      </div>
      {/* Post content */}
      <div className="max-w-[780px] px-5 font-mont mt-20 mx-auto w-full ">
        <div className=" text-black">
          <div className="">
            <div className="w-full lg:text-lg text-sm">
              <RichText content={post.content.raw} renderers={renderers} />
            </div>
          </div>
        </div>
        <div className=" ">
          <h3 className="lg:text-[13px] font-bold text-[14px] mt-[40px] lg:mt-[0px]font-semibold mb-4">
            You might also like:
          </h3>
          <div className="grid grid-cols-2  gap-5">
            {posts.map(({ node: randomPost }, index) => (
              <Link key={randomPost.slug} href={`/post/${randomPost.slug}`}>
                <div className="" key={index}>
                  <Image
                    src={randomPost.featuredImage?.url}
                    alt={randomPost.title}
                    width={400}
                    height={400}
                    className="object-cover h-[150px]"
                  />
                  <div className="py-3">
                    <h4 className="text-[10px] font-semibold mb-2">
                      {randomPost.title}
                    </h4>
                    <div className="flex items-center gap-1">
                      <CiCalendarDate />
                      <p className="text-[10px]">
                        {moment(randomPost.createdAt).format("MMM DD, YYYY")}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Random post suggestions */}
    </div>
  );
};

export default PostDetail;
