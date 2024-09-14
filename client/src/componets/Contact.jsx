import React from 'react'
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function Contact() {
  return (
    <div id='#contact' className='relative'>

        <div id="info" className=' absolute lg:flex  text-white merriweather-regular lg:gap-[12px] lg:flex-col lg:ml-[1000px] lg:mt-[20px] lg:w-[300px] lg:h-[400px] bg-[#ae8547] '>
             
             <h2 className='lg:ml-[30px] lg:pt-[30px] font-semibold lg:text-[20px] uppercase'>How to find us</h2>
             <div id="number" className="mt-[30px] lg:flex  lg:gap-[70px]">
                
                <div
                  id="phone"
                  className="lg:flex lg:items-center lg:ml-[20px] lg:-mt-[20px] lg:gap-[20px]"
                >
                  <BsFillTelephoneForwardFill size={20} />
                  <h2>+91-9322228262</h2>
                </div>
              </div>
              <div id="email" className="lg:flex lg:items-center lg:gap-[10px]">
                <MdOutlineMailOutline size={40} className="lg:ml-[10px]" />
                <p className="lg:text-[14px]">info@harishbigbosssalon.com</p>
              </div>
             <div
                id="location"
                className="mt-[0px] lg:flex lg:items-center lg:gap-[10px] "
              >
                <IoLocation size={40} className="lg:ml-[10px]" />
                <p className="lg:text-[14px]">
                  {" "}
                  Shop No 1, 
                  Nagar Borivali West
                </p>
              </div>
              <div id="openingHrs">
              <h2 className='lg:ml-[30px] lg:pt-[10px] font-semibold lg:text-[20px] uppercase'>Opening hours</h2>
              </div>


        </div>
        <div id="map" className="lg:overflow-hidden lg:w-full lg:mt-[30px] lg:p-[20px] ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241110.48013799687!2d72.57190493281253!3d19.2235177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12ae38f8ff7%3A0x675c15d201293757!2sBig%20boss%20Salon!5e0!3m2!1sen!2sin!4v1726292442394!5m2!1sen!2sin" 
          width="100%" height="400"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      
    </div>
  )
}

export default Contact
