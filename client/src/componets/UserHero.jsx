import React from 'react'
import Navbar from './Navbar'
import image1 from '../assets/images/slide3.jpg'
import UserNav from './UserNav';



function UserHero() {

  return (
    <>
    <div id="Hero" className='merriweather-regular w-full h-screen sm:w-full sm:h-screen lg:w-full lg:h-screen ' 
    style={{backgroundImage:`url(${image1})`, 
    objectFit:'cover',
    backgroundRepeat:'no-repeat'}  } >
        <UserNav/>
        <div id="heroPart2" className='w-full h-[650px]  lg:w-full lg:h-[650px] ' >
            <div id="moto" className=' w-[400px]  m-[10px] mt-[140px] sm:w-[600px] sm:mt-[160px] sm:ml-[80px] lg:w-[700px] lg:m-[140px] text-white'>
                <div id="line" className='lg:text-[50px] text-[30px] font-semibold  sm:text-[40px] lg:font-semibold lg:w-[700px]'>
                    <h3>Experience the traditional barbershop feel  </h3>
                </div>
                <h3 className='tracking-[4px] pt-[3px] sm:text-[20px] text-[18px] lg:pt-[5px] lg:tracking-[4px] lg:text-[22px]'>Professional care to maintain your perfect look</h3>

            </div>


        </div>
    </div>
    
    </>
  )
}

export default UserHero;
