import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoBusiness } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../Favicon/logo.png';

const Navbar = ({ setCategory, category, setKeyword }) => {
  const [inputValue, setInputValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = (value) => {
    setCategory(value);
    setMenuOpen(false)
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setKeyword(inputValue);
   
  };

  const clearInput = () => {
    setInputValue('');
  };

  const toggleMenu = ()=>
    {
      setMenuOpen(!menuOpen);
    }

  return (
    <div className='NavBar text-lg md:text-2xl ps-3 pt-2 grid items-center border-slate-800 border-b-2 sticky top-0 bg-[#0f172abf]' style={{ gridTemplateColumns: 'auto 1fr auto', height: '80px' }}>
       <div className="md:hidden flex items-center justify-end pr-3">
        <button onClick={toggleMenu} className="text-3xl text-slate-300 focus:outline-none">
          &#8801;
        </button>
      </div>
      <div className="text-slate-300 flex items-center">
        <img src={logo} alt="Logo" className='h-8 pe-3 ms-3' />
        <span className='text-lg md:text-xl font-bold'>Khabri</span>
      </div>
      <div className="hidden md:flex gap-x-5 pe-10 text-xl cursor-pointer">
      <Navitem text= "Home" icon={<IoHome size={25}/>} onclick={()=>handleClick('general')} isActive={category ===' general'}/>
        {/* <div className="flex items-center" onClick={() => handleClick('general')}>
          <IoHome size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'general' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Home</span>
        </div> 
        <div className="flex items-center" onClick={() => handleClick('sports')}>
          <MdOutlineSportsCricket size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'sports' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Sports</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('science')}>
          <SiBookstack size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'science' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Science</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('entertainment')}>
          <PiTelevisionSimpleFill size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'entertainment' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Entertainment</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('technology')}>
          <HiOutlineDesktopComputer size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'technology' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Technology</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('business')}>
          <IoBusiness size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'business' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Business</span>
        </div>
        <div className="flex items-center" onClick={() => handleClick('health')}>
          <CiHospital1 size={25} className='text-[#4E5283] mr-1' />
          <span className={`text-slate-300 hover:text-[#0ea5e9] ${category === 'health' ? 'text-[#0ea5e9]' : 'text-[#4E5283]'}`}>Health</span>
        </div>
      </div>
      */}


      <div className="flex items-center bg-[#0f172abf] px-3 ml-auto">
        <AiOutlineSearch size={25} className='text-[#4E5283] mr-2' />
        <input
          type="search"
          placeholder="Search"
          className="w-96 bg-[#0f172abf] focus:outline-none border-none justify-center rounded text-slate-300"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className='h-10 w-16 flex items-center justify-center rounded-e-full bg-zinc-800'
          onClick={handleSearch}
        >
          <AiOutlineSearch className='text-xl text-slate-300' />
        </button>
      </div>
    </div>
    </div>
  );
}
const Navitem = ({ text, icon, onClick, isActive }) => (
  <div className={`flex items-center ${isActive ? 'text-[#0ea5e9]' : 'text-slate-300 hover:text-[#0ea5e9]'}`} onClick={onClick}>
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

export default Navbar;
