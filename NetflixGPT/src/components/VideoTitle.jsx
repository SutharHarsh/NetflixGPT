import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen pt-80 pl-10 absolute bg-gradient-to-r from-black">
      <p className="text-5xl font-bold text-white">{title}</p>
      <p className="text-md w-1/3 py-4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black hover:bg-gray-300 text-xl font-bold px-6 p-2 rounded-lg cursor-pointer">
          Play
        </button>
        <button className="bg-gray-700/70 hover:bg-gray-800 text-white text-xl mx-3 font-bold px-6 p-2 rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
