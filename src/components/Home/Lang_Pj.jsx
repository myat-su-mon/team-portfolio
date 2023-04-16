import React from "react"
import { langData } from "../../data/languages";
import Project from "./Project";

const Lang_Pj = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-20 gap-10">
        <div>
          <h2 className=" text-2xl ">
            We're Using this language for your Bussiness
          </h2>
          <hr className=" border-b-2 border-[#A30CFF] w-48 mt-2" />
        </div>
        <div className="flex gap-16 items-center">
          {langData.map((img) => {
            return (
              <div key={img.id}>
                <img className=" w-28" src={img.img} alt="" />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center">
          <h2 className=" text-3xl font-bold">
            OUR<span className=" text-[#A30CFF]"> PROJECT</span>
          </h2>
            <Project/>
        </div>
      </div>
    </>
  );
};

export default Lang_Pj;
