import React, {useRef} from 'react'
import About from "../component/About";
import Project from "../component/Project";
import "./App.css";
import { useParallax } from "react-scroll-parallax";
import Header from '../component/Header';
import Home from '../component/Home';
import Contact from '../component/Contact';
import Skill from '../component/Skill';
const App = () => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="container-body">
      {/* Include the Header component and pass down the refs */}
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillRef={skillRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />

      {/* Content to scroll to */}
      <div>
 
        <div ref={homeRef}><Home/></div>
        <div ref={aboutRef}><About/></div>
        <div ref={skillRef}><Skill/></div>
        <div ref={contactRef}><Contact/></div>
        <div ref={projectRef}><Project/></div>
        

      </div>
    </div>
  );
};
export default App;
