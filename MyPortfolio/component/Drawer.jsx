import React, { useState } from 'react';


const data = [
    {
        id: 1,
        displayImg : './MovieApp.png',
        title: 'Movie Recomendation App',
        overview: 'This project was created when I am learning about react native. This is an application that sunggest a recommended movies and shows. I am using Movie API to get the data about top movies and shows from around the world.',
        githubLink: '',
        images:[
            './MovieApp.png',
            './MovieApp.png',
            './MovieApp.png'
        ]
    },
    {
        id: 2,
        displayImg : './webProjectHome.png',
        title: 'Web Development Project',
        overview: 'This is my group project for Web Development course. This project is about to create a website to support passive or active entrepreneurship. Basically, this web is created to support local artist to promote and seek for a project.',
        githubLink: '',
        images:[
            './webDev/1.png',
            './webDev/2.png',
            './webDev/3.png',
            './webDev/4.png'
        ]
    },
    {
        id: 3,
        displayImg : './MovieApp.png',
        title: 'Movie Recomendation App',
        overview: 'ncacjabcdobcadnlakalvnvnkdvb',
        githubLink: '',
        images:[
            './MovieApp.png',
            './MovieApp.png',
            './MovieApp.png'
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
        className={`overflow-y-auto fixed left-0 mx-4 px-12 bottom-0 z-50 w-full rounded-3xl h-[70%]  bg-gray-500 text-white bg-transparent backdrop-blur-2xl transition-transform ease-in-out duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >

        {
        
        }
        <div className='w-full flex justify-center mt-4 mb-12'>
            <button  onClick={toggleDrawer} className='px-8 py-4 bg-white text-black rounded-md' >Close</button>
        </div>
        {children}

        <div className='flex gap-4'>
            <div className='w-[500px] rounded-2xl overflow-hidden hidden xl:block'>
                <img className='w-full ' src={projectData[0].displayImg} alt=""/>
            </div>
            <div className='flex-1 transparent-bg rounded-xl p-4'>
                <h1 className='text-xl my-4 '>{projectData[0].title}</h1>
                <p>{projectData[0].overview}</p>
                <div className='w-12 h-12 rounded-full overflow-hidden'>
                    <a href={projectData[0].githubLink}>
                        <img src="./github.png" alt="" />  
                    </a>
                </div>
                
                <div>

                </div>
            </div>
        </div>
        
        <div className='w-full flex justify-center items-center'>
            <div className='flex overflow-x-auto  gap-8 my-20' >
                {projectData[0].images.map((img, index) => (
                    <img key={index} className='w-[350px]' src={img} alt=""/>
                ))}
            </div>
        </div>
        

        
        
      </div>}
    </div>
  );
};

export default Drawer;


