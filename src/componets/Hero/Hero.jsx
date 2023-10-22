import React from 'react'
import '../styles/Hero.css'
import { Header } from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import hero_heart from '../../assets/heart.png';
import hero_calories from '../../assets/calories.png';
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';

export const Hero = () => {
    const transition= {type:'spring', duration: 3}
    return (
        <>
            <div className='hero'>
                <div className='blur hero-blur'></div>
                <div className='left-h'>
                    <Header />

                    {/* best adds */}
                    <div className='best-add'>
                        <motion.div 
                        initial={{left:100}}
                        whileInView={{left:5}}
                        transition={{...transition, type:'tween'}}
                        ></motion.div>
                        <span>the best fitness club in the lahore</span>
                    </div>

                    {/* head text */}
                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>shape </span>
                            <span>your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div className='text-decoration'>
                            <span>
                                In here we will help you to shape and build your ideal body and live up your life to
                            </span>
                        </div>
                    </div>
                    <div className="figure">
                        <div>
                            <span>
                                <NumberCounter start={100} end={150} delay='5' preFix='+' />
                            </span>
                            <span>
                                expert couchs
                            </span>
                        </div>
                        <div>
                            <span>
                                <NumberCounter start={800} end={900} delay='5' preFix='+' />
                            </span>
                            <span>
                                memebers joined
                            </span>
                        </div>
                        <div>
                            <span>
                                <NumberCounter start={30} end={50} delay='5' preFix='+' />
                            </span>
                            <span>
                                fitness programs
                            </span>
                        </div>
                    </div>
                    <div className="bttn hero-buttons">
                        <button className='btn'>Get Started</button>
                        <button className='btn'>Learn More</button>
                    </div>


                </div>
                <div className='right-h'>
                    <button className='btn'>Join Now</button>
                    <motion.div
                    initial={{right:'-3rem'}}
                    whileInView={{right:'3rem'}}
                    transition={{type:'spring',duration:'3'}}
                     className='heart-rate'>
                        <img src={hero_heart} />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>
                    <motion.img
                    initial={{right:'11rem'}} 
                    whileInView={{right:'18.5rem'}} 
                    transition={{type:'spring', duration:'3'}}
                     src={hero_image_back} className='hero-image-back' />
                    <img src={hero_image} className='hero-image' />
                    <motion.div
                     initial={{right:'42rem'}}
                     whileInView={{right:'33rem'}}
                     transition={{type:'spring', duration:'3'}}
                    className="calories">
                        <img src={hero_calories} />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 kcal</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
