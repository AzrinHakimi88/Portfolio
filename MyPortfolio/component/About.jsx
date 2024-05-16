import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import TypeEffect from './TypeEffect';
import ParticlesComp from './Particles';


const About = () => {
  return (
    <div className='h-[90vh] w-screen overflow-x-hidden bg-slate-800 px-[8%] overflow-hidden'>
      <div className='h-full overflow-hidden absolute top-0 -z-0'>
        <ParticlesComp/>
      </div>
      
    <div className='w-full h-full flex flex-col justify-center items-center md:p-24'> 
            <div className='w-full h-full flex flex-col xl:justify-between items-center xl:flex-row'>
              
              <div className='mt-8'>
                <Parallax speed={20} tagOuter="figure">
                <TypeEffect strings={["Computer Science", "Information System",  "Web Developer", "Quick Learner"]}/>
                  <div className='about-box p-8 rounded-md'>
                    <p className='text-white text-xl max-w-[800px] about-text'>
                      I am Azrin Hakimi bin Azizan, student at University of Malaya. I study in Computer Science majoring in Information System. I am a dedicated computer science student with a strong foundation in web development and interested in full-stack web development. Currently seeking an internship in web development or other related fields.
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
