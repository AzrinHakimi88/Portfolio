import React, {useRef} from 'react'

const Header = ({ homeRef, aboutRef,skillRef, projectRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth',block: 'end',
    inline: 'end'  });
  };

  return (
    <div className='sticky top-0 left-0 z-10 h-[10vh] w-screen bg-slate-400 flex justify-between items-center px-6 py-5'>
      <div>
        <h1 className=''>MyPortfolio</h1>
      </div>

      <div className='flex gap-8'>
        {/* Use onClick event handlers to scroll to the respective sections */}
        <a onClick={() => scrollToSection(homeRef)}>Home</a>
        <a onClick={() => scrollToSection(aboutRef)}>About</a>
        <a onClick={() => scrollToSection(skillRef)}>Skills</a>
        <a onClick={() => scrollToSection(contactRef)}>Contact</a>
        <a onClick={() => scrollToSection(projectRef)}>Project</a>
        
  
        {/* Assuming you have one more section to scroll to */}
      </div>
    </div>
  );
};

export default Header;