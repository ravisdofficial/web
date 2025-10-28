import './connect.css';
import React from 'react'
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { fadeScale, slideFromLeft, slideFromRight } from '../../helpers/animationhelper';
import { Link } from 'react-router-dom';

export default function Connect(props) {

    const [ref, isInView] = useScrollAnimation();

    return (
        <div className='connect-content' ref={ref} style={{
            background: props.bg
                ? `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.5)), url(${props.bg}) center/cover no-repeat`
                : props.bgColor || '#F2EFEC',
            color: props.color,
        }}>
            <motion.p
                variants={slideFromLeft()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='connect-heading'>{props.heading}
            </motion.p>
            <motion.p
                variants={slideFromRight()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='font-poppins text-[props.color] max-w-md'>{props.content}</motion.p>
            <motion.button
                variants={fadeScale(0.3)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className=' font-barlow button border border-[props.color] text-[props.color] cursor-pointer hover:bg-black hover:text-white mt-8 px-8 py-4'>
                <Link
                    to="/contact"
                >
                    {props.btnText}
                </Link>
            </motion.button>
        </div>
    )
}
