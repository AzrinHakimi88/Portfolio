import React, { useState } from 'react';


const data = [
    {
        id: 1,
        displayImg : './MovieApp.png',
        title: 'Movie Recomendation App',
        overview: 'This project was created when I am learning about react native. This is an application that sunggest a recommended movies and shows. I am using Movie API to get the data about top movies and shows from around the world.',
        githubLink: 'https://github.com/AzrinHakimi88/MovieApp',
        images:[
            './MovieApp.png',
            './movie2.png',
            './movie3.png'
        ]
    },
    {
        id: 2,
        displayImg : './webProjectHome.png',
        title: 'Web Development Project',
        overview: 'This is my group project for Web Development course. This project is about to create a website to support passive or active entrepreneurship. Basically, this web is created to support local artist to promote and seek for a project.',
        githubLink: 'https://github.com/Sharwin1707/Web_Programming',
        images:[
            './webDev/1.png',
            './webDev/2.png',
            './webDev/3.png',
            './webDev/4.png'
        ]
    },
    {
        id: 3,
        displayImg : './mad1.png',
        title: 'Earth Guard',
        overview: 'This is my project for Mobile App Development subject. This project is based on Sustainable Development Goals 13 that is climate action. So, this application is develope to improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning. The development of this application is by using Android Studio. As a group project, we used agile development method to improve project efficiency and reduced development time by 15%.',
        githubLink: 'https://github.com/AzrinHakimi00/MAD_ASSIGNMENT',
        images:[
            './mad2.png',
            './mad3.png',
            './mad4.png'
        ]
    },
]

const Drawer = ({ children, open, close,id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const projectData = data.filter(project => project.id === id);

  return (
    <div className="relative">
      {/* Button to toggle the drawer */}
      <button
        onClick={toggleDrawer}
        className=" px-8 py-4 bg-white text-black rounded-md"
      >
        Details
      </button>

      {/* Drawer content */}
      {<div
        className={`fixed left-0 px-12 bottom-0 z-50 w-full rounded-3xl h-[70%]  bg-gray-500 text-white bg-transparent backdrop-blur-2xl transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >

        {
        
        }
        <div className='w-full flex justify-center mt-4 mb-12'>
            <button  onClick={toggleDrawer} className='px-6 py-3 bg-white text-black rounded-md' >Close</button>
        </div>
        {children}

        <div className='flex gap-4'>
            <div className='w-[500px] max-h-[300px] rounded-2xl border border-white overflow-hidden hidden xl:block'>
                <img className='w-full max-h-[300px] object-contain' src={projectData[0].displayImg} alt=""/>
            </div>
            <div className='flex-1 transparent-bg rounded-xl p-4'>
                <h1 className='text-xl my-4 '>{projectData[0].title}</h1>
                <div className=' flex flex-col justify-between'>
                  <div className='max-h-[180px] overflow-scroll'>
                    <p className='text-sm sm:text-[1rem]'>{projectData[0].overview}</p>
                  </div>
                  <div className='w-12 h-12 rounded-full overflow-hidden mt-8'>
                      <a href={projectData[0].githubLink}>
                          <img src="./github.png" alt="" />  
                      </a>
                  </div>
                </div>
                
                
                <div>

                </div>
            </div>
        </div>
        
        <div className='w-full flex justify-center items-center'>
            <div className='flex overflow-x-auto gap-8 my-8' >
                {projectData[0].images.map((img, index) => (
                  <div className='w-[300px] flex-shrink-0 border border-white flex justify-center
                  '>
                    <img key={index} className='h-[200px] object-cover' src={img} alt=""/>
                  </div>         
                ))}
            </div>
        </div>
        

        
        
      </div>}
    </div>
  );
};

export default Drawer;


