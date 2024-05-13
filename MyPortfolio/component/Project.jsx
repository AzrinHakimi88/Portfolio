import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import Drawer from './Drawer';

  

const Project = () => {
  return (
    <div className="container-body w-screen">
        
        <ParallaxBanner
        layers={[
            { image: "./Home.jpg", speed: -40 },
            {
            speed: 50,
            children: (
                
                <div className="bg-container">
                
                <h1 className="text-6xl text-white poppins-bold">Project</h1>
                <div className=' overflow-x-auto w-full flex justify-center items-center'>

                <div className='p-4 flex gap-8  overflow-x-auto rounded-md'>

                
                <div className='h-[500px] w-[350px] flex flex-shrink-0 flex-col items-center p-2  rounded-md transparent-bg gap-2'>
                        <h1 className='text-xl text-white'>Movie Recomendation App</h1>
                        <div className='h-[200px] rounded-md overflow-hidden border border-white mt-4 block'>
                            <img src="./MovieApp.png" alt="" />
                        </div>
                        <p className='line-clamp-6 text-white'>
                            This project was created when I am learning about react native. This is an application that sunggest a recommended movies and shows. I am using Movie API to get the data about top movies and shows from around the world.
                        </p>
                   
                        <Drawer open="Open" close="Close" id={1}>
  
                        </Drawer>
                    </div>

                    <div className='flex flex-shrink-0 flex-col items-center w-[350px]  p-2 h-[500px] rounded-md transparent-bg gap-2'>
                        <h1 className='text-xl text-white'>Web Development Project</h1>
                        <div className='h-[200px] w-full rounded-md overflow-hidden border border-white mt-4 block '>
                            <img className='object-cover w-full h-full' src="./webProjectHome.png" alt="" />
                        </div>

                        <p className='line-clamp-6 text-white'>
                            This is my group project for Web Development course. This project is about to create a website to support passive or active entrepreneurship. Basically, this web is created to support local artist to promote and seek for a project.
                        </p>
                        <Drawer open="Open" close="Close" id={2}>
  
                        </Drawer>    
                    </div>

                    <div className='flex flex-shrink-0 flex-col items-center w-[350px] p-2 h-[500px] rounded-md transparent-bg gap-2'>
                        <h1 className='text-xl text-white'>Web Development Project</h1>
                        <div className='h-[200px] rounded-md overflow-hidden border border-white mt-4 block'>
                        <img className='object-cover w-full h-full' src="./webProjectHome.png" alt="" />
                        </div>
                        <p className='line-clamp-6 text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laboriosam rerum. Totam consectetur ullam sed at quidem possimus? Accusamus blanditiis velit adipisci vel voluptate impedit dolores quisquam inventore at facere!
                        </p>
                        <Drawer open="Open" close="Close" id={3}>
  
                        </Drawer>    
                    </div>
                </div>

                
                
                </div>
                </div>
            ),
            },
        ]}
        className="bg-container h-[90vh]" >
        
        </ParallaxBanner>
  </div>
  )
}

export default Project