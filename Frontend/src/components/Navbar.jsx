import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='flex gap-5 border-4 border-gray-500 px-3'>
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