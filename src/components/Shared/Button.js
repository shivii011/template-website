import React from 'react'


function Button({text,className}) {
  return (
    <div className={`${className} px-10 py-5 rounded-full text-[1.125rem] font-semibold font-sans cursor-pointer`}> {text}</div>
  )
}

export default Button