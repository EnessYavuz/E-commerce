import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosBasket } from "react-icons/io";

function NavbarRight() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input className="bg-gray-200 outline-none bg-fixed" type="text" placeholder="arama yap laa !!!" />
        <CiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div className="relative">
        <div className="absolute  -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">3</div>
        <IoIosBasket size={28} />
      
      </div>
      
    </div>
  );
}

export default NavbarRight;
