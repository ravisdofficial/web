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
  columns: 4,
};

export default function ProjectDetails() {
  return (
    <>
      <Banner
        image="src/assets/home/banner5.webp"
        title="Kaira"
        content="Location: Sakleshpur"
        button="Status: Now Selling"
      />

      <AmenitiesSection
        heading={amenitiesSectInfo.heading}
        subHeading={amenitiesSectInfo.subHeading}
        amenitiesData={amenitiesSectInfo.amenitiesData}
      />;
    </>
  );
}
