import React from "react";
import Navbar from "../componets/Navbar";
import blog2 from "../assets/images/bookingBanner.jpg";
import tele from "../assets/images/telephone.png";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function ContactUS() {
  return (
    <>
      <div
        id="Contact"
        className="lg:w-full merriweather-regular lg:h-auto lg:flex lg:flex-col lg:gap-[650px]"
      >
        <div id="navbar" className=" lg:relative">
        <Navbar />
        </div>
       

        <div
          className="absolute left-0 w-full h-[200px] bg-cover bg-center  mt-[130px]"
          style={{ backgroundImage: `url(${blog2})` }}
        >
          <div
            id="contactBanner"
            className="w-full h-[400px] flex flex-col justify-center lg:w-full lg:h-[400px] lg:flex lg:justify-center lg:flex-col"
          >
            <h2 className="text-white text-[38px] font-semibold text-center lg:text-[64px] lg:-ml-[720px] lg:font-semibold lg:-mt-[200px] lg:text-center">
              Contact US
            </h2>
          </div>

          <div
            id="contact"
            className="h-[30vh] lg:-mt-[200px] lg:grid lg:grid-cols-2 "
          >
            <div
              id="howToFind"
              className="lg:flex lg:flex-col  lg:gap-[20px] lg:p-[30px] border-2 border-black  lg:ml-[20px] h-full"
            >
              <h3 className="lg:text-[36px] lg:font-semibold">
                How to find us{" "}
              </h3>
              <p className="lg:w-[600px] lg:text-[20px] text-[#9494a0]">
                Our goal is to provide the best customer service and to answer
                all of your questions in a timely manner.
              </p>

              <div id="number" className="mt-[30px] lg:flex  lg:gap-[70px]">
                <div
                  id="tele"
                  className="lg:flex lg:items-center lg:gap-[20px]"
                >
                  <img src={tele} alt="" className="lg:w-[70px]" />
                  <h2>28996740/28981260</h2>
                </div>
                <div
                  id="phone"
                  className="lg:flex lg:items-center lg:gap-[20px]"
                >
                  <BsFillTelephoneForwardFill size={40} />
                  <h2>+91-9322228262</h2>
                </div>
              </div>
              <div id="email" className="lg:flex lg:items-center lg:gap-[40px]">
                <MdOutlineMailOutline size={40} className="lg:ml-[10px]" />
                <p className="lg:text-[16px]">info@harishbigbosssalon.com</p>
              </div>
              <div
                id="location"
                className="mt-[0px] lg:flex lg:items-center lg:gap-[30px] lg:justify-between"
              >
                <IoLocation size={60} className="lg:ml-[10px]" />
                <p className="lg:text-[14px]">
                  {" "}
                  Shop No 1, Shimpoli Road Next To Mega Party Hall Vivekanand
                  Nagar Borivali West, Mumbai, Maharashtra 400092
                </p>
              </div>
            </div>

            <div
              id="howToFind"
              className="lg:flex lg:flex-col  lg:gap-[20px] lg:p-[30px] border-2 border-black  lg:ml-[20px] h-full"
            >
              <h3 className="lg:text-[36px] lg:font-semibold">
              Leave us a message{" "}
              </h3>
              <p className="lg:w-[600px] lg:text-[20px] text-[#9494a0]">
              Our goal is to provide the best customer service and to answer all of your questions in a timely manner.
              </p>

              
            </div>
          </div>
          
        </div>
        <div id="map" className="lg:overflow-hidden lg:w-full lg:mt-[30px] lg:p-[20px] ">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241110.48013799687!2d72.57190493281253!3d19.2235177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12ae38f8ff7%3A0x675c15d201293757!2sBig%20boss%20Salon!5e0!3m2!1sen!2sin!4v1726292442394!5m2!1sen!2sin" 
          width="100%" height="400"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
      </div>
    </>
  );
}

export default ContactUS;
