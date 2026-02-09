import clsx from "clsx";
import useMacbookStore from "../store"
import { Canvas } from "@react-three/fiber";

const Productviewer = () => {
    const {color, setColor, scale, setScale}=useMacbookStore();
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
        <Canvas>
            <ambientLight intensity={0.5} /> {/* Added light so you can see it */}
              <mesh position={[-1, 1, 4]} scale={10*scale}>
                 <boxGeometry args={[1, 1, 1]} /> {/* This defines the box shape */}
                 <meshStandardMaterial color={color} /> {/* This uses your Zustand color */}
              </mesh>
        </Canvas>
    </section>
  )
}

export default Productviewer
