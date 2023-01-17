import React from 'react'


function Button({text,className}) {
  return (
    <div className={`${className} px-10 py-5 rounded-fully text-[1.125rem] font-semibold font-sans `}> {text}</div>
  )
}

export default Button