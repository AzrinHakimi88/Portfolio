import React from 'react'
import ComputersCanvas from './Canvas3d';

const Home = () => {
  return (
    <div className='relative h-[90vh] w-[100vw] overflow-x-hidden bg-slate-950'>
        
        <div className='absolute inset-0 flex'>
          <div className='transparent-bg h-full w-1/2 p-4'>
            <h1 className='mt-8 text-white text-5xl poppins-bold text-center'>Hi, I am <span className='blue-gradient'>Azrin Hakimi bin Azizan</span> </h1>
          </div>
          <div className='h-full w-1/2 p-4 flex flex-col justify-center items-center '>
            <h1 className='text-white text-6xl text-center mt-4 mb-2 green-gradient resposive-text'>Computer Science</h1>
            <h3 className='text-white text-3xl text-center '>Information System </h3>
            <p className='text-white text-xl text-center'>in</p>
            <p className='text-white text-xl text-center'>University of Malaya</p>
          </div>
        </div>
        

        <div className='w-full h-full hidden sm:block'>
          <ComputersCanvas/> 
        </div>
        

        
        
    </div>
  )
}

export default Home