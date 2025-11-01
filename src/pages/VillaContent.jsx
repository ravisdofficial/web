import React from "react";
import Banner from "../components/FullSlider/Banner";
import CommonSubBanner from "../components/Common/commonSubBanner";
import poolIcon from "../assets/amenities/privateBeaches.png";
import fitnessIcon from "../assets/amenities/fitnessIcon.png";
import diningIcon from "../assets/amenities/diningIcon.png";
import golfIcon from "../assets/amenities/spa.png";
import {
  SericeSliderWrapper,
  TestimonialSliderWraper,
  ZigZagSliderWraper,
} from "./styles/page.styles";
import SericeSliderSection from "../components/ServicesSlider/ServiceSliderSection";
import {
  servicesSliderData,
  villaTestinmonials,
  ProjectSliderData,
} from "../content/villa";
import TestimonialSlider from "../components/TestimonialSlider/TestimonialSlider";
import ZigZagSlider from "../components/ZigZagSlider/ZigZagSlider";
import zigZagBgimage from "../assets/home/banner2.webp";
import CardOne from "../components/Card/CardOne";
import villacontactSec from "../assets/home/villacontactSec.jpg";
import star from "../assets/bgVector/star.png";
import star_1 from "../assets/bgVector/star_1.png";
import star_2 from "../assets/bgVector/star_2.png";
import bannerImage from "../assets/home/banner3.webp";
import subBannerImage from "../assets/home/banner3_villa.webp";

const amenitiesSectInfo = {
  heading: "Amenities designed for the discerning",
  subHeading:
    "Our luxury villas and resorts feature world-class extravaganza designed for every whim to be anticipated and fulfilled",
  amenitiesData: [
    { icon: golfIcon, title: "Private pools and spas" },
    { icon: fitnessIcon, title: "State-of-the-art fitness centers" },
    { icon: diningIcon, title: "Gourmet dining options" },
    {
      icon: poolIcon,
      title: "Exclusive access to golf courses and private beaches",
    },
  ],
};
export default function VillaContent() {
  return (
    <>
      <Banner
        image={bannerImage}
        title="Escape into elegance"
        content="Explore our prestigious villa and resort projects, where luxury meets serenity."
        button=""
      />
      <CommonSubBanner
        image={subBannerImage}
        title="Redefining luxurious living"
        content={`At Vibez Estates, luxury is more than just an amenity—it's a way of life. Our exclusive villa and resort projects are designed for discerning individuals who seek tranquility, privacy, and the finest in modern comforts. Nestled in picturesque locations, each property offers a unique gateway to a more serene and indulgent lifestyle.`}
        amenitiesSectInfo={amenitiesSectInfo}
      />
      <SericeSliderWrapper>
        <SericeSliderSection
          sliderData={servicesSliderData}
          title={"Seamless services for a luxe lifestyle"}
        />
      </SericeSliderWrapper>
      <TestimonialSliderWraper>
        <TestimonialSlider cardData={villaTestinmonials} sliderTitle="Hear from our clients" />
      </TestimonialSliderWraper>
      <ZigZagSliderWraper>
        <ZigZagSlider
          cardData={ProjectSliderData}
          title="Discover our
luxurious offerings"
          bgImage={zigZagBgimage}
        />
      </ZigZagSliderWraper>
      <CardOne
        rev={true}
        bgColor="#E7E2DA"
        bgColor2="#6B3E1D"
        color="#FFFFFF"
        isFullBg={true}
        bgColorFullBg="#F2EFEC"
        img1={villacontactSec}
        isUnique={true}
        heading="CHOOSE EXCELLENCE, CHOOSE VIBEZ ESTATES"
        uniqueItems={[
          { icon: star, text: "Unmatched luxury and exclusivity" },
          { icon: star_1, text: "Commitment to eco-friendly practices" },
          { icon: star_2, text: "A proven track record of excellence" },
        ]}
      />
    </>
  );
}
