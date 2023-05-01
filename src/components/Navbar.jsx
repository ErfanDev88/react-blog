import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] h-20 bg-neutral-500 rounded-lg mt-6 flex justify-center items-center gap-x-64">
        <h1 className="text-4xl text-white font-black"><Link to={'/'}>New News</Link></h1>
        <ul className="flex gap-x-5">
          <li className="text-white text-base font-light"><Link to={'/'}>Home</Link></li>
          <li className="text-white text-base font-light">Blog</li>
          <li className="text-white text-base font-light">Contact us</li>
        </ul>
        <button className="w-20 h-10 rounded-lg bg-white text-neutral-700 font-bold">
          Log in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
