import React from 'react'
import Button from './Shared/Button';
function Orthopedics() {
return (
<div className='py-[8rem]  bg-darkWhite block'>
    <div className='px-[1rem] md:px-[2rem] lg:px-[4rem]'>
        <div className='text-[5.8rem] font-sans font-bold text-yellow text-left'>
            02
        </div>
        <div className=' justify-center block md:grid md:grid-cols-7 text-blue '>
          
<div className='relative col-span-3'>
<img className='spine absolute z-10 inset-y-[9rem] right-[1rem] w-[5rem] md:-right-2 md:-inset-y-[6rem] md:w-[10rem]' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61523071debdd72494525430_graphic-circular-ortho.svg' alt=''/>
<img className='lining absolute z-20 inset-y-[10rem] right-6 w-12 md:-inset-y-[3.8rem] md:w-[6rem]' src="https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61521a055d21652c872b3fab_graphic-circular-dash.svg" alt=''/>
<img className='relative pr-[2rem] sm:pr-[6rem] md:pr-[2rem]' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6164813a79a9951930cbc427_image-home-orthopedics.jpg' alt=''/>
</div>
<div className='col-span-1'></div>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='col-span-3 my-auto'>

    <div className=" text-4xl ">
Painful joints or injuries stopping you living an active life? Let's change that.                                                                                                                                     we're here to help .
    </div>
    <div className='flex my-10'>
<img src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/615231b462eae574a4d9f887_icon-orthopedics-navy.svg' alt=''/>

        <div className='w-[.004rem] h-20 bg-gray-400 mx-8 mt-10'></div>
        <ul className=' mb-[4rem] text-lg w-[75%] list-disc text-left'>
            <li>
Pain management and treatments for sports and work-related injuries
            </li>
            <li>
Personalized treatment plans for age-related conditions

            </li>
            <li>
Joint replacement surgeries
            </li>
        </ul>
    </div>
    <Button text="Start your consultation" className=" text-blue bg-yellow text-sm md:text-lg mt-[4rem] w-[15rem] md:w-[17rem] mx-auto"/>
</div> 

        </div>
    </div>
<img className='w-[30%] m-auto -translate-y-[2rem]' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/61523301debdd76e61526e67_graphic-dashes-home.svg' alt=''/>
<div data-aos="fade-up" data-aos-anchor-placement="center-bottom">

<div className='text-[2rem] md:text-[3rem] lg:text-[5rem] text-left m-[4%] text-blue'>
    <p>
        Healthcare just got
    </p>
    <p>
        upgraded to first class.
    </p>
</div>
<div className='h-1 bg-blue w-[6rem] ml-[10%]'></div>
<div className='mx-[10%] text-blue opacity-60 my-[4%] text-[1.5rem] text-left'>
    At Legent, we’re all about making healthcare better. And that doesn’t just mean that we focus on getting you the best possible treatment using the latest technology, but on all the little things too, from super-friendly service to comfortable rooms with food so good you’ll (almost) forget you’re in hospital.
</div>

</div>


</div>
);

}

export default Orthopedics