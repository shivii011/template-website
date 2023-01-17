import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Button from './Shared/Button';
import {NavbarBarItems}from '../Utils/NavData';
function NavigationSmall(className) {
  const [isActive , setIsActive]= useState(false)
  const handleClick=()=>{
setIsActive(!isActive)
  }
    return (
    <div className={`${className} lg:hidden flex justify-between px-[4%] py-[3%]`}>
<img className='mb-auto' src='https://uploads-ssl.webflow.com/614a999fd87898600ee2bc39/6151f03dd3c9f00ec84317f5_logo-horizontal-white.svg' alt=''/>
<div className='text-right'>
<MenuIcon className=' text-white ' onClick={handleClick}/>
<nav style={{display:isActive ? "block":"none"}} className=' text-white '>
    {NavbarBarItems.map((item,key)=>(
    <ul className="justify-around flex">
        <li key={key} className=' px-4 py-5 cursor-pointer text-base font-bold'>
            {item}
        </li>
    </ul>
    ))}
    <Button text={`8341-341-123`} className="border-2 border-gray-300 text-white w-[13rem] hover:transform-2 "></Button>
</nav>

</div>

    </div>
  )
}

export default NavigationSmall