import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CommonSubBanner from '../components/Common/commonSubBanner';
import irrigationIcon from "../assets/amenities/irrigationIcon.png";
import storageIcon from "../assets/amenities/storageIcon.png";
import securityIcon from "../assets/amenities/securityIcon.png";
import communityIcon from "../assets/amenities/communityIcon.png";
import servicesIcon from "../assets/amenities/servicesIcon.png";

const amenitiesSectInfo = {
  heading: "Amenities That Grow With You",
  subHeading: "From crop selection, and planting to harvesting and marketing, we provide a comprehensive set of services.",
  amenitiesData: [
    { icon: irrigationIcon, title: "Irrigation systems using the latest technology" },
    { icon: storageIcon, title: "High-quality, on-site storage facilities" },
    { icon: securityIcon, title: "24/7 security and maintenance services" },
    { icon: communityIcon, title: "Community centers and recreational areas" },
    { icon: servicesIcon, title: "Range of services offered" },
  ],
  columns: 5
}


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
       amenitiesSectInfo={amenitiesSectInfo}
      />
      
      </>
  );
}
