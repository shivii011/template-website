import React from 'react' 
import {NavbarBarItems}from '../Utils/NavData';
import Button from './Shared/Button';
function NavigatonLarge(className) {
  return (
< div className = {`${className} hidden lg:flex justify-between px-[4%] py-[3%]`}  >
    <img className='' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6151f03dd3c9f00ec84317f5_logo-horizontal-white.svg' alt=''/>
< nav className = ' flex text-white'>
        {NavbarBarItems.map((item)=>(
            <ul className="justify-around flex">
                <li className=' px-4 py-5 cursor-pointer text-base font-bold'>
            {item}
        </li>
            </ul>
        ))}
    <Button text={`8341-341-123`} className="border-2 border-gray-300 text-white w-[13rem]"/>
    </nav>
</div>
  )
}

export default NavigatonLarge