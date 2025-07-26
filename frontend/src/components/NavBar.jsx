import { useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 pt-8">
        {/* Logo at left */}
        <div className="absolute left-7 top-10 -translate-y-1/2">
            <a href="#">
              <img
              src="/avenir-logo.png"
              alt="Avenir Souriant Logo"
              className="h-24 w-auto object-contain hover:shadow duration-300 rounded-md"
            />
            </a>
        </div>

        {/* Spacer to keep layout balanced */}
        <div className="w-32"></div>

        {/* Register, Login at right */}
        <div className="space-x-5">
            <Link to="/register" className="hover:text-black cursor-pointer">Register</Link>
            <Link to="/login" className="hover:text-black cursor-pointer">Login</Link>
        </div>
    </div>
  )
}

export default NavBar