import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoBusiness } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { Navitem } from "./Navitem";

const SideBar = ({ handleClick, category }) => {
  return (
    <div className="md:hidden absolute top-20 inset-y-0 left-0 p-4 bg-[#0f172abf] z-50 transform translate-x-0 transition-transform duration-300 ease-in-out w-64">
      <Navitem
        text="Home"
        icon={<IoHome size={25} />}
        onClick={() => handleClick("general")}
        isActive={category === "general"}
      />
      <Navitem
        text="Sports"
        icon={<MdOutlineSportsCricket size={25} />}
        onClick={() => handleClick("sports")}
        isActive={category === "sports"}
      />
      <Navitem
        text="Science"
        icon={<SiBookstack size={25} />}
        onClick={() => handleClick("science")}
        isActive={category === "science"}
      />
      <Navitem
        text="Entertainment"
        icon={<PiTelevisionSimpleFill size={25} />}
        onClick={() => handleClick("entertainment")}
        isActive={category === "entertainment"}
      />
      <Navitem
        text="Technology"
        icon={<HiOutlineDesktopComputer size={25} />}
        onClick={() => handleClick("technology")}
        isActive={category === "technology"}
      />
      <Navitem
        text="Business"
        icon={<IoBusiness size={25} />}
        onClick={() => handleClick("business")}
        isActive={category === "business"}
      />
      <Navitem
        text="Health"
        icon={<CiHospital1 size={25} />}
        onClick={() => handleClick("health")}
        isActive={category === "health"}
      />
    </div>
  );
};

export default SideBar;
