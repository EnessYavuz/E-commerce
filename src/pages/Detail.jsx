import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDeatailProduct } from '../redux/productSlice';
import { useEffect } from 'react';
import DetailComp from '../component/detail/DetailComp';
import Loading from '../component/loading/Loading';


function Detail() {

    const {id} = useParams();
    const dispatch = useDispatch()
    const {productDetail,productDetailStatus} =useSelector(state=>state.products)


    useEffect(() => {

        dispatch(getDeatailProduct(id))

    }, [dispatch,id])
    

    console.log(productDetail,"productDetail")
  return (
    <div>
        {
            productDetailStatus === "LOADING" ? <Loading/>:<DetailComp productDetail={productDetail}/>
        }
      
    </div>
  )
}

export default Detail
