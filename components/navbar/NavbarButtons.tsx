"use client"
import { ExerciseContext } from "@/context/ExerciseProvider";
import Link from "next/link";
import React, { useContext } from "react";

const NavbarButtons = () => {
  const context = useContext(ExerciseContext);
      if(!context){
        throw new Error ("Not Found")
      }
      const {todaysPlan,saved} = context;
  return (
    <div className="navbar-end flex">
      <Link href={"/myPlan"} className="font-inter font-medium text-[14px] ">
        <button className="btn bg-transparent text-[#D1D5DB] border-0 shadow-none px-1 md:px-4">
          Plan
          <span className="font-inter font-bold text-sm text-black bg-[#C2F800] px-2.5 py-0.5 rounded-full ml-1">
            {todaysPlan.length}
          </span>
        </button>
      </Link>
      <Link href={"/myPlan"} className="font-inter font-medium text-[14px] ">
        <button className="btn bg-transparent text-[#D1D5DB] border-0 shadow-none px-1 md:px-4">
          Saved
          <span className="font-inter font-bold text-sm text-white border-[#3c404d] border-2  px-2.5 py-0.5 rounded-full ml-1">
            {saved.length}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default NavbarButtons;
