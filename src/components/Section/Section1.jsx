import './section.css'
import BG1 from '/src/assets/section1/Group-3.webp';
import BG2 from '/src/assets/section1/Group-5.webp';
import BG3 from '/src/assets/section1/arrowdown.png';
import React from 'react'

export default function Section1() {
    return (
        <>
            <div className='section-container' style={{
                '--bg1': `url(${BG1})`,
                '--bg2': `url(${BG2})`
            }}>
                <p className='font-maharlika section__heading' >Our vision. Your dream.
                    <br />A perfect blend.</p>
                <p className='font-barlow section__content' style={{
                    '--bg3': `url(${BG3})`
                }}>
                    <p className='text-[#6D3518] font-bold'>
                        Transforming landscapes and lives through exceptional real estate ventures
                    </p>
                    <br />
                    Vibez Estates is more than just a real estate company. We're a team based in Karnataka with a vision to transform landscapes and lives through exceptional real estate ventures across the city.
                    <br />
                    <br />
                    From our origins in managed farmlands to a diverse portfolio that now includes exquisite villas and serene resorts, we connect individuals with luxury, sustainability, and nature.
                </p>
                <p className='font-maharlika mt-8 section__heading' >
                    Welcome to Vibez Estates
                </p>
            </div>
        </>
    )
}
