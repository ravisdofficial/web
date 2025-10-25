import React from "react";
import FullSlider from "../components/FullSlider/FullSlider";
import CardOne from '../components/Card/CardOne';
const Home = () => {
  return (
    <>
      <FullSlider />
      <CardOne rev={false}
        bgColor={"#104D391A"}
        bgColor2={"#104D39"}
        img1={"src/assets/cards/cherry.webp"}
        img2={"src/assets/cards/vector1.webp"}
        heading={"Managed Farmlands"}
        btnLine={"Discover farmlands"}
        description={"Call a piece of paradise, yours. We offer diverse investment options like coffee plantations and teakwood groves. Our experts manage every aspect of your farm, from planting to sales, focusing on sustainable practices that protect your investment and the environment."}
        color={"#FFFFFF"}
      />
      <CardOne rev={true}
        bgColor={"#DDD7CB4D"}
        bgColor2={"#DDD7CB"}
        img1={"src/assets/cards/room.webp"}
        img2={"src/assets/cards/luxury.webp"}
        heading={"Luxury Villas & Resorts"}
        btnLine={"Explore luxury"}
        description={"Unveil the art of luxury living and immerse yourself in the tranquility of luxury villas and resorts. Each villa and resort offers a unique escape into indulgence and natural beauty, with world-class amenities designed to rejuvenate your spirit and enhance your lifestyle."}
        color={"#000000"}
      />
      <CardOne rev={false}
        bgColor={"#6D351833"}
        bgColor2={"#6D3518"}
        img1={"src/assets/cards/chess.webp"}
        img2={"src/assets/cards/vector.webp"}
        heading={"Revenue Generation"}
        btnLine={"Learn More"}
        description={"Your investment should work as hard as you do. Our strategic rental programs and expert property management ensure your villa or resort generates competitive returns, with transparency and ease."}
        color={"#FFFFFF"}
      />
    </>
  )
};

export default Home;
