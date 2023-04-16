import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
      <div className="flex gap-20 w-[100%] items-center font-bold justify-center shadow-lg h-[60px]">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        <NavLink to={"/contact"}>CONTACT US</NavLink>
      </div> 
  );
};

export default Nav;
