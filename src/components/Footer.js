import React from 'react'
import Button from './Shared/Button'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className=" bg-darkWhite">
        <div className='sm:flex items-stretch relative'>
        <img className='w-[50%] sm:w-[30%]' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/616481ffd3bd5b50a5771769_image-footer-left.jpg' alt=''/>
         <div className=' max-w-[55rem] sm:absolute sm:left-[15%]  md:left-[20%] md:right-[20%] lg:left-[25%] lg:rigth-[30%] z-20'>
         <img className=' -rotate-90' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/615297ae9d464981d9aa3a3d_graphic-dashes-footer.svg' alt=''/>
          <div className='my-auto -translate-y-[8rem] bg-yellow w-[90%] mx-auto py-[6rem] '>
           <div className=' text-4xl text-blue justify-between mb-[4rem] '>
          Ready to live life to the fullest again? Get in touch!
         </div>
         <Button text="Start your consultation" className="text-white text-sm w-[14.5rem] mt-[3rem] bg-blue mx-auto "/>
         <div className=' text-lg text-blue p-1 mt-[1.5rem]'>817-421-1066</div>
                </div>
            </div>
        <img className='w-[50%] sm:w-[30%] z-10 -translate-y-[10rem] ml-auto' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6165e92d657296d995455282_image-footer-right-p-800.jpeg' alt=''/>
        </div>
        
        
        
        <div className='py-[4rem] md:flex justify-between md:px-[2rem]'>



<div className=''>
<img className='m-auto my-4' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61532e3b7fe0c2816f894e72_logo-horizontal-navy.svg' alt=''/>
<div className='text-xl text-blue'>
    © 2023 Legent  |  All Rights Reserved
</div>
</div>
<div className=''>
<div className=' text-white flex justify-center my-4  '>
  <FaFacebookF className='mr-4 w-[2.5rem] h-[2.5rem] p-2 bg-blue rounded-full'/>
< FaInstagram className = 'mr-4 w-[2.5rem] h-[2.5rem] p-2 bg-blue rounded-full' />
< FaLinkedinIn className = 'mr-4 w-[2.5rem] h-[2.5rem] p-2 bg-blue rounded-full' />
< FaTwitter className = 'mr-4  w-[2.5rem] h-[2.5rem] p-2 bg-blue rounded-full' />
</div>
<div className='text-xl text-blue'>
    Terms of Service  |  Privacy Policy
</div>
</div>

        </div>
    </div>
  )
}

export default Footer