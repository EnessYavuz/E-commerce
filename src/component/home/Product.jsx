import React from 'react'

function Product({product}) {
  return (
    <div className='w-[357px] p-2 mb-2 mx-2 border rounded-md relative cursor-pointer'>
      <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-slate-200 p-2 m-1'>{product?.price}<span className='text-sm'>TL</span></div>
      <img className=' w-[200px] h-[200px] object-contain m-auto' src={product?.image} alt="img" />
      <div className='text-center px-3 my-3 text-xl'>{product?.title}</div>
    </div>
  )
}

export default Product
