import React, { useState } from 'react';
import banner from '../assets/images/service_banner.jpg';
import HaircutService from '../componets/HaircutService';
import ShavingService from '../componets/ShavingService';
import TrimmingService from '../componets/TrimmingService';
import HairstylingService from '../componets/HairstylingService';

function Service() {
  const [selectedService, setSelectedService] = useState('');

  const renderServiceComponent = () => {
    switch (selectedService) {
      case 'HAIRCUT':
        return <HaircutService />;
      case 'SHAVING':
        return <ShavingService />;
      case 'TRIMMING':
        return <TrimmingService />;
      case 'HAIRSTYLING':
        return <HairstylingService />;
      default:
        return <HaircutService />;
    }
  };

  return (
    <>
      <div id="service" className='
      mt-[330px] p-[20px] w-full h-[130vh]
      sm:mt-[0px] 
      lg:mt-[0px] lg:w-full lg:h-[130vh] bg-[#f2f2f2] lg:pt-[40px] '>
        <div id="serviceBanner" className='h-[400px] flex justify-center items-center lg:mt-[50px] lg:h-[400px] lg:flex lg:justify-center lg:items-center' style={{ backgroundImage: `url(${banner})` }}>
          <div id="info" className='merriweather-regular  -mt-[130px] w-[400px] lg:-mt-[160px] lg:w-[600px]'>
            <h3 className='lg:font-semibold text-[30px] lg:text-[40px] text-white text-center'>Services</h3>
            <p className='text-white w-[400px] text-[14px]  lg:w-[550px] lg:text-[20px] text-center lg:ml-[30px]'>Combining traditional techniques with modern styles, providing cut, color, and shave services.</p>
          </div>
        </div>
        <div id="serviceList" className='merriweather-regular flex justify-center flex-col items-center h-[240px] bg-white lg:grid lg:grid-cols-4  lg:h-[80px] lg:m-[60px] lg:-mt-[80px]'>
          <div id="serviceOne" 
            className={`h-[80px] w-full text-center  p-[20px] lg:border-r-2 lg:border-black font-semibold lg:text-center lg:text-[22px] lg:p-[20px] ${selectedService === 'HAIRCUT' ? 'bg-[#ae8547]' : 'bg-white'}`}>
            <button onClick={() => setSelectedService('HAIRCUT')}>HAIRCUT</button>
          </div>
          <div id="serviceTwo" 
            className={`h-[80px] w-full text-center  p-[20px] lg:border-r-2 lg:border-black font-semibold lg:text-center lg:text-[22px] lg:p-[20px] ${selectedService === 'SHAVING' ? 'bg-[#ae8547]' : 'bg-white'}`}>
            <button onClick={() => setSelectedService('SHAVING')}>SHAVING</button>
          </div>
          <div id="serviceThree" 
            className={`h-[80px] w-full text-center  p-[20px] lg:border-r-2 lg:border-black font-semibold lg:text-center lg:text-[22px] lg:p-[20px] ${selectedService === 'TRIMMING' ? 'bg-[#ae8547]' : 'bg-white'}`}>
            <button onClick={() => setSelectedService('TRIMMING')}>TRIMMING</button>
          </div>
          <div id="serviceFour" 
            className={`h-[80px] w-full text-center  p-[20px] lg:border-r-2 lg:border-black font-semibold lg:text-center lg:text-[22px] lg:p-[20px] ${selectedService === 'HAIRSTYLING' ? 'bg-[#ae8547]' : 'bg-white'}`}>
            <button onClick={() => setSelectedService('HAIRSTYLING')}>HAIRSTYLING</button>
          </div>
        </div>
        <div className="service-details">
          {renderServiceComponent()}
        </div>
      </div>
    </>
  );
}

export default Service;
