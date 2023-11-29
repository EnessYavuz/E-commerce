import React from 'react'
import { removeFromCart } from '../../redux/cardSlice'
import { useDispatch } from 'react-redux'

function CartCom({cart}) {
  const dispatch =useDispatch()
  return (
    <div className='my-5 flex items-center justify-between gap-3'>
      <img className='w-[150px] h-[150px] object-contain'  src={cart?.image} alt="img" />
      <div className='w-[476px]'>
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div>{cart?.price} TL <br /> ({cart?.quantity}) Adet </div>
      <div onClick={()=>dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white   p-2 cursor-pointer w-[100px] h-14 flex items-center justify-center '>Ürün Sil</div>
    </div>
  )
}

export default CartCom
