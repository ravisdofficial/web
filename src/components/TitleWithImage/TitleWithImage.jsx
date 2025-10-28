import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import useScrollAnimation from '../../hooks/useScrollAnimation'
import { slideFromLeft,
slideFromRight,
fadeScale,
fadeUp, } from '../../helpers/animationhelper';

const Title = styled.h5`
font-family: Maharlika;
font-weight: 400;
font-style: Regular;
font-size: 48px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
text-transform: uppercase;
color:white;
`
const TitleWrapper = styled.div`
    max-width: 588px;
    margin: auto;
    text-align: center;
        padding-bottom: 56px;
`
const TitleiImage = styled.img`
    max-width: 53px;
    margin: auto;
    text-align: center;
    margin-bottom: 20px;
`

const MotionTitle = motion(Title);
const MotionTitleImg = motion(TitleiImage);

function TitleWithImage({title, image}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <TitleWrapper>
        <MotionTitleImg
                    src={`${image}`} 
                                alt=""
                                variants={fadeUp(0.5)}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            />
        <MotionTitle 
            ref={ref}
            className=""
            variants={fadeScale(0.3)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            >
            {title}
        </MotionTitle>
        </TitleWrapper>
    );
}

export default TitleWithImage;