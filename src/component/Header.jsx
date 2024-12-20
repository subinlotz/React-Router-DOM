import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between items-center h-20 pl-10 pr-10 text-2xl bg-white'>
      <div>   
        <Link to="/" ><img className='w-28' src="https://www.nicepng.com/png/full/246-2467676_contact-us-to-get-started-with-your-new.png" alt="Demo Logo" /></Link>
      </div>
      <div className='flex gap-3'>
      <Link  to="/" >Home</Link>
      <Link to="dashboard" >Dashboard</Link>
      </div>
      <div className='mr-4 flex gap-3'>
        <Link to='login'><button className='bg-blue-500 text-white w-36  rounded-lg h-12'>Login</button></Link>
        <Link to='signup'><button className='bg-blue-500 text-white w-36  rounded-lg h-12'>Signup</button></Link>
      </div>
    </div>
  )
}

export default Header
