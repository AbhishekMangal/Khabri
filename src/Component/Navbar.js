import React, { useState } from "react";
import { IoHome, IoBusiness } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiHospital1 } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../Favicon/logo.png";
import SideBar from "./SideBar";
import { Logo, Navitem, ToggleMenu } from "./Navitem";
import { Link, useNavigate } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { FaStar } from 'react-icons/fa6'
const Navbar = ({ setCategory, category, setKeyword }) => {
  // State Variables
  const [inputValue, setInputValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [isSelected, SetisSelected] = useState("");
  const navigate = useNavigate();

  const dropDownlist = [
    {
      name: 'sports',
      icon: <MdOutlineSportsCricket size={25} />
    },
    {
      name: 'science',
      icon: <SiBookstack size={25} />
    },
    {
      name: 'entertainment',
      icon: <PiTelevisionSimpleFill size={25}/>
    },
    {
      name: 'technology',
      icon: <HiOutlineDesktopComputer size={25} />
    },
    {
      name: 'business',
      icon: <IoBusiness size={25} />

    },
    {
      name: 'health',
      icon: <CiHospital1 size={25} />
    }
  ]
  const handleClick = (value) => {
    setCategory(value);
       if(isSelected != 'Category')
      {
        setCategory('');
      }
    setMenuOpen(false);
    setDrop(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setKeyword(inputValue);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    SetisSelected("Category")
    setDrop(!drop);
  };

  return (
    <>
      <div
        className="NavBar text-lg md:text-2xl ps-3 pt-2 grid items-center border-slate-800 border-b-2 sticky top-0 z-50"
        style={{
          gridTemplateColumns: "auto 1fr auto",
          height: "80px",
          background: "linear-gradient(90deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7))"
        }}
      >
        {/* Mobile Menu Button */}
        <ToggleMenu toggleMenu={toggleMenu} />

        {/* Logo */}
        <Logo logo={logo} />

        {/* Navigation Items */}
        <div className="hidden md:flex gap-x-6 px-6 text-lg cursor-pointer justify-center 2xl:gap-x-6">
          <Navitem
            text="Home"
            icon={<IoHome size={25} />}
            onClick={() => {setCategory("general"); SetisSelected("Home")}}
            isActive={isSelected === "Home"}
            location={'/'}
          />

          {/* Dropdown for Categories */}
          <div className="flex items-center relative">
            <div
              className={`flex items-center cursor-pointer ${
                drop && isSelected ==='Category' ? "text-[#0ea5e9]" : "text-slate-300 hover:text-[#0ea5e9]"
              } w-36`}
              onClick={toggleDropdown}
            >
              <TbCategory size={25}/>
              <span
                className={`ml-2 capitalize text-center ${
                  isSelected === 'Category'
                    ? "text-[#0ea5e9]"
                    : "text-slate-300 hover:text-[#0ea5e9]"
                }`}
              >
                {category.length !== 0 && category !== "general" && isSelected === 'Category' ? category : "Categories"}
              </span>
              <RiArrowDropDownLine size={25} />
            </div>

            {drop && ( 
              <div className="absolute bg-[#0f172abf] mt-2 py-2 w-48 rounded shadow-lg z-10 top-9 capitalize">
                {dropDownlist.map((item)=>(
                <Navitem
                  key={item.name}
                  text={item.name}
                  icon={item.icon}
                  onClick={() =>{ handleClick(item.name);}}
                  isActive={category === item.name}
                  location={`/${item.name}`}
                />
              ))}
              </div>
            )}
          </div>
          <Navitem
            text="Favourites"
            icon={<FaStar size={25}/>}
            onClick={()=>{SetisSelected("Favourites"); setCategory('')}}
            isActive={isSelected === 'Favourites'}
            location={'/Favorite'}
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-[#0f172abf] px-3 justify-start">
          <AiOutlineSearch size={25} className="text-slate-300 mr-2" />
          <input
            type="search"
            placeholder="Search"
            className="w-60 bg-[#0f172abf] focus:outline-none border-none justify-center rounded text-slate-300 placeholder-gray-400"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            className="h-10 w-12 flex items-center justify-center rounded-e-full bg-zinc-800 hover:bg-zinc-700"
            onClick={handleSearch}
          >
            <AiOutlineSearch className="text-xl text-slate-300" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && <SideBar handleClick={handleClick} category={category} />}
    </>
  );
};

export default Navbar;
