import React, { useEffect, useRef } from 'react'



const Hero = () => {

    const videoRef = useRef();
    useEffect(()=>{
        if(videoRef.current) videoRef.current.playbackRate=2;
    },[])
  return (
    <section className='flex flex-col items-center justify-center p-50' id='hero'>
        <div >
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="Title" />
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
        <button className='mb-2'>Buy</button>
        <p>From $1599 or $133/mo for 12 months</p>

    </section>
  )
}

export default Hero
