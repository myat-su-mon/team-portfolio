import React from "react";
import Nav from "../Navbar/Nav";
import img from "../../assets/heroSection.svg";

const HeroRight = () => {
  return (
    <>
      <div className="flex flex-col w-[50%] relative">
        <Nav />
        <div className=" absolute bottom-20 left-[-130px]">
          <img className=" w-3/5" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroRight;
