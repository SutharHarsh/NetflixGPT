import React, { useState } from "react";
import lang from "../utils/lang";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const langName = useSelector((state) => state.config.langName);
  return (
    <div>
      <form className="pt-[10%] text-white flex justify-center gap-5">
        <input
          className=" w-md p-4 bg-gray-700 border-gray-700 rounded-md shadow-2xl"
          type="text"
          placeholder={lang[langName].gptSearchPlaceholder}
        />
        <button className="bg-red-700 hover:bg-red-800 px-10 p-4 rounded-md text-white cursor-pointer">{lang[langName].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
