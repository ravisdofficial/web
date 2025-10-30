import React from "react";
import Slider from "react-slick";
import ProfileCard from "../ProfileCard/ProfileCard";
import shubhaImg from "../../assets/profile/shubha.webp";
import ashwinImg from "../../assets/profile/aswin.webp";
import udayImg from "../../assets/profile/uaday.webp";
import {
  SliderWrapper,
  ArrowButtonRight,
  ArrowButtonLeft,
} from "./PofileCardSlider.styles";
import RoudLeftArrow from "../../assets/sliderglobal/rounded-left-arrow.png";
import RoudrightArrow from "../../assets/sliderglobal/rounded-right-arrow.png";
import TitleWithImage from "../TitleWithImage/TitleWithImage";
import titleFlower from "../../assets/bgVector/mindTitle.png";
const profileData = [
  {
    id: 1,
    title: "Mrs. Shubha Vinay",
    subtitle: "Director",
    content: "",
    image: shubhaImg,
  },
  {
    id: 2,
    title: "Mr. Ashwin Kumar",
    subtitle: "CEO",
    content: "",
    image: ashwinImg,
  },
  {
    id: 3,
    title: "Mr. Uday",
    subtitle: "Senior Architect",
    content: "",
    image: udayImg,
  },
];

function PofileCardSlider() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowButtonLeft direction="left" onClick={onClick}>
        <img src={RoudLeftArrow} alt="rightarror" />
      </ArrowButtonLeft>
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowButtonRight direction="right" onClick={onClick}>
        <img src={RoudrightArrow} alt="rightarror" />{" "}
      </ArrowButtonRight>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    < div className="pt-[60px]">
      <TitleWithImage title={"Minds Behind the Mission"} image={titleFlower} />
      <SliderWrapper>
        <Slider {...settings}>
          {profileData.map((card) => (
            <ProfileCard
              image={card?.image}
              title={card.title}
              subTitle={card.subtitle}
              content={card.content}
              key={card.id}
            />
          ))}
        </Slider>
      </SliderWrapper>
    
    </div>
  );
}

export default PofileCardSlider;
