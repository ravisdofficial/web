import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CommonSubBanner from '../components/Common/commonSubBanner';

export default function VillaContent() {
  return (
    <>
      <Banner
        image="src/assets/home/banner3.webp"
        title="Escape into elegance"
        content="Explore our prestigious villa and resort projects, where luxury meets serenity."
        button=""
      />
      <CommonSubBanner
        image="src/assets/home/banner3_villa.webp"
        title="Redefining luxurious living"
        content={`At Vibez Estates, luxury is more than just an amenity—it's a way of life. Our exclusive villa and resort projects are designed for discerning individuals who seek tranquility, privacy, and the finest in modern comforts. Nestled in picturesque locations, each property offers a unique gateway to a more serene and indulgent lifestyle.`}
      />
    </>
  );
}

