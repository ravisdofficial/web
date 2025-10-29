import React from 'react';
import { motion } from 'framer-motion';
import './cardOne.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import {
    slideFromLeft,
    slideFromRight,
    fadeScale,
    fadeUp,
} from '../../helpers/animationhelper';
import { Link } from 'react-router-dom';

export default function CardOne(props) {
    const [ref, isInView] = useScrollAnimation();

    return (
        <div ref={ref}>
            <div
                className={`flex ${
                    props.rev ? 'flex-row' : 'flex-row-reverse'
                } items-center justify-between h-[714px] cardContainer`}
            >
                {/* Left Card */}
                <motion.div
                    className="leftCard h-full min-w-[50%] flex flex-col items-center justify-center"
                    style={{
                        background: props.isFullBg
                            ? `linear-gradient(to bottom, ${props.bgColorFullBg} 50%,${props.bgColor} 50%)`
                            : `linear-gradient(to bottom, white 50%, ${props.bgColor} 50%)`,
                    }}
                    variants={props.rev ? slideFromLeft() : slideFromRight()}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div
                        className="rectangle"
                        style={props.rev ? { left: '0' } : { right: '0' }}
                        variants={fadeScale(0.3)}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <img src={props.img1} alt="" />
                    </motion.div>
                </motion.div>

                {/* Right Card */}
                <motion.div
                    className="rightCard h-[100%] min-w-[50%] flex flex-col justify-center text-left px-10"
                    style={{ backgroundColor: props.bgColor2, color: props.color }}
                    variants={props.rev ? slideFromRight() : slideFromLeft()}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {props.isUnique ? (
                        <div className="uniqueContent px-8">
                            <motion.h2
                                className="font-maharlika font-normal text-[48px] leading-[52px] uppercase mb-12"
                                style={{ color: props.color }}
                                variants={fadeUp(0.4)}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {props.heading}
                            </motion.h2>

                            <div className="flex flex-col gap-6">
                                {props.uniqueItems?.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4"
                                        variants={fadeUp(0.5 + index * 0.1)}
                                        initial="hidden"
                                        animate={isInView ? 'visible' : 'hidden'}
                                    >
                                        {item.icon && (
                                            <img
                                                src={item.icon}
                                                alt=""
                                                className="w-[40px] h-[49px] shrink-0"
                                            />
                                        )}
                                        <p
                                            className="font-poppins font-normal text-[18px] leading-[28px]"
                                            style={{ color: props.color }}
                                        >
                                            {item.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            <motion.img
                                src={`${props.img2}`}
                                alt=""
                                variants={fadeUp(0.5)}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            />
                            <motion.p
                                className="font-maharlika card__heading"
                                style={{ color: props.color }}
                                variants={fadeUp(0.65)}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {props.heading}
                            </motion.p>
                            <motion.p
                                className="font-barlow card__desc"
                                style={{ color: props.color }}
                                variants={fadeUp(0.8)}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                            >
                                {props.description}
                            </motion.p>
                            {props.btnLine && (
                                <motion.button
                                    className="button border cursor-pointer hover:bg-black hover:text-white mt-8 px-16 py-4 text-xs font-barlow max-w-fit"
                                    style={{ borderColor: props.color, color: props.color }}
                                    variants={fadeUp(0.95)}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link to={props.link}>{props.btnLine}</Link>
                                </motion.button>
                            )}
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
