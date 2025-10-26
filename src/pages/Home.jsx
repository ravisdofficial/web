import React from "react";
import FullSlider from "../components/FullSlider/FullSlider";
import CardOne from '../components/Card/CardOne';
import Section1 from '../components/Section/Section1';
import CherryImg from '/src/assets/cards/cherry.webp';
import Vector1Img from '/src/assets/cards/vector1.webp';
import RoomImg from '/src/assets/cards/room.webp';
import LuxuryImg from '/src/assets/cards/luxury.webp';
import ChessImg from '/src/assets/cards/chess.webp';
import VectorImg from '/src/assets/cards/vector.webp';
import Scenery from '/src/assets/section2/scenery.jpg';
import Vector2 from '/src/assets/section2/Vector.png';
import Tombsection from "/src/components/CommonSection/Tombsection";

const Home = () => {
  return (
    <>

      <FullSlider />
      <Section1 />
      <CardOne rev={false}
        bgColor={"#104D391A"}
        bgColor2={"#104D39"}
        img1={CherryImg}
        img2={Vector1Img}
        heading={"Managed Farmlands"}
        btnLine={"Discover farmlands"}
        description={"Call a piece of paradise, yours. We offer diverse investment options like coffee plantations and teakwood groves. Our experts manage every aspect of your farm, from planting to sales, focusing on sustainable practices that protect your investment and the environment."}
        color={"#FFFFFF"}
      />

      <CardOne rev={true}
        bgColor={"#DDD7CB4D"}
        bgColor2={"#DDD7CB"}
        img1={RoomImg}
        img2={LuxuryImg}
        heading={"Luxury Villas & Resorts"}
        btnLine={"Explore luxury"}
        description={"Unveil the art of luxury living and immerse yourself in the tranquility of luxury villas and resorts. Each villa and resort offers a unique escape into indulgence and natural beauty, with world-class amenities designed to rejuvenate your spirit and enhance your lifestyle."}
        color={"#000000"}
      />

      <CardOne rev={false}
        bgColor={"#6D351833"}
        bgColor2={"#6D3518"}
        img1={ChessImg}
        img2={VectorImg}
        heading={"Revenue Generation"}
        btnLine={"Learn More"}
        description={"Your investment should work as hard as you do. Our strategic rental programs and expert property management ensure your villa or resort generates competitive returns, with transparency and ease."}
        color={"#FFFFFF"} />
      <Tombsection bgColor={"#104D39"} color={'white'} logo={Vector2} imgSrc={Scenery} btn={true}/>

    </>
  );
};

export default Home;
