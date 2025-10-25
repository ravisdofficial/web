import './cardOne.css'
import React from 'react'

export default function CardOne(props) {

    return (
        <>
            <div className={`flex ${props.rev ? 'flex-row' : 'flex-row-reverse'} items-center justify-between h-[714px]`}>
                <div
                    className="leftCard h-full min-w-[50%] flex flex-col items-center justify-center"
                    style={{ background: `linear-gradient(to bottom, white 50%, ${props.bgColor} 50%)` }}
                >
                </div>
                <div className="rectangle"
                style={props.rev ? { left: '157px' } : { right: '157px' }}>
                    <img src={`${props.img1}`} alt="" />
                </div>
                <div className='rightCard h-[100%] min-w-[50%] flex flex-col justify-center text-white text-left' style={{backgroundColor: props.bgColor2}}>
                    <img src={`${props.img2}`} alt="" />
                    <p className='font-maharlika card__heading'>{props.heading}</p>
                    <p className='font-barlow card__desc'>{props.description}</p>
                    <button className='button border border-white cursor-pointer hover:bg-black hover:text-white mt-8 px-16 py-4 text-xs font-barlow max-w-fit'>
                        {props.btnLine}
                    </button>
                </div>
            </div >
        </>
    )
}
