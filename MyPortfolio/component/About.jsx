import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import TypeEffect from './TypeEffect';
import ParticlesComp from './Particles';


const About = () => {

  const handleDownload = () => {
    // Create an anchor element
    const downloadAnchor = document.createElement('a');

    // Set the href attribute to the URL of the file to download
    downloadAnchor.href = './resume/resume.pdf';

    // Set the download attribute to specify the default filename
    downloadAnchor.download = 'resume.pdf';

    // Append the anchor element to the body
    document.body.appendChild(downloadAnchor);

    // Trigger a click event on the anchor element
    downloadAnchor.click();

    // Clean up: remove the anchor element from the body
    document.body.removeChild(downloadAnchor);
  };

  return (
    <div className='h-[90vh] w-screen overflow-x-hidden bg-slate-800 px-[8%] overflow-hidden'>
      <div className='h-full overflow-hidden absolute top-0 -z-0'>
        <ParticlesComp/>
      </div>
      
    <div className='w-full h-full flex flex-col justify-center items-center md:p-24'> 
            <div className='w-full h-full flex flex-col xl:justify-between items-center xl:flex-row'>
              
              <div className=' mt-8'>
                <Parallax speed={20} tagOuter="figure">
                <TypeEffect strings={["Computer Science", "Information System",  "Web Developer", "Quick Learner"]}/>
                <div className='flex gap-[8%]'>
                  <div className='h-max about-box p-8 rounded-md'>
                    <p className='text-white text-xl max-w-[800px] about-text'>
                      I am Azrin Hakimi bin Azizan, student at University of Malaya. I study in Computer Science majoring in Information System. I am a dedicated computer science student with a strong foundation in web development and interested in full-stack web development. Currently seeking an internship in web development or other related fields.
                    </p>
                  </div> 

                  <div className='hidden md:block '>
                    <div className='max-w-[500px] overflow-hidden'>
                    <img className="h-full object-contain" src="./resume/resume.png" alt="" />
                    
                    </div>
                    <button  onClick={handleDownload} className='px-4 py-2 bg-slate-300  my-4'>Download Resume</button>
                  </div>
                  
                </div>
                <button  onClick={handleDownload} className='md:hidden px-4 py-2 bg-slate-300  my-4'>Download Resume</button>
                </Parallax>               
              </div>
            </div>
          </div>
    </div>
  );
};

export default About;
