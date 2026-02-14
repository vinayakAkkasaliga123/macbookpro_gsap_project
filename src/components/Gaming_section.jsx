import React from 'react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';


const Gaming_section = () => {

    const isTablet = useMediaQuery({query:'(max-width: 1024px)'});

    useGSAP(()=>{
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger:{
                    trigger:'#showcase',
                    start: 'top top',
                    end:'bottom top',
                    scrub:true,
                    pin:true,
                }
            });
            timeline.to('.mask img',{
                transform:'scale(100)', ease:'none', scale:1.5
            }).to('.content',{opacity:1, y:0, ease:'power1.in'});
        }

    },[isTablet])
  return (
    <section id='showcase'>
        <div><video src="/videos/game.mp4" loop autoPlay muted playsInline ></video></div>
        <div className='mask'><img src="/mask-logo.svg" alt="mask" /></div>

        <div className='content'>
            <div className='wrapper'>
                <div className='lg:max-w-md'>
                    <h2>
                        Rocket Chip
                    </h2>
                    <div className='space-y-5 mt-7 pe-10'>
                        <p>
                            Introducing {" "}
                            <span className='text-white'>M4, The Powerful MAcbook Chip Ever</span>
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quod minus cupiditate odit facere iste earum natus, magnam blanditiis perferendis saepe modi est quae ipsam. Qui quas consectetur architecto rem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aut ipsa harum. Consequatur in quod repellat unde iure? Dolorum laborum sapiente inventore accusamus et sed suscipit provident repellat laboriosam. Ratione?
                        </p>
                        <p className='text-primary'>
                            Learn more about Apple Intelligence

                        </p>

                    </div>

                </div>

                <div className='max-w-3xs space-y-14'>
                    <div className='space-y-2'>
                        <p>Up to</p>
                        <h3 className='text-white'>4x Faster</h3>
                        <p>faster performance than M2</p>

                    </div>
                    <div className='space-y-2'>
                        <p>Up to</p>
                        <h3 className='text-white'>1.5x Faster</h3>
                        <p>CPU performance than M2</p>

                    </div>

                </div>

            </div>

        </div>
    </section>
  )
}

export default Gaming_section
