import React from 'react'
import Button from './Shared/Button'
function Section1() {
  return (
    <div className=' bg-darkWhite p-4 md:p-[3.5rem]'>
       <div className='bg-pink lg:flex flex-row-reverse'>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='p-5 md:p-[4rem] lg:mt-[4rem] '>

    <img src="https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6152232cf1e11f255424a576_icon-chat-navy.svg" alt=''/>
    <div className='text-3xl md:text-5xl text-blue m-[10%]'>
        You don't need to wait to get treatment. Give us a call.
    </div>
    <Button text='817-421-1066' className="bg-yellow text-blue font-semibold mt-[4rem] mb-[4rem] text-sm w-[12rem] md:text-xl md:w-[17rem] mx-auto"/>
</div>
<img className='object-scale-down w-[18rem] md:w-[25rem] md:pt-[11rem] lg:w-[40%] xl:w-[50%] mt-[4rem] lg:mt-[7rem]'src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61647ffaa9eefb50a1ffc0c9_image-home-cta.png' alt=''/>

        </div>
<img className='w-[45%] ml-auto -translate-y-[40%]' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/615337d17aa4dd2290deefe1_image-female-doctor-p-800.png ' alt=''/>
    </div>
  )
}

export default Section1