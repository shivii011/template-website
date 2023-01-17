import React from 'react';
import Button from './Shared/Button';
import "./HomeSpine.css";
function HomeSpine() {
    return (<div className='py-[8rem]  bg-darkWhite block'>
        <div className='px-[1rem] md:px-[3rem] lg:px-[4rem] xl:px-[6rem]'>
            <div className='text-[5.8rem] font-sans font-bold text-yellow text-right'>
                01
            </div>
            <div className=' justify-center block lg:flex flex-row-reverse text-blue '>
<div className='relative h-[35rem] sm:h-[50rem] col-span-3 m-2'>
<img className='spine absolute z-10 -inset-y-[2.6rem] left-[18rem] h-[5rem] sm:left-[23rem] md:left-[29rem] lg:left-[6rem] lg:-top-[3rem] md:h-[10rem]' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/615219e6b94b49468140b9ca_graphic-circular-spine.svg' alt=''/>
<img className='lining absolute z-20 -inset-y-[1.5rem] left-[19rem] h-[3rem] sm:left-[24.3rem] md:left-[8rem] md:-top-[1.2rem] md:h-[6rem]' src="https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61521a055d21652c872b3fab_graphic-circular-dash.svg" alt=''/>


    <img className=' pr-6 h-[32rem] sm:h-[40rem] sm:w-[70%] lg:h-auto lg:w-[80%] lg:ml-auto' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61647df68010cc7b2c5f2f85_image-home-spine.jpg' alt=''/>
</div>
<div className='col-span-1'></div>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className=' col-span-3 my-auto lg:w-[90%] xl:w-[40%] '>
<div  className=" text-3xl md:text-3xl lg:text-4xl font-base ">
        Whether you're struggling with neck pain or your back is making life difficult,                                                                                         we're here to help .
    </div>
<div  className='flex my-10'>
        <img src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61521b00b2cb853970f7bb8f_icon-spine-blue.svg' alt=''/>
        <div className='w-[.004rem] h-20 bg-gray-400 mx-5  mt-10'></div>
        <ul className=' m-3 mb-[4rem] text-lg w-[75%] list-disc text-left'>
            <li>
                Treatment and surgery for your neck or spine
            </li>
            <li>
                Ongoing management for chronic pain
            </li>
            <li>
                State-of-the-art, minimally-invasive treatments to grt you living yout life to the fullest again
            </li>
        </ul>
    </div>
    <Button text="How we can help" className="button text-blue bg-yellow pt-4 w-[15rem] mx-auto"/>
</div>
            </div>
        </div>
    </div>);





}

export default HomeSpine;
//  inset-y-[5rem] right-0 w-[7.5rem] sm:right-[13rem] md:right-[13rem] lg:-top-10 lg:right-[34rem] ml-5
// inset-y-[6.5rem] right-5 w-[4rem] sm:right-[15rem] lg:right-[35.5rem] lg:-top-3
