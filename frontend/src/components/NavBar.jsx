import { useState } from 'react'

function NavBar() {
    const [] = use

  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-[#FADADD]">
        {/* Logo at left */}
        <div className="">
            <img src="" alt="Logo Avenir Souriant" className="h-10" />
        </div>
        
        {/* Register, Login at right */}
        <div className="space-x-4">
            <a href="#" className="hover:text-black">Register</a>
            <a href="#" className="hover:text-black">Login</a>
        </div>
    </div>
  )
}

export default NavBar 