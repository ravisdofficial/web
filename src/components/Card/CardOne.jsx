import './cardOne.css'
import React from 'react'

export default function CardOne(props) {

    return (
        <>
            <div className={`flex ${props.rev ? 'flex-row-reverse' : 'flex-row'} cardContainer`}>
                <div
                    className="leftCard"
                    style={{ background: `linear-gradient(to bottom, white 50%, ${props.bgColor} 50%)` }}
                >
                    <div className="rectangle">
                        <img src={`${props.img1}`} alt="" />
                    </div>
                </div>
                <div className='rightCard h-[100%] w-[50%] flex flex-col justify-center text-white text-left' style={{ backgroundColor: props.bgColor2 }}>
                    <img className='cardLogo' src={`${props.img2}`} alt="" />
                    <p className='font-maharlika card__heading' style={{color: props.color}}>{props.heading}</p>
                    <p className='font-barlow card__desc' style={{color: props.color}}>{props.description}</p>
                    <button className='button border cursor-pointer mt-8 px-16 py-4 text-xs font-barlow max-w-fit cardBtn' style={{color: props.color, borderColor: props.color}}>
                        {props.btnLine}
                    </button>
                </div>
            </div >
        </>
    )
}
