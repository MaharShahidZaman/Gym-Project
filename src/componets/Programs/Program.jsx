import React from 'react'
import '../styles/Program.css';
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'


export const Program = () => {
  return (
    <>
    <din className="programs">
        <div className="header-programs">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <din className="program-categories">
            {programsData?.map((program)=>(
                <div className='categories'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span><span><img src={RightArrow} alt="" /></span>
                    </div>
                </div>

            ))}
        </din>
    </din>

    </>
  )
}
