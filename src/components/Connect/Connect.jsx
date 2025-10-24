import './connect.css';
import React from 'react'

export default function Connect(props) {

    const handleClick = () => {
        window.location.href = '/contact';
    }

    return (
        <div className='connect-content'>
            <p className='connect-heading'>CONNECT WITH US</p>
            <p className='font-poppins text-[#104D39]'>{props.content}</p>
            <button
                onClick={handleClick}
                className='button border border-black cursor-pointer hover:bg-black hover:text-white mt-8 px-8 py-4'>
                <p className='font-barlow'>
                    GET IN TOUCH
                </p>
            </button>
        </div>
    )
}
