import React from 'react'
import Child from './Child'

const Navbar = () => {
  return (
    <>
    <div className='navbar bg-gray-950 text-white py-6 px-20 flex justify-between items-center '>
        <h1 className='font-bold text-3xl'>Navbar</h1>
        <ul className='flex gap-10 font-semibold '>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><Child/></li>
        </ul>
    </div> 
    </>
  )
}
export default Navbar
