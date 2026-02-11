import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'

const StudioLights = () => {
  return (
    
      <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer
                form='rect'
                scale={10}
                intensity={10}
                position={[10,0,1]}
                rotation-y={Math.PI/2} 
                
                />


            </group>

              
        </Environment>


      </group>
   
  )
}

export default StudioLights
