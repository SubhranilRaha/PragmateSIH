import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


function About() {
  
  return (
    <>
    <div id='about' className='relative h-screen bg-orange-800 lg:h-vlg md:h-mlg abtbgimg'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='-translate-y-2'><path fill="#fff" fill-opacity="1" d="M0,32L1440,96L1440,0L0,0Z"></path></svg>
      
      <div className="relative mx-10 -translate-y-36 h-72 ">
       <h1 className="absolute right-0 hidden pl-10 mb-8 text-6xl font-bold text-white translate-y-20 lg:block mx-9">About Us</h1>
      <div className="flex flex-row items-center lg:-translate-y-16">
      
      <Player className='hidden lg:block '
        autoplay
        loop
        src="https://lottie.host/9fda39ef-3be7-4a22-91a5-5349c2dd7529/NJPFiivFyJ.json"
        style={{ height: '700px', width: '700px' }}
      >
        <Player className='hidden -translate-x-10 translate-y-10 lg:hidden md:block'
        autoplay
        loop
        src="https://lottie.host/9fda39ef-3be7-4a22-91a5-5349c2dd7529/NJPFiivFyJ.json"
        style={{ height: '500px', width: '500px' }}
      ></Player>
      </Player>
      <div className="flex flex-col items-center">
      <p className="hidden text-xl font-semibold text-white text-end mx-9 lg:block ">
          The students in the pragmatic world need a holistic development, the question of manual efforts of the teachers to put in the progress of the students about their learning outcomes inn realtime is time consuming and exhaustive.We partner with AWS to provide auto scaling services and a load balancer to ensure a smooth fast and a scaled application
        </p>
        <p className="hidden pt-10 text-xl font-semibold text-white text-end mx-9 lg:block">
        Hence, we implement the realtime tracking of student learning outcomes based on inputs of students, teachers and schools. 
        We are here for you  
        </p>
      </div>
        <div className='translate-y-36 lg:hidden'>
          <div className='md:block '>
          <h1 className="flex justify-center pb-8 mx-3 text-4xl font-bold text-white md:-translate-y-36">About Us</h1>
          </div>
       
        <div className="-translate-y-16">
        <Player className='lg:hidden md:hidden'
        autoplay
        loop
        src="https://lottie.host/9fda39ef-3be7-4a22-91a5-5349c2dd7529/NJPFiivFyJ.json"
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
        <p className="mx-3 text-center text-white -translate-y-3 text-md md:block md:-translate-y-20">
        The students in the pragmatic world need a holistic development, the question of manual efforts of the teachers to put in the progress of the students about their learning outcomes inn realtime is time consuming and exhaustive.We partner with AWS to provide auto scaling services and a load balancer to ensure a smooth fast and a scaled application

        </p>
        {/* <p className="pt-5 mx-3 text-lg font-semibold text-center text-white -translate-y-3 md:block md:-translate-y-20">
        Hence, we implement the realtime tracking of student learning outcomes based on inputs of students, teachers and schools. 
        We are here for you  
        </p> */}
        </div>
        
        </div>
        </div>
        
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 translate-y-1'><path fill="#fff" fill-opacity="1" d="M0,160L1440,32L1440,320L0,320Z"></path></svg>
      
    </div>
    
    </>
  )
}

export default About