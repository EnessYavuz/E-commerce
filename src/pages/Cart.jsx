import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from 'react-router-dom'
import { getCartTotal } from "../redux/cardSlice";
import CartCom from "../component/cart/CartCom";

function Cart() {
  const dispatch = useDispatch();
  //const navigate =useNavigate()
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, i) => (
            <CartCom key={i} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl">toplam tutar :  <span className="font-bold text-3xl h-10 mx-3  "> {totalAmount} </span> TL</div>
        </div>
      ) : (
        <div>kartınız boş .....</div>
      )}
    </div>
  );
}

export default Cart;
