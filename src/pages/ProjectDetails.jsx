import React from "react";
import Banner from "../components/FullSlider/Banner";
import AmenitiesSection from "../components/Amenities/AmenitiesSection";
import indoorGamesIcon from "../assets/amenities/indoorGamesIcon.png";
import restaurantIcon from "../assets/amenities/restaurantIcon.png";
import carParkingIcon from "../assets/amenities/carParkingIcon.png";
import wifiIcon from "../assets/amenities/wifiIcon.png";
import playAreaIcon from "../assets/amenities/playAreaIcon.png";
import swimmingPoolIcon from "../assets/amenities/swimmingPoolIcon.png";
import securityIconProjectDet from "../assets/amenities/securityIconProjectDet.png";
import cctvIcon from "../assets/amenities/cctvIcon.png";
import plantationTrailIcon from "../assets/amenities/plantationTrailIcon.png";
import gazeboIcon from "../assets/amenities/gazeboIcon.png";
import starGazingIcon from "../assets/amenities/starGazingIcon.png";
import badmintonIcon from "../assets/amenities/badmintonIcon.png";
import FloorPlans from "../components/FloorPlan/Floorplan";
import InvestSection from "../components/FloorPlan/InvestSection";
import Tombsection from '/src/components/CommonSection/Tombsection';
import Flower from '/src/assets/section2/flower.png';
import Kaira from '/src/assets/home/kaira.png';
import CardSlider from '../components//CardSlider/CardSlider';
import SliderImage1 from '../assets/sliderglobal/sliderCard1.webp'
import SliderImage2 from '../assets/sliderglobal/sliderCard2.webp'
import SliderImage3 from '../assets/sliderglobal/sliderCard3.webp'
import ProjectSlider from '../components/ProjectSilder/ProjectSlider';

const amenitiesSectInfo = {
  heading: "Amenities",
  subHeading: "",
  amenitiesData: [
    { icon: indoorGamesIcon, title: "Indoor Games" },
    { icon: restaurantIcon, title: "Restaurant" },
    { icon: carParkingIcon, title: "Car parking" },
    { icon: wifiIcon, title: "Wi-fi" },
    { icon: playAreaIcon, title: "Children’s Play Area" },
    { icon: swimmingPoolIcon, title: "Swimming Pool" },
    { icon: securityIconProjectDet, title: "24/7 security" },
    { icon: cctvIcon, title: "CCTV" },
    { icon: plantationTrailIcon, title: "Plantation Trail" },
    { icon: gazeboIcon, title: "Gazebo" },
    { icon: starGazingIcon, title: "Star Grazing" },
    { icon: badmintonIcon, title: "Badminton" },
  ],
};

export default function ProjectDetails() {

    const cardData = [
    {
      id: 1,
      image: SliderImage1
    },
    {
      id: 2,
      image: SliderImage2
    },
    {
      id: 3,
      image: SliderImage3
    }
  ];

  return (
    <>
      <Banner
        image="src/assets/home/banner5.webp"
        title="Kaira"
        content="Location: Sakleshpur"
        button="Status: Now Selling"
      />
      <Tombsection bgColor={"#DDD7CB4D"} color={'black'} logo={Flower} imgSrc={Kaira} heading={"Kaira — Embrace luxury living in nature's lap"} content={"Located in the picturesque town of Jannekere, Sakleshpur, Kaira offers a luxurious villa experience with an array of world-class amenities. Designed to provide comfort and elegance, Kaira is the perfect blend of modern living and natural beauty."} fontStyle={"font-poppins"} kaira={true} />
      <AmenitiesSection
        heading={amenitiesSectInfo.heading}
        subHeading={amenitiesSectInfo.subHeading}
        amenitiesData={amenitiesSectInfo.amenitiesData}
      />
      <FloorPlans />
      <ProjectSlider heading={"NEARBY ATTRACTIONS"} cardData={cardData} color={"black"} bgColor={"#DDD7CB"}/>
      <InvestSection />
    </>
  );
}
