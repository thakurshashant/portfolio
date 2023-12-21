import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1687991242328-d4220043d1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold tetx-gray-800">
            I'm Shashant Thakur
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 ">
            I'm
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "_Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "_Coder",
                2000,
                "_Tech Enthusiast",
                2000,
                "'_D's friend",
                2000,
                "_Software Engineer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddningLrft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
