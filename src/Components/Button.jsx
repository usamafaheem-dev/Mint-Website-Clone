import React from 'react'

const Button = ({children,className}) => {
  return (
    <div>
  
        <button className={`bg-gradient-to-r from-[#F0F8FB] to-[#28C6F3] px-9 py-3 rounded-4xl font-bold font-inter tracking-tight text-base text-white ${className}`}>
          {children}
        </button>
      
    </div>
  )
}

export default Button
