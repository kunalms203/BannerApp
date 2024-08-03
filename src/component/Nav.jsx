import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-between w-[100vw] px-4 pt-2 bg-white top-2 fixed'>
      <div className='text-2xl font-bold logo text-sky-500 hover:scale-105 pr-4'>
        <h2>BannerAPP</h2>
      </div>
      <div className='p-1'>
        <Link  className='text-xl font-bold m-2 hover:text-sky-500' to={"/"}>Home</Link>
        <Link  className='text-xl font-bold m-2 hover:text-sky-500' to={"/contact"}>Contact Us</Link>
        <Link  className='text-xl font-bold m-2 hover:text-sky-500' to={"/edit"}>Create Your Own</Link>
      </div>
    </div>
  )
}

export default Nav
