import React from "react";

const GptSearchBar = () => {
  return (
    <div>
      <form className="pt-[10%] text-white flex justify-center gap-5">
        <input
          className=" w-md p-4 bg-gray-700 border-gray-700 rounded-md shadow-2xl"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-700 hover:bg-red-800 px-10 p-4 rounded-md text-white cursor-pointer">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
