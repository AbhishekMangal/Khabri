import React, { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineSportsCricket } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoBusiness } from "react-icons/io5";
import { CiHospital1 } from "react-icons/ci";
import { Navitem } from "./Navitem";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setDrop } from "../Features/news/newsSlice";

const SideBar = ({ handleClick, category ,setCategory}) => {
  const dispatch = useDispatch();
  const {  drop } = useSelector((state) => state.news);
  
  useEffect(()=>
  {
    const path = window.location.pathname
  
  }, [])
  return (
    <div className="lg:hidden fixed top-20 inset-y-0 left-0 p-4 bg-[#0f172a] z-50 transform translate-x-0 transition-transform duration-300 ease-in-out w-64">
      <Navitem
        text="Home"
        icon={<IoHome size={25} />}
        onClick={() => handleClick("general")}
        isActive={window.location.pathname === "/"}
        location={'/'}
      />
       
      <Navitem
        text="Sports"
        icon={<MdOutlineSportsCricket size={25} />}
        onClick={() => handleClick("sports")}
        isActive={window.location.pathname === "/sports"}
        location={('/sports')}
      />
      <Navitem
        text="Science"
        icon={<SiBookstack size={25} />}
        onClick={() => handleClick("science")}
        isActive={window.location.pathname === "/science"}
        location={('/science')}
      />
      <Navitem
        text="Entertainment"
        icon={<PiTelevisionSimpleFill size={25} />}
        onClick={() => handleClick("entertainment")}
        isActive={window.location.pathname === "/entertainment"}
        location={'/entertainment'}
      />
      <Navitem
        text="Technology"
        icon={<HiOutlineDesktopComputer size={25} />}
         onClick={() => handleClick("technology")}
        isActive={window.location.pathname === "/technology"}
        location={'/technology'}
      />
      <Navitem
        text="Business"
        icon={<IoBusiness size={25} />}
        onClick={() => handleClick("business")}
        isActive={window.location.pathname === "/business"}
        location={'/business'}
      />
      <Navitem
        text="Health"
        icon={<CiHospital1 size={25} />}
        onClick={() => handleClick("health")}
        isActive={window.location.pathname === "/health"}
        location={'/health'}
      />
      <Navitem
            text="Favourites"
            icon={<FaStar size={25}/>}
            onClick={()=> {handleClick("Favorite") ; dispatch(setDrop(false));}}
            isActive={window.location.pathname === `/Favorite`}
            location={'/Favorite'}
          />
    </div>
  );
};

export default SideBar;
