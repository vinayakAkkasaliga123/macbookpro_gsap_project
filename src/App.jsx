import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Productviewer from './components/Productviewer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Performance_Section from './components/Performance_Section';
import Gaming_section from './components/Gaming_section';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Productviewer/>
      <Gaming_section/>
      
    </div>
  );
}

export default App
