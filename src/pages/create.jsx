import React from "react";
import { IoAlertCircle } from "react-icons/io5";

const Create = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-2 text-amber-500 items-center">
        <IoAlertCircle size={24} />
        <h1 className="font-semibold font-secondary text-lg">
          This feature will be coming soon!
        </h1>
      </div>
    </div>
  );
};

export default Create;
