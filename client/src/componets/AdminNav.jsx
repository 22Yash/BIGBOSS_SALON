import React, { useEffect, useRef , useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavbar from "./MobileNavbar";
import salonLogo from "../assets/images/Bigboss-logo.png"




function AdminNav() {
  // const [selectedService, setSelectedService] = useState('');

  // const renderServiceComponent = () => {
  //   switch (selectedService) {
  //     case 'MobileMenu':
  //       return <MobileNavbar/>;
      
  //     default:
  //       return null;
  //   }
  // };

  
  
  return (
    <>
      <div id="navBar" className="merriweather-regular flex justify-between h-[90px] lg:flex lg:justify-between bg-gray-300 lg:h-[100px] lg:p-[10px] ">
        <div id="leftNav" className="lg:p-[20px] p-[20px] ">
          <a href="/"><img src={salonLogo} alt="" className="w-[120px] lg:w-[100px] lg:ml-[30px]"/></a>
          
        </div>
        <div id="rightNav" className="lg:pt-[10px]">
        <li className="visible -pt-[10px] sm:hidden ">
          {/* <div id="menu"  onClick={() => setSelectedService('MobileMenu')} className=" -ml-[50px] w-full bg-red-300">
          <CiMenuBurger />
          </div>
          <div className="service-details">
          {renderServiceComponent()}
        </div> */}
            
            </li>
          <ul className="hidden lg:flex lg:p-[20px] lg:gap-[40px]">
            
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li className="button">
              <Link to="#aboutus" className="">
                About Us
              </Link>
            </li>
            <li className="button">
              <Link to="#service" className="">
                Services
              </Link>
            </li>
            <li className="button">
              <Link to="#shop" className="">
                Shop 
              </Link>
            </li>
            <li className="button">
              <Link to="/Contact" className="">
                Contact 
              </Link>
            </li>
            <li className="button">
              <Link to="/wages" className="">
                Emaployee Track
              </Link>
            </li>
            <li className="button">
              <Link to='/appoinment' className="lg:border-[3px] lg:border-black lg:p-2">
              Booking
              </Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default AdminNav;
