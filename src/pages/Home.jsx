import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex flex-col gap-y-4 lg:flex-row items-center justify-center w-full h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[15vw] text-slate-300 dark:text-slate-50 font-bold lg:tracking-wide lg:leading-tight lg:shadow-md md:hover:text-slate-400">
            VB.STORE
          </h1>
          <img
            src="https://th.bing.com/th/id/R.f0b497c288c8efca53cfcf7e3c1ebadf?rik=nQXizqwUBW54bA&pid=ImgRaw&r=0"
            alt="img"
            className="absolute w-[90vw] h-[90vw] max-w-[500px] max-h-[500px] object-cover md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] hover:translate-y-4 transition-all ease-in-out duration-1000"
          />
        </div>
        <button className="bg-[#2a2a2a] dark:bg-slate-800 text-white p-2 rounded-md cursor-pointer hover:bg-black">
          <Link to="/explore">Explore Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
