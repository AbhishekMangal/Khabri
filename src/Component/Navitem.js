import React from "react";
import { Link } from "react-router-dom";

// Navitem Component
export function Navitem({ text, icon, onClick, isActive, location }) {
  return (
    <Link
      className={`flex items-center p-2  ${
        isActive ? "text-[#0ea5e9] " : "text-slate-300 hover:text-[#0ea5e9]"
      } cursor-pointer`}
      onClick={onClick}
      to ={location}
    >
      {icon}
      <span className="ml-2 capitalize">{text}</span>
    </Link>
  );
}

// ToggleMenu Component
export function ToggleMenu({ toggleMenu }) {
  return (
    <div className="lg:hidden flex items-center pr-3">
      <button
        onClick={toggleMenu}
        className="text-3xl text-slate-300 focus:outline-none"
      >
        &#8801;
      </button>
    </div>
  );
}

// Logo Component
export function Logo({ logo }) {
  return (
    <div className="text-slate-300 flex items-center">
      <img src={logo} alt="Logo" className="h-8 pe-3 ms-3" />
      <span className="inline text-xl font-bold">Khabri</span>
    </div>
  );
}
