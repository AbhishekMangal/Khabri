import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoBusiness } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import logo from '../Favicon/logo.png'

const Navbar = ({ setCategory, category }) => {

  const handleClick = (value) => {
    setCategory(value);
    console.log(value);
    console.log(category);
  }

  return (
    <div className='NavBar text-2xl ps-3 pt-2  grid items-center border-slate-800 border-b-2 sticky top-0 bg-[#0f172abf]' style={{ gridTemplateColumns: '1fr auto', height: '80px' }}>
      <div className="text-slate-300 flex ">
       <img src={`${logo}`} alt="" className='h-8 pe-3 ms-3' />  
         <span>KHABRI</span>
      </div>
      <div className="flex gap-x-4 pe-10 text-xl">
        <div className="flex items-center" onClick={()=>setCategory('general')}>
          <IoHome size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'general' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}> Home</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('sports')}>
          <MdOutlineSportsCricket size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'sports' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>
            Sports
          </span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('science')}>
          <SiBookstack size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'science'? 'text-[#0ea5e9]': 'text-[#4E5283]'}`}> Science</span>

        </div>
        <div className="flex items-center" onClick={() => handleClick('entertainment')}>
          <PiTelevisionSimpleFill size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'entertainment'? 'text-[#0ea5e9]': 'text-[#4E5283]'}`}>Entertainment</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('technology')}>
          <HiOutlineDesktopComputer size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'technology'? 'text-[#0ea5e9]': 'text-[#4E5283]'}`}>Technology</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('business')}>
          <IoBusiness size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'business'? 'text-[#0ea5e9]': 'text-[#4E5283]'}`}>Business</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('health')}>
          <CiHospital1 size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'health'? 'text-[#0ea5e9]': 'text-[#4E5283]'}`}>Health</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
