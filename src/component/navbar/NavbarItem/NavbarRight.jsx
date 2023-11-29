import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosBasket } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cardSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavbarRight() {
  const dispatch = useDispatch()
   const navigate =useNavigate()
const {itemCount} = useSelector(state=>state.carts)


  useEffect(() => {

    dispatch(getCartTotal())

  }, [dispatch])
  

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input className="bg-gray-200 outline-none bg-fixed" type="text" placeholder="arama yap laa !!!" />
        <CiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div onClick={()=>navigate("cart")} className="relative cursor-pointer">
        <div className="absolute  -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{itemCount}</div>
        <IoIosBasket  size={28} />
      
      </div>
      
    </div>
  );
}

export default NavbarRight;
