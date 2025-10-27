import './tombsection.css'
import BG from '/src/assets/bgVector/lines.png';
import React from 'react'
import CommonCard from '../CommonCard/CommonCard';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { fadeScale, slideFromLeft, slideFromRight } from '../../helpers/animationhelper';

export default function Tombsection(props) {

    const [ref, isInView] = useScrollAnimation();

    return (
        <>
            <div className='tomb-container' style={{
                '--bg': `url(${BG})`,
                'backgroundColor': props.bgColor,
                'color': props.color
            }}
                ref={ref}>
                <div className='uppertomb'>
                    <img src={props.logo} alt="" />
                    <motion.p
                        variants={slideFromLeft()}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className='font-maharlika tomb__heading' >Discover our
                        <br />latest ventures.</motion.p>
                    <motion.p className='font-poppins tomb__content'
                        variants={slideFromRight()}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        Explore upcoming real estate developments
                        <br />and investment opportunities
                    </motion.p>
                    {props.btn && <motion.button
                        variants={fadeScale(0.3)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className='font-maharlika button border cursor-pointer mt-4 px-16 py-4 text-xs formax-w-fit cardBtn'>Discover Farmlands</motion.button>}
                </div>
                <div className='tombRectangle'>
                    <motion.img
                        variants={fadeScale(0.3)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        src={props.imgSrc} alt="" />
                </div>
            </div>
        </>
    )
}
