import React from 'react'
import NavbarLeft from "./NavbarItem/Navbarleft.jsx"
import NavbarRight from "./NavbarItem/NavbarRight.jsx"
function Navbar() {
  return (
    <div className='flex items-center justify-between my-5  '>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
