import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoBusiness } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";

const Navbar = ({ setCategory, category }) => {
  const handleClick = (value) => {
    setCategory(value);
    console.log(value);
    console.log(category);
  }

  return (
    <div className='NavBar text-2xl ps-3 pt-2  grid items-center border-slate-800 border-b-2 sticky top-0 bg-[#0f172abf]' style={{ gridTemplateColumns: '0.6fr auto', height: '80px' }}>
      <div className="text-slate-300">Khabri</div>
      <div className="flex gap-x-4 pe-10 text-2xl">
        <div className="flex items-center" onClick={() => handleClick('general')}>
          <IoHome size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Home</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('sports')}>
          <MdOutlineSportsCricket size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Sports</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('science')}>
          <SiBookstack size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Science</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('entertainment')}>
          <PiTelevisionSimpleFill size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Entertainment</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('technology')}>
          <HiOutlineDesktopComputer size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Technology</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('business')}>
          <IoBusiness size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Business</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('health')}>
          <CiHospital1 size={25} className='text-[#4E5283] mr-1' />
          <span className='text-slate-300 hover:text-[#0ea5e9]'>Health</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
