import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cardSlice';

function DetailComp({ productDetail }) {

  const dispatch =useDispatch()

    const [quantity, setQuantity] = useState(0)

    const addBaket =()=>{
      dispatch(addToCart({id:productDetail?.id,title:productDetail?.title,image:productDetail?.image,quantity:quantity,price:productDetail?.price}))
    }

    const decrement =()=>{
      if(quantity > 0 ) setQuantity(quantity-1)
    }
    const increment =()=>{
      if(quantity < productDetail?.rating?.count ) setQuantity(quantity+1)
    }

    return (
      <div className='flex gap-10 my-10'>
        <img className='w-[400px] h-[500px] object-contain' src={productDetail?.image} alt="img" />
        <div className='flex flex-col ml-4'>
          <div className='flex text-4xl font-bold text-center '>
            {productDetail?.title}
          </div>
          <div className='my-6'>{productDetail?.description}</div>
          <div className='my-2 text-xl'>rating : {productDetail?.rating?.rate}</div>
          <div className='my-2 text-xl'>count :  {productDetail?.rating?.count}</div>
          <div className='my-2 text-5xl font-bold'>{productDetail?.price} <span className='text-sm'>TL</span></div>
          <div className='flex items-center gap-2 my-4'>
            <div onClick={decrement} className='text-5xl cursor-pointer'>-</div>
            <input className=' w-12 text-3xl text-center' type="text" value={quantity} />
            <div onClick={increment}  className='text-3xl cursor-pointer'>+</div>
          </div>
          <div className='my-4 '>
          <div onClick={addBaket} className='bg-lime-700 p-2  text-white cursor-pointer text-2xl text-center'>Sepete Ekle</div>
        </div>
        </div>
      </div>
    );
  }

export default DetailComp
