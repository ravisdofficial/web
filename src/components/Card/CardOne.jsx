import React from 'react';
import { motion } from 'framer-motion';
import './cardOne.css';
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { slideFromLeft,
slideFromRight,
fadeScale,
fadeUp, } from '../../helpers/animationhelper';

export default function CardOne(props) {
    const [ref, isInView] = useScrollAnimation();

    return (
        <div ref={ref}>
            <div className={`flex ${props.rev ? 'flex-row' : 'flex-row-reverse'} items-center justify-between h-[714px]`}>
                {/* Left Card */}
                <motion.div
                    className="leftCard h-full min-w-[50%] flex flex-col items-center justify-center"
                    style={{ background: `linear-gradient(to bottom, white 50%, ${props.bgColor} 50%)` }}
                    variants={props.rev ? slideFromLeft() : slideFromRight()}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                </motion.div>

                {/* Rectangle (Center Image) */}
                <motion.div 
                    className="rectangle"
                    style={props.rev ? { left: '157px' } : { right: '157px' }}
                    variants={fadeScale(0.3)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <img src={`${props.img1}`} alt="" />
                </motion.div>

                {/* Right Card */}
                <motion.div 
                    className='rightCard h-[100%] min-w-[50%] flex flex-col justify-center text-white text-left'
                    style={{backgroundColor: props.bgColor2}}
                    variants={props.rev ? slideFromRight() : slideFromLeft()}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.img 
                        src={`${props.img2}`} 
                        alt=""
                        variants={fadeUp(0.5)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    />
                    <motion.p 
                        className='font-maharlika card__heading'
                        variants={fadeUp(0.65)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {props.heading}
                    </motion.p>
                    <motion.p 
                        className='font-barlow card__desc'
                        variants={fadeUp(0.8)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {props.description}
                    </motion.p>
                    <motion.button 
                        className='button border border-white cursor-pointer hover:bg-black hover:text-white mt-8 px-16 py-4 text-xs font-barlow max-w-fit'
                        variants={fadeUp(0.95)}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {props.btnLine}
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}