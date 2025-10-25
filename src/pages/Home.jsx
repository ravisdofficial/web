import React from "react";
import FullSlider from "../components/FullSlider/FullSlider";
import CardOne from '../components/Card/CardOne';
const Home = () => {
  return (
    <>
      <FullSlider />
      <CardOne rev={true}
        bgColor={"#6D351833"}
        bgColor2={"#6D3518"}
        img1={"src/assets/cards/chess.webp"}
        img2={"src/assets/cards/vector.webp"}
        heading={"Revenue Generation"}
        btnLine={"LEARN MORE"}
        description={"Your investment should work as hard as you do. Our strategic rental programs and expert property management ensure your villa or resort generates competitive returns, with transparency and ease. "}
      />
    </>
  )
};

export default Home;
