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
    console.log(value);
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
    <>
    <div className='NavBar text-lg md:text-2xl ps-3 pt-2 grid items-center border-slate-800 border-b-2 sticky top-0 bg-[#0f172abf]  ' style={{ gridTemplateColumns: 'auto 1fr auto', height: '80px' }}>
       <div className="lg:hidden flex items-center pr-3">
        <button onClick={toggleMenu} className="text-3xl text-slate-300 focus:outline-none">
          &#8801;
        </button>
      </div>
      <div className="text-slate-300 flex items-center">
        <img src={logo} alt="Logo" className='h-8 pe-3 ms-3' />
        <span className='text-lg  md:text-xl font-bold '>Khabri</span>
      </div>
      <div className=" hidden lg:flex gap-x-2 px-6 text-lg cursor-pointer justify-center 2xl:gap-x-6">
    <Navitem text="Home" icon={<IoHome size={25} />} onClick={() => handleClick('general')} isActive={category === 'general'} />
     <Navitem text="Sports" icon={<MdOutlineSportsCricket size={25} />} onClick={() => handleClick('sports')} isActive={category === 'sports'} />
     <Navitem text="Science" icon={<SiBookstack size={25} />} onClick={() => handleClick('science')} isActive={category === 'science'} />
     <Navitem text="Entertainment" icon={<PiTelevisionSimpleFill size={25} />} onClick={() => handleClick('entertainment')} isActive={category === 'entertainment'} />
     <Navitem text="Technology" icon={<HiOutlineDesktopComputer size={25} />} onClick={() => handleClick('technology')} isActive={category === 'technology'} />
     <Navitem text="Business" icon={<IoBusiness size={25} />} onClick={() => handleClick('business')} isActive={category === 'business'} />
     <Navitem text="Health" icon={<CiHospital1 size={25} />} onClick={() => handleClick('health')} isActive={category === 'health'} />
      </div>

      <div className=" flex items-center bg-[#0f172abf] px-3 justify-start ">
        <AiOutlineSearch size={25} className='text-slate-300 mr-2' />
        <input type="search" placeholder="Search" className="w- 60 bg-[#0f172abf] focus:outline-none border-none justify-center rounded text-slate-300" value={inputValue} onChange={handleChange}
        />
        <button className='h-10 w-12 flex items-center justify-center rounded-e-full bg-zinc-800' onClick={handleSearch}>
          <AiOutlineSearch className='text-xl text-slate-300' />
        </button>
      </div>
      {/* Mobile toggle button*/}
   {menuOpen && (
     <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#0f172abf] p-4 z-20">
     <Navitem text="Home" icon={<IoHome size={25} />} onClick={() => handleClick('general')} isActive={category === 'general'} />
     <Navitem text="Sports" icon={<MdOutlineSportsCricket size={25} />} onClick={() => handleClick('sports')} isActive={category === 'sports'} />
     <Navitem text="Science" icon={<SiBookstack size={25} />} onClick={() => handleClick('science')} isActive={category === 'science'} />
     <Navitem text="Entertainment" icon={<PiTelevisionSimpleFill size={25} />} onClick={() => handleClick('entertainment')} isActive={category === 'entertainment'} />
     <Navitem text="Technology" icon={<HiOutlineDesktopComputer size={25} />} onClick={() => handleClick('technology')} isActive={category === 'technology'} />
     <Navitem text="Business" icon={<IoBusiness size={25} />} onClick={() => handleClick('business')} isActive={category === 'business'} />
     <Navitem text="Health" icon={<CiHospital1 size={25} />} onClick={() => handleClick('health')} isActive={category === 'health'} />
   </div>
   )}
    </div>
    </>

  );
}
const Navitem = ({ text, icon, onClick, isActive }) => (
  <div className={`flex items-center ${isActive ? 'text-[#0ea5e9]' : 'text-slate-300 hover:text-[#0ea5e9]'}`} onClick={onClick}>
    {icon}
    <span className="ml-2">{text}</span>
  </div>
);

export default Navbar;
