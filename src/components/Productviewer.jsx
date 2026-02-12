import clsx from "clsx";
import useMacbookStore from "../store"
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Box, PerspectiveCamera } from '@react-three/drei'
import { MacbookModel14 } from "./models/Macbook-14";
import StudioLights from "./StudioLights";

import SwitchingModel from "./gsap/SwitchingModel";
import MediaQuery from "react-responsive";

const Productviewer = () => {
    const {color, setColor, scale, setScale}=useMacbookStore();

    const isMobile = MediaQuery({query:'max-w : 1024px'})
    return (
    <section id="product-viewer">
        <h2>Take a Closer Look</h2>
        <div className="controls">
            <p className="info">MacbookPro 14" in {color} </p>
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div 
                        onClick={()=>setColor('#adb5db')} 
                        className={clsx('bg-neutral-300', color==='#adb5db' && 'active')}
                        />
                        <div 
                        onClick={()=>setColor('#2e2c2e')} 
                        className={clsx('bg-neutral-900', color==='#2e2c2e' && 'active')}
                        />
                    </div>
                    <div className="size-control">
                        <div 
                           onClick={()=>setScale(0.06)} 
                           className={clsx(scale===0.06 ?'bg-white text-black ':'bg-transparent text-white')}
                           ><p>14"</p>
                           
                        </div>
                        <div 
                           onClick={()=>setScale(0.08)} 
                           className={clsx(scale===0.08 ?'bg-white text-black ':'bg-transparent text-white')}
                           ><p>16"</p>
                           
                        </div>
                    </div>

                </div>
            
        </div> 
       <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near:0.1, far:100 }}>
  {/* Add a background color to the scene to see if it's working */}
  
  
  {/* Standard Lighting */}
  
 

  {/* The Cube - centered at 0,0,0 */}
  
  <StudioLights/>

  {/* Helps you move around to find objects */}
  <OrbitControls enableZoom={false}/>
  <SwitchingModel scale={isMobile ? scale-0.03 : scale} isMobile={isMobile}/>
</Canvas>
    </section>
  )
}

export default Productviewer
