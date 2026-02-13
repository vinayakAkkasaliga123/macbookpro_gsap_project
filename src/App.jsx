import React from 'react'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Productviewer from './components/productviewer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import GameSection from './components/GameSection';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Productviewer/>
      <GameSection/>
    </div>
  );
}

export default App
