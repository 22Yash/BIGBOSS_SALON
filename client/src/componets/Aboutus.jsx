import React from 'react'
import video from '../assets/images/blog2.jpg'
import { RiScissors2Fill } from "react-icons/ri";
import { GiSunglasses } from "react-icons/gi";
import { GiBeard } from "react-icons/gi";
import { BsStars } from "react-icons/bs";

function Aboutus() {
  return (
    <>
      <div
        id="aboutus"
        className="merriweather-regular h-screen w-full sm:w-full sm:h-screen lg:h-screen lg:w-full  lg:pt-[20px] "
      >
        <div
          id="aboutShop"
          className=" grid grid-cols-1 m-[20px] sm:grid sm:grid-cols-2 sm:m-[30px] sm:h-[300px] lg:grid lg:grid-cols-2 lg:m-[60px] lg:h-[400px] bg-gray-600 "
        >
          <div id="part1" className="bg-[#f2f2f2]">
            <h3 className="
            text-[20px] font-semibold m-[20px] text-center 
            sm:text-[25px] sm:m-[25px]
            lg:text-[30px] lg:font-semibold lg:m-[40px]">
             Best in town for haircuts & styling
            </h3>
            <p className="
            w-[360px] text-[#787676] font-medium text-[14px] text-center  ml-[15px] mb-[30px] 
            sm:w-[400px] sm:text-[14px] sm:ml-[10px] 
            lg:w-[440px] lg:font-medium lg:text-[18px] lg:ml-[100px] lg:-mt-[20px]">
             We specialise in hair & make up services. Long hair, short hair, wavy hair, frizzy hair, dull hair, curly hair, we work with passion & love on all types of hair to give you the look you desire.
<br />Let our experts guide you with their creative ideas from global experience and you will fall in love with yourself
            </p>
          </div>
          <div
            id="part2"
            className=" bg-[#f2f2f2] flex justify-center items-center lg:flex lg:justify-center lg:items-center"
          >
            <div id="video" className=" w-[300px] mb-[20px] sm:w-[320px] sm:ml-[10px] lg:w-[500px]">
              <img src={video} alt="" />
            </div>
          </div>
        </div>
        <div
          id="aboutServices"
          className="merriweather-regular bg-slate-50 uppercase 
          h-[100px] grid grid-cols-1 gap-4 m-[20px]
          sm:grid sm:grid-cols-2 sm:h-[140p] 
          lg:h-[180px] lg:grid lg:grid-cols-6 lg:gap-5 "
        >
          <div className="highlights bg-red-400 sm:hidden lg:opacity-100"></div>
          <div className="highlights bg-red-700 flex gap-[80px]">
            <div id="one" className="">
              <RiScissors2Fill className="" />
            </div>
            <div id="two">
              <h3 className='text-[60px] font-semibold'>20</h3>
              <h3 className='text-[18px]'>Skilled Barbers</h3>
            </div>
          </div>
          <div className="highlights bg-red-700 flex justify-between">
            
            <div id="one">
            <GiSunglasses />
            </div>
            <div id="two">
              <h3 className='text-[60px] font-semibold'>120</h3>
              <h3 className='text-[18px]'>Happy Clients</h3>
            </div>
          </div>
          <div className="highlights bg-red-700 flex justify-between">
            <GiBeard />
            <div id="one" ></div>
            <div id="two" >
              <h3 className='text-[60px] font-semibold'>210</h3>
              <h3 className='text-[18px]' >Custom haircut</h3>
            </div>
            
          </div>
          <div className="highlights bg-red-700 flex justify-between">
            <BsStars />
            <div id="one"></div>
            <div id="two">
              <h3 className='text-[60px] font-semibold'>10</h3>
              <h3>Years Experience</h3>
            </div>
          </div>
          <div className="highlights bg-red-400"></div>
        </div>
      </div>
    </>
  );
}

export default Aboutus
