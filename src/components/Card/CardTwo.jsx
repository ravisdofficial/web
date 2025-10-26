import React from 'react'
import { CardTwoContainer, LineBreak2, Image ,Title, Description } from './CardTwo.style'

export default function CardTwo(props) {
    return (
        <>
        <CardTwoContainer>
            <Image src={props.imgSrc} alt="" />
            <LineBreak2/>
            <Title className='font-poppins'>{props.title}</Title>
            <Description className='font-poppins'>{props.description}</Description>
        </CardTwoContainer>
        </>
    )
}
