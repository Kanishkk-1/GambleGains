import React from "react";
import ruppee from "../assets/ruppee.svg";

const AddMoney = ({ hidden }) => {
  return (
    <div
      hidden={hidden}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-4 border-[#1b2c39] rounded-xl animate-popup bg-slate-800 text-white w-96 h-96"
    >
      <div className="h-full relative flex flex-col w-full items-center">
        <button
          onClick={() => {}}
          className="absolute right-4 top-2 cursor-pointer"
        >
          x
        </button>
        <div>
            <h1 className="text-xl font-bold mt-5">Add Money</h1>
            
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
