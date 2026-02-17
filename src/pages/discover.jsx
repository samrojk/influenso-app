import React from "react";
import { IoFilterSharp } from "react-icons/io5";

const discover = () => {
  return (
    <div className="mx-12 mt-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-semibold">Discover</h1>
        <button><IoFilterSharp size={24}/></button>
      </div>
    </div>
  );
};

export default discover;
