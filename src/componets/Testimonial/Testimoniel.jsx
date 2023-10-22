import React from 'react';
import '../styles/Testimoniel.css';
import { testimonialsData } from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion'

export const Testimoniel = () => {
    const [selected, setSelected] = useState(0)
    const tLenght = testimonialsData.length

    return (
        <>
            <div className="testimoniels">
                <div className="left-t">
                    <span>Testimonial</span>
                    <span className='stroke-text'>what they</span>
                    <span>Say about us</span>
                    <div className='testimonial-data'>
                        <motion.span
                            key={selected}
                            initial={{x: -100 }}
                            whileInView={{x: 0 }}

                            transition={{ type: 'spring', duration: '3' }}
                        >
                            {testimonialsData[selected].review}
                        </motion.span>

                        <div>
                            <span style={{ color: 'var(--orange)' }}>
                                {testimonialsData[selected].name}

                            </span>
                            <span>{' '}
                                - {testimonialsData[selected].status}
                            </span>
                        </div>{" "}

                    </div>

                </div>
                <div className="right-t">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', duration: '2' }}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: 'spring', duration: '2' }}
                    ></motion.div>
                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: 'spring', duration: '3' }}
                        src={testimonialsData[selected].image} alt="" />
                    <div className='arrows'>
                        <img onClick={() => {
                            selected === 0 ? setSelected(tLenght - 1) : setSelected((pre) => pre - 1)
                        }} src={leftArrow} alt="" />
                        <img onClick={() => {
                            selected === tLenght - 1 ? setSelected(0) : setSelected((pre) => pre + 1)
                        }} src={rightArrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
