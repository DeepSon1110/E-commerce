import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='flex md:justify-center justify-between lg:justify-around border-2 border-gray-500 px-6 flex-wrap bg-red-500 md:bg-green-400'>
    <Link to= {"/login"}>Login</Link>
    <Link to= {"/"}>Home</Link>
    <Link to= {"/register"}>Register</Link>
    <Link to= {"/forgot-password"}>ForgotPassword</Link>
    <Link to= {"/reset-password"}>ResetPassword</Link>
    <Link to= {"/verify-otp"}>VerifyOtp</Link>
   </nav>
  )
}

export default Navbar