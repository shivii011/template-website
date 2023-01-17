import React from 'react'
import Navbar from './Navbar'
import Button from './Shared/Button'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
duration :1000,
offset :100
});

function HeroSection() {
  return (
< div className = ' bg-skyBlue bg-hero bg-right bg-no-repeat h-[65rem] '  >
<Navbar/>
<div className='py-[13rem]' >
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-white '>
<p>Live your life to the</p>
<p>fullest again .</p>
< img className = ' m-auto w-[15rem] sm:w-[15rem]  md:w-[20rem] lg:w-[25rem] ' src = 'https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6151e350f325d611f90a5ed1_graphic-hero-underline.svg' alt = '' />
</div>
<Button data-aos="fade-up" data-aos-anchor-placement="center-bottom" text="Start your visit" className="bg-yellow text-blue w-[13.125rem] mx-auto"/>


</div>
    </div>
  )
}

export default HeroSection