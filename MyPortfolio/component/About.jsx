import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const About = () => {
  return (
    <div className='h-[90vh] w-screen overflow-x-hidden bg-slate-800 px-24 overflow-hidden'>
      <div className='w-full h-full flex flex-col justify-center items-center md:p-24'> 
        <div className='w-full h-full flex flex-col xl:justify-between items-center xl:flex-row  mt-[90%] xl:mt-0 md:mt-[20%] sm:mt-[80%]'>
          <div className='hidden sm:block'>
            <Parallax scale={[0.9,1.8]} tagOuter="figure">
              <img
                src="./About.jpg"
                alt="image"
                width={500}
                height={500}
              />
            </Parallax>
          </div>
          <div className=''>
            <Parallax speed={20} tagOuter="figure">
              <div className='about-box p-8 rounded-md'>
                <p className='text-white text-xl max-w-[800px] text-center'>
                  I am Azrin Hakimi bin Azizan, student at University of Malaya. I study in Computer Science majoring in Information System. I am seeking for internship in web development. 
                </p>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
