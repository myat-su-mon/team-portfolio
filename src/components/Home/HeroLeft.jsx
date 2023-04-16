import React from "react";
import upwork from "../../assets/upwork-logo.png";

const HeroLeft = () => {
  return (
    <>
      <div className=" w-[50%] flex flex-col items-center py-52 bg-[#A30CFF] shadow-lg rounded-b-lg">
        <div className=" flex flex-col gap-4 ">
          <p className=" text-white text-4xl font-bold">UPDATE</p>
          <p className="text-4xl font-bold">
            {" "}
            <span className="text-white">YOUR</span> BUSINESS
          </p>
          <p className="text-white text-lg">
            We've been helping customer globally.
          </p>
          <div className="flex gap-5">
            <button className=" bg-white rounded-md px-6 py-1">
              GET STARTED
            </button>
            <button className=" bg-white rounded-md px-6 py-1 w-24">
              <img src={upwork} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
