import React, { Component } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Iframe from 'react-iframe'
function Home() {

  return (
    <>
    <div className="hidden h-screen lg:block lg:mx-28 lg:mt-16">
      <div className="flex flex-row justify-between ">
      
      <h1 className="flex flex-col items-center justify-center font-semibold text-slate-700">
        <div className="flex flex-col">
        <span className="text-4xl font-pops text-slate-500">REALTIME</span>
        <span className="text-7xl font-pops">STUDENT</span>
        <span className="text-8xl font-pops">LEARNING</span>
        <div className="">
        <span className="text-5xl font-pops text-slate-500">OUTCOME</span> 
        </div> 
        </div>
        <div className="my-auto ml-auto -translate-y-10 group">
          <a href="#about" className='flex items-center pl-3 transition ease-in-out border-4 rounded-xl hover:origin-center hover:rotate-6 peer group-hover:text-first hover:border-alt '>
          <span className="text-3xl font-bold transition ease-in-out text-slate-300 group-hover:text-alt">LEARN MORE</span>
          <i class="uil uil-corner-right-down p-3 text-3xl font-bold font-pops translate-y-1 text-slate-300 group-hover:text-alt transition ease-in-out"></i>
        </a> 
        </div>
      </h1>
      <div className="relative ml-10">
      <div className="-translate-x-2 -translate-y-6 right-16 w-120 h-120 rounded-t-3xl bg-gradient-to-b from-orange-500 ">
      </div>
      <Player className='absolute top-10 '
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_yjrdpceb.json"
        style={{ height: '540px', width: '540px' }}
      >
      </Player>
      </div>
      </div>


    </div>
    <div className="hidden h-screen lg:hidden md:block lg:mx-28 lg:mt-16 md:mx-14 md:mt-16">
      <div className="flex flex-row justify-between md:flex-col md:items-center">
      <h1 className="flex flex-col items-center justify-center font-semibold text-slate-700">
        <div className="flex flex-col">
        <span className="text-4xl font-pops text-slate-500">REALTIME</span>
        <span className="text-7xl font-pops">STUDENT</span>
        <span className="text-8xl font-pops">LEARNING</span>
        <div className="">
        <span className="text-5xl font-pops text-slate-500">OUTCOME</span> 
        </div> 
        </div>
        <div className="my-auto ml-auto -translate-y-10 group">
          <a href="#about" className='flex items-center pl-3 transition ease-in-out border-4 rounded-xl hover:origin-center hover:rotate-6 peer group-hover:text-first hover:border-alt md:translate-y-20'>
          <span className="text-3xl font-bold transition ease-in-out text-slate-300 group-hover:text-alt">LEARN MORE</span>
          <i class="uil uil-corner-right-down p-3 text-3xl font-bold font-pops translate-y-1 text-slate-300 group-hover:text-alt transition ease-in-out"></i>
        </a> 
        </div>
      </h1>
      <div className="relative ml-10">
      <div className="-translate-x-2 -translate-y-6 right-16 w-120 h-120 rounded-t-3xl bg-gradient-to-b from-orange-500 md:translate-y-20">
      </div>
      <Player className='absolute top-10 md:translate-y-20'
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_yjrdpceb.json"
        style={{ height: '540px', width: '540px' }}
      >
      </Player>
      </div>
      </div>


    </div>
    <div className='mt-5 mb-10 h-128 md:mx-10 lg:hidden md:hidden'>
      <div className="flex items-center justify-center">
      
      <div className="flex flex-col">
      <h1 className="flex flex-col font-semibold left-4 top-14 text-slate-700">
        <span className="text-2xl font-pops text-slate-500">REALTIME</span>
        <span className="text-5xl font-pops">STUDENT</span>
        <span className="text-6xl font-pops">LEARNING</span>
        <div className="flex flex-row justify-center">
        <span className="text-4xl font-pops text-slate-500">OUTCOME</span> 
        </div>  
        
        <div className="relative">
        <div className="absolute -translate-y-48 w-28 rounded-3xl min-height-75 h-14 right-12 bg-gradient-to-b from-orange-500 -z-20">
        </div> 
        <div className="flex flex-col">
        <span href="#about" className="flex flex-col items-center text-3xl font-bold rotate-90 translate-x-40 -translate-y-24 text-slate-300 ">LEARN MORE
          </span>
          <i class="uil uil-angle-double-down text-5xl font-bold font-pops animate-bounce">
          </i>
        </div>
          
        </div>
        
      </h1>
      <Player className=''
        autoplay
        loop
        src="https://assets10.lottiefiles.com/packages/lf20_yjrdpceb.json"
        style={{ height: '360px', width: '360px' }}
      >
      </Player>
      </div>
      
      </div>
    </div>
    </>
  )
}

export default Home