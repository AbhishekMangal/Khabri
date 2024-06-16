import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
const Navbar = () => {
  return (
    <div className='NavBar  text-2xl pb-3  ps-3 pt-2 min-h-[3.5rem] mb-2 grid ' style={{gridTemplateColumns: '2fr auto'}}>
      <div className=" text-slate-300 ">NavBar</div>
      <div className=" flex gap-x-4 pe-10 ">
        <div className="flex items-center">
            <IoHome size={25} className='text-[#4E5283]' />
            <span className='text-slate-300 hover:text-[#0ea5e9]'>Home</span>
        </div>
        <div className="flex items-center">
            <MdOutlineSportsCricket size={25} className='text-[#4E5283]' />
            <span className='text-slate-300 hover:text-[#0ea5e9]'>Sports</span>
        </div>
        <div className="flex items-center">
            <SiBookstack size={25} className='text-[#4E5283]' />
            <span className='text-slate-300 hover:text-[#0ea5e9]'>Education</span>
        </div>
        <div className="flex items-center">
            <PiTelevisionSimpleFill size={25} className='text-[#4E5283]' />
            <span className='text-slate-300 hover:text-[#0ea5e9]'>Entertainment</span>
        </div>

      </div>
    </div>
  )
}

export default Navbar
