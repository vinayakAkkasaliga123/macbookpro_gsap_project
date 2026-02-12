import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16';
import { MacbookModel14 } from '../models/Macbook-14';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ANIMATION_TIMELINE = 1;
const OFFSET_DISTANCE = 5;

const fadingmesh = (group, opacity)=>{
  if(!group) return;

  group.traverse((child)=>{
    if(child.isMesh){
      child.material.transparent=true;
      gsap.to(child.material, {opacity, duration:ANIMATION_TIMELINE})
    }
  })
}

const movingGroup = (group, x)=>{
  if(!group) return;
  gsap.to(group.position, {x, duration:ANIMATION_TIMELINE})
}



const SwitchingModel = ({scale, isMobile}) => {
  const miniMacbookReference = useRef();
  const bigMacbookreference = useRef();
  const showLargeMacbook = scale === 0.08 || scale===0.05

  useGSAP(() => {
  if (showLargeMacbook) {
    // --- HIDE THE 14" (Mini) ---
    movingGroup(miniMacbookReference.current, -OFFSET_DISTANCE);
    fadingmesh(miniMacbookReference.current, 0);

    // --- SHOW THE 16" (Big) ---
    movingGroup(bigMacbookreference.current, 0);
    fadingmesh(bigMacbookreference.current, 1);
  } else {
    // --- SHOW THE 14" (Mini) ---
    movingGroup(miniMacbookReference.current, 0);
    fadingmesh(miniMacbookReference.current, 1);

    // --- HIDE THE 16" (Big) ---
    movingGroup(bigMacbookreference.current, OFFSET_DISTANCE);
    fadingmesh(bigMacbookreference.current, 0);
  }
}, [scale]);
  const controlsConfig = {
    snap:true,
    speed:1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config:{mass:1, tension:0,friction:26}

  }
  return (
    <>
    <PresentationControls {... controlsConfig}>
      <group ref={bigMacbookreference} position={[OFFSET_DISTANCE, 0, 0]}>
        <MacbookModel16  scale={isMobile ? 0.04 : 0.07}/>
      </group>


    </PresentationControls>

    <PresentationControls {... controlsConfig}>
      <group ref={miniMacbookReference} position={[0, 0, 0]}>
        <MacbookModel14  scale={isMobile ? 0.03 : 0.06}/>
      </group>


    </PresentationControls>
    
    
    </>
  )
}

export default SwitchingModel
