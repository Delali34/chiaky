import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <div className=" font-mont">
      <Navbar />
      <hr />
      <div className="max-w-5xl flex items-center md:justify-center mx-auto">
        <div>
          <Image
            src="/WhatsApp Image 2024-01-28 at 7.30.59 PM.jpeg"
            width={1000}
            height={1000}
            alt=""
            className="w-[120px]  h-[120px] rounded-full object-cover p-5"
          />
        </div>
        <div className="">
          <p className="text-2xl font-bold">Chiaky Otuteye</p>
        </div>
      </div>
      <hr />
      <div className="max-w-5xl w-full mx-auto lg:p-10 p-5">
        <div>
          <p className="w-full ">
            Hello, my name is Chiaky Otuteye, and when I can’t stop thinking
            about something, I write it down. I have always wondered why
            important issues that affect everyone are discussed in language that
            the average person, like you and I, find difficult to understand.
          </p>
          <p className="w-full pt-2">
            As a result, a lot of us do not have a lot of interest in some of
            these issues of politics, culture, health, policies, the economy
            among others, not because we do not care, but because we usually do
            not understand how they affect us. While I understand that some
            fields have their own terminology, I also believe that information
            should be easily accessible to everyone, and that’s what Musings of
            A Concerned African Woman is really about.
          </p>

          <p className="pt-2">
            {" "}
            My goal is to bring the issues that affect the world, especially my
            African brothers and sisters, right to your doorstep in easily
            understandable and digestible language. Conversation is important,
            and that is something I hope to see here. Through these
            thought-provoking pieces, I will share my thoughts, and I will
            encourage you to do same. We all have a role to play in creating the
            world we see, and all we have is each other
          </p>
          <hr className="mt-10" />
          <div className="">
            <h1 className="text-center pt-5 font-semibold">Get In Touch</h1>
            <div className="flex gap-2 justify-center">
              <Link
                href="https://www.linkedin.com/in/chiaky-otuteye-md-a85464145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <div className="mt-10">
                  <FaLinkedin className="text-4xl hover:scale-105" />
                </div>
              </Link>
              <Link href="https://x.com/thechiaky?s=21" target="_blank">
                <div className="mt-10">
                  <FaXTwitter className="text-4xl hover:scale-105" />
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/thechiaky?igsh=cGZxeG9hdzczMzFr&utm_source=qr"
                target="_blank"
              >
                <div className="mt-10">
                  <FaInstagramSquare className="text-4xl hover:scale-105 " />
                </div>
              </Link>
              <Link href="Stephaniecotuteye@gmail.com" target="_blank">
                <div className="mt-10">
                  <MdAttachEmail className="text-4xl hover:scale-105" />
                </div>
              </Link>
            </div>
          </div>

          <hr className="mt-10" />
        </div>
      </div>
    </div>
  );
};

export default page;
