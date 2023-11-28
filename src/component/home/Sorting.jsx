import React from 'react'

function Sorting({setSort}) {
  return (
    <div className='bg-slate-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={e=>setSort(e.target.value)} className='bg-white py-3 px-6' name="" id="">
        <option disabled value="">Seciniz</option>
        <option  value="inc">Artan</option>
        <option  value="dec">Azalan</option>
      </select>
    </div>
  )
}

export default Sorting
