import React from 'react'

const FooterBorder = () => {
  return (
    <div className="relative z-10 grid  grid-cols-1  md:items-end  px-7  md:px-15   ">
       <div className='border-1 border-[#27282A1A]'></div>
       <div className='flex md:justify-between items-center flex-col md:flex-row ' >
        <p className='md:text-base text-[12px]'>© 2023 – Kraut9 – All Rights Reserved</p>
        <p  className='md:text-base text-[12px]'>Privacy Policy    •    Terms</p>
       </div>
    </div>
  )
}

export default FooterBorder
