import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

function Category({setCategory}) {
    const dispatch =useDispatch();
    const {categories} =useSelector(state =>state.categories)

    console.log(categories,"categories");
    useEffect(() => {
      dispatch(getCategories())
    }, [dispatch])
    
  return (
    <div className='w-1/6 bg-slate-100 p-4 max-h-screen'>
      <div className='border-b pb-1 text-xl font-bold  px-2'>KATEGORİ</div>
      {
        categories?.map((category,i)=>(
          <div onClick={()=>setCategory(category)} className='text-lg  cursor-pointer hover:bg-slate-200 p-2' key={i}>{category}</div>
        ))
      }
    </div>
  )
}

export default Category
