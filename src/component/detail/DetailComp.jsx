import React from 'react'
import { useState } from 'react';

function DetailComp({ productDetail }) {
    const [quantiy, setQuantiy] = useState(0)
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
            <div onClick={()=>quantiy>0 && setQuantiy(quantiy-1)} className='text-5xl cursor-pointer'>-</div>
            <input className=' w-12 text-3xl text-center' type="text" value={quantiy} />
            <div onClick={()=>productDetail?.rating?.count>quantiy && setQuantiy(quantiy+1)}  className='text-3xl cursor-pointer'>+</div>
          </div>
          <div className='my-4'>
          <button className='bg-lime-700 px-4 py-2 text-white'>Sepete Ekle</button>
        </div>
        </div>
      </div>
    );
  }

export default DetailComp
