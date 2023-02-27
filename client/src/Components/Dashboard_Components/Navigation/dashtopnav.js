import React from 'react'
import icon from './logo.png'

function topnav() {
  return (
         <div id="upnavbar" className="fixed top-0 flex bg-white shadow-sm w-full">
                    <img src={icon} alt="" className='py-2 pl-2 h-14 '/>
                    <div className="">
                    <span className="text-cus font-[Poppins] font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
        </div>
  )
}

export default topnav