import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CommonSubBanner from '../components/Common/commonSubBanner';

export default function FarmlandPage() {
  return (
    <>
      <Banner
        image="src/assets/home/banner4.webp"
        title="Embrace the bounty of the land"
        content="Discover the sustainable elegance of managed farmlands, where investment meets tranquility"
        button=""
      />
      <CommonSubBanner
        image="src/assets/home/banner4_farmland.webp"
        title="Sustainable investments, serene living"
        content={`At Vibez Estates, we blend investment opportunities with a lifestyle enriched by nature. Our managed farmlands offer a unique chance to own and profit from agricultural land without the hassle of day-to-day management.`}
        boldContent = {`Experience the peace of rural living, coupled with the perks of modern, sustainable practices.`}
      />
      </>
  );
}
