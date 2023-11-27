import React from 'react'
import SliderComp from '../component/home/SliderComp'
import Sorting from '../component/home/Sorting'
import Category from '../component/home/Category'
import Products from '../component/home/Products'

function Home() {
  return (
    <div>
      <SliderComp/>
      <Sorting/>
      <div className='flex'>
      <Category/>
      <Products/>
      </div>
    </div>
  )
}

export default Home
