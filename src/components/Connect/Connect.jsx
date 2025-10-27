import './connect.css';
import React from 'react'
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { fadeScale, slideFromLeft, slideFromRight } from '../../helpers/animationhelper';
import { Link } from 'react-router-dom';

export default function Connect(props) {

    const [ref, isInView] = useScrollAnimation();

    return (
        <div className='connect-content' ref={ref}>
            <motion.p
                variants={slideFromLeft()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='connect-heading'>CONNECT WITH US
            </motion.p>
            <motion.p
                variants={slideFromRight()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='font-poppins text-[#104D39]'>{props.content}</motion.p>
            <motion.button
                variants={fadeScale(0.3)}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className=' font-barlow button border border-black text-black cursor-pointer hover:bg-black hover:text-white mt-8 px-8 py-4'>
                <Link
                    to="/contact"
                >
                    GET IN TOUCH
                </Link>
            </motion.button>
        </div>
    )
}
