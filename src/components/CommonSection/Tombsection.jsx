import './tombsection.css'
import BG from '/src/assets/section2/pattern.webp';
import React from 'react'

export default function Tombsection(props) {
    return (
        <>
            <div className='tomb-container' style={{
                '--bg': `url(${BG})`,
                'backgroundColor': props.bgColor,
                'color': props.color
            }}>
                <div className='uppertomb'>
                    <img src={props.logo} alt=""/>
                    <p className='font-maharlika tomb__heading' >Discover our
                        <br />latest ventures.</p>
                    <p className='font-poppins tomb__content'>
                        Explore upcoming real estate developments
                        <br />and investment opportunities
                    </p>
                    {props.btn ? <button className='font-maharlika button border cursor-pointer mt-8 px-16 py-4 text-xs formax-w-fit cardBtn'>Discover Farmlands</button> : null}
                </div>
                <div className='tombRectangle'>
                    <img src={props.imgSrc} alt="" />
                </div>
            </div>
        </>
    )
}
