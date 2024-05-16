import React, {useRef, useState} from 'react'

const Header = ({ homeRef, aboutRef,skillRef, projectRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth',block: 'end',
    inline: 'end'  });
  };

  const [isMenuOpen , setIsMenuOpen] = useState(false)

  const handleMenuClicked = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    
    <div className='sticky top-0 left-0 z-20 h-[10vh] w-screen bg-slate-400 flex justify-between items-center px-6 py-5'>
      <div>
        <h1 className=''>MyPortfolio</h1>
      </div>

      <div className='sm:flex gap-8 hidden '>
        {/* Use onClick event handlers to scroll to the respective sections */}
        <a onClick={() => scrollToSection(homeRef)}>Home</a>
        <a onClick={() => scrollToSection(aboutRef)}>About</a>
        <a onClick={() => scrollToSection(skillRef)}>Skills</a>
        <a onClick={() => scrollToSection(contactRef)}>Contact</a>
        <a onClick={() => scrollToSection(projectRef)}>Project</a>
        
  
        {/* Assuming you have one more section to scroll to */}
      </div>

      <div className='block sm:hidden'>
         <div onClick={handleMenuClicked} className='w-8'>
          <img src="./bar.png" alt="" />
         </div>
         {isMenuOpen ?
          <div className='absolute top-full right-0 flex flex-col z-20 p-2 bg-slate-50 m-1 rounded-md'>
            <a className='px-6 py-3 hover:bg-slate-200' onClick={() => scrollToSection(homeRef)}>Home</a>
            <a className='px-6 py-3 hover:bg-slate-200' onClick={() => scrollToSection(aboutRef)}>About</a>
            <a className='px-6 py-3 hover:bg-slate-200' onClick={() => scrollToSection(skillRef)}>Skills</a>
            <a className='px-6 py-3 hover:bg-slate-200' onClick={() => scrollToSection(contactRef)}>Contact</a>
            <a className='px-6 py-3 hover:bg-slate-200' onClick={() => scrollToSection(projectRef)}>Project</a>
         </div> : ''}
         
      </div>
    </div>
  );
};

export default Header;