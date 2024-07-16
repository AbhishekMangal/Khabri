import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setKeyWord, setMenuOpen, setCategory, setDrop, setArticles } from "../Features/news/newsSlice";
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoBusiness } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import logo from "../Favicon/logo.png";
import SideBar from "./SideBar";
import { Logo, Navitem, ToggleMenu } from "./Navitem";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const dispatch = useDispatch();
  const { keyWord, category, menuOpen, drop } = useSelector((state) => state.news);
useEffect(()=>
{
  window.location.pathname === '/'? dispatch(setCategory("general")):dispatch(setCategory(window.location.pathname.substring(1)))
})
  const dropDownlist = [
    {
      name: "sports",
      icon: <MdOutlineSportsCricket size={25} />,
    },
    {
      name: "science",
      icon: <SiBookstack size={25} />,
    },
    {
      name: "entertainment",
      icon: <PiTelevisionSimpleFill size={35} />,
    },
    {
      name: "technology",
      icon: <HiOutlineDesktopComputer size={25} />,
    },
    {
      name: "business",
      icon: <IoBusiness size={25} />,
    },
    {
      name: "health",
      icon: <CiHospital1 size={25} />,
    },
  ];

  const handleClick = (value) => {
    if(value !== "Favorite"){
    dispatch(setCategory(value));
    }
    dispatch(setMenuOpen(false));
    dispatch(setDrop(false));
    dispatch(setArticles([]));
  };

  const handleChange = (e) => {
    dispatch(setKeyWord(e.target.value));
  };

  const toggleMenu = () => {
    dispatch(setMenuOpen(!menuOpen));
  };

  const toggleDropdown = () => {
    dispatch(setDrop(!drop));
  };

  return (
    <>
      <div
        className="NavBar text-lg md:text-2xl ps-3 pt-2 grid items-center border-slate-800 border-b-2 sticky top-0 z-50"
        style={{
          gridTemplateColumns: "auto 2fr auto",
          height: "80px",
          background:
            "linear-gradient(90deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7))",
        }}
      >
        {/* Mobile Menu Button */}
        <ToggleMenu toggleMenu={toggleMenu} />

        {/* Logo */}
        <Logo logo={logo} />

        {/* Navigation Items */}
        <div className="hidden lg:flex gap-x-6 px-6 text-lg cursor-pointer justify-center 2xl:gap-x-6">
          <Navitem
            text="Home"
            icon={<IoHome size={25} />}
            onClick={() => {
              handleClick('general')

            }}
            isActive={category === "general"}
            location="/"
          />

          {/* Dropdown for Categories */}
          <div className="flex items-center relative">
            <div
              className={`flex items-center cursor-pointer ${
                drop ? "text-[#0ea5e9]" : "text-slate-300 hover:text-[#0ea5e9]"
              }`}
              onClick={toggleDropdown}
            >
              {dropDownlist.some(
                (item) => `/${item.name}` === window.location.pathname
              ) ? (
                dropDownlist.map((item) => {
                  if (`/${item.name}` === window.location.pathname) {
                    return (
                      <Navitem
                        key={item.name}
                        text={item.name}
                        icon={item.icon}
                        isActive={true}
                      />
                    );
                  }
                  return null;
                })
              ) : (
                <div className="flex items-center p-2 cursor-pointer hover:text-[#0ea5e9]">
                  <TbCategory size={25} />
                  <span className="ml-2 capitalize">Categories</span>
                </div>
              )}
              <RiArrowDropDownLine size={25} />
            </div>

            {drop && (
              <div className="absolute bg-[#0f172a] mt-2 w-50 rounded shadow-lg z-10 top-9 capitalize p-4">
                {dropDownlist.map((item) => (
                  <Navitem
                    key={item.name}
                    text={item.name}
                    icon={item.icon}
                    onClick={() => {
                      handleClick(item.name)
                    }}
                    isActive={category === item.name}
                    location={`/${item.name}`}
                  />
                ))}
              </div>
            )}
          </div>
          <Navitem
            text="Favourites"
            icon={<FaStar size={25} />}
            onClick={() => {
            handleClick("Favorite");
            }}
            isActive={category === 'Favorite'}
            location="/Favorite"
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center pe-7 justify-start">
          <AiOutlineSearch size={25} className="text-slate-300 mr-2" />
          <input 
            type="search"
            placeholder="Search"
            className=" bg-transparent focus:outline-none justify-center rounded text-slate-300 placeholder-gray-400 pe-6 border-b-2 border-slate-800"
            value={keyWord}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && <SideBar handleClick={handleClick} category={category} />}
    </>
  );
};

export default Navbar;
