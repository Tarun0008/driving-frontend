import React from 'react'
import img from '../assets/images/img.jpeg'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import faqImg from '../assets/images/faq-img.png';

import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link, useNavigate } from 'react-router-dom';
import {BsArrowRight, } from 'react-icons/bs';
import About from '../components/About/About';
import FaqList from '../components/Faq/FaqList';
import { useEffect } from 'react';
import TypedComponent from './TypedComponent';

const Home = () => {
  const navigate = useNavigate()
  const handleFindASlot = () => {
    navigate('/stations')
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
    {/*hero section */}
    <section className='hero__section pt-[60px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* hero content */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[10px] leading-[46px] text-headingColor font-[800] md:text-[40px] md:leading-[70px]' style={{color:'#28B463'}}>
              FEW CLICKS AWAY TO BOOK 
              <h1 className='text-[5px] leading-[46px] text-headingColor font-[800] md:text-[30px] md:leading-[70px]' style={{color:'black'}}><TypedComponent /></h1>
              </h1>
              <p className='text__para'>Welcome to DriveCrew, your go-to platform for hiring temporary drivers conveniently.
At DriveCrew, we streamline the process, making it easy to find skilled temporary drivers on demand.
Discover the flexibility of temporary driver staffing with DriveCrew - your reliable workforce solution.
              </p>
              <button onClick={handleFindASlot} className='btn py-2 px-4 text-[14px] sm:px-6 sm:text-[18px] md:px-4 md:text-[16px] lg:px-6 lg:text-[18px] text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'
  style={{ backgroundColor: '#28B463' }}>Find a Driver</button>
            </div>
            {/* hero counter */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  30+
                </h2>
                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Drivers</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  15+
                </h2>
                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Cities</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                  100%
                </h2>
                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                <p className='text__para'>Customer Satisfication</p>
              </div>
            </div>
          </div>
          {/* hero content */}
          <div className="flex gap-[30px] justify-end">
            <div>
              <img className='w-full' src={img} alt="" />
            </div>
            
          </div>
        </div>  
      </div>
    </section>
    {/*how it works section */}
    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Hassle-Free Driver Hiring
          </h2>
          <p className='text para text-center'> 
            We understand your need for reliable drivers.
          </p>
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5 ">
            <div className="flex items-center justify-center">
              <img src={icon01} alt='' />
            </div>
            <div className="mt-[30px] ">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Driver 
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
               Discover the perfect driver to meet your requirements.
              </p>
              <Link to='/stations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#28B463] hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5 ">
            <div className="flex items-center justify-center">
            <img src={icon02} alt='' style={{ width: '230px', height: '230px' }} />

            </div>
            <div className="mt-[30px] ">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
              Explore Locations
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Your go-to destination for hiring experienced drivers.
              </p>
              <Link to='/stations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#28B463] hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-5 ">
            <div className="flex items-center justify-center">
              <img src={icon03} alt=''  />
            </div>
            <div className="mt-[30px] ">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Driver
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              Secure your driver in advance and streamline the process.
              </p>
              <Link to='/stations' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-[#28B463] hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About/>
    {/*Faq section */}
    <section>
      <div className="container">
        <div className='flex justify-between gap=[50px] lg:gap-0'>
          <div className='w-1/2 pt-5 pr-8 lg:pt-10 lg:pr-20 hidden md:block'>
            <img src={faqImg} alt="" style={{ height: '500px' }}/>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className='heading'>
              Most questions by our beloved users
            </h2>
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Home;