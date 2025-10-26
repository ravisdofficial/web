import React from 'react'
import BG from '/src/assets/bgVector/lines.png';
import { CCContainer, CCContent, CCImg, CCUpper } from './CC.style';

export default function CommonCard(props) {
    return (
        <>
            <CCContainer style={{
                'background-image': `url(${BG})`,
                'backgroundColor': '#104D39',
                'color': props.color
            }}>
                <CCUpper>
                    <CCImg src={props.logo} alt="" />
                    <CCContent className='font-maharlika cc__heading' >{props.heading}</CCContent>
                </CCUpper>
            </CCContainer>
        </>
    )
}
