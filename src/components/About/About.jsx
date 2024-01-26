import React from 'react';
import aboutImg from '../../assets/images/about.png';
import aboutImg1 from '../../assets/images/about1.png';
import aboutImg2 from '../../assets/images/about2.png';
import { Link } from 'react-router-dom';

const About = () => {
  const commonHeading = 'Discover, reserve, and pay for qualified drivers anytime, anywhere.';
  
  return (
    <section>
      <div className="container">
        <h2 className='heading text-center mb-8'>{commonHeading}</h2>

        {/* First Item */}
        <div className="flex justify-around gap-[40px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row items-center">
          {/* about img  */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img className="ml-8" src={aboutImg} alt="" />
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[660px] order-1 lg:order-2 justify-around mr-12 flex items-center">
            <div>
              <h2 className='heading'>Fare Price</h2>
              <p className='text__para'>
                Hiring a full-time chauffeur is expensive. Instead, you can hire a part time driver from us. They’ll provide transportation when you absolutely need it, and make themselves scarce once the job is done. Our prices start at INR 129 for the first hour. After this, you’ll only be charged by the minute. If you’re ever in need of transportation, we can DriveU.
              </p>
            </div>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex justify-around gap-[40px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row items-center">
          {/* about img  */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-2">
            <img className="ml-8" src={aboutImg1} alt="" />
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[660px] order-1 lg:order-1 justify-around mr-12 flex items-center">
            <div>
              <h2 className='heading'>Drive by the hour</h2>
              <p className='text__para'>
                Our hourly packages are great when you are looking for a ride to and fro from the airport or the railway station to pick or drop your family members or relatives. Quick and easy, we make sure you reach your destination and back in time without any trouble.
              </p>
            </div>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex justify-around gap-[40px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row items-center">
          {/* about img  */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img className="ml-8" src={aboutImg2} alt="" />
          </div>
          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[660px] order-1 lg:order-2 justify-around mr-12 flex items-center">
            <div>
              <h2 className='heading'>Corporate Meetings</h2>
              <p className='text__para'>
                Corporate meetings are all about being well prepared and well suited! But, driving across the city can be stressful and sap all your energy before the critical meeting. While you prepare for your next sales pitch, we help you reach your meeting destination fresh and rejuvenated to do your best and close the deal well!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
