import React from "react";
import Slider from "react-slick";
import ProfileCard from "../ProfileCard/ProfileCard";
import profileImage from '../../assets/profile/profile.png';
import { SliderWrapper, ArrowButtonRight, ArrowButtonLeft } from './PofileCardSlider.styles';
import RoudLeftArrow from '../../assets/sliderglobal/rounded-left-arrow.png';
import RoudrightArrow from '../../assets/sliderglobal/rounded-right-arrow.png';

const profileData = [
  {
    id: 1,
    title: 'Merin Dardenne',
    subtitle: 'subtitle',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: profileImage,
  },
  {
    id: 2,
    title: 'Ivet Houze',
    subtitle: 'subtitle',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: profileImage,
  },
  {
    id: 3,
    title: 'Daniel Willington',
    subtitle: 'Director',
    content: 'Daniel Willington, consectetur adipiscing elit',
    image: profileImage,
  },
  {
    id: 4,
    title: 'Merin Dardenne',
    subtitle: 'subtitle',
    content: 'Daniel Willington, consectetur adipiscing elit',
    image: profileImage,
  },
  {
    id: 5,
    title: 'Ivet Houze',
    subtitle: 'Assistant Director',
    content: 'Daniel Willington, consectetur adipiscing elit',
    image: profileImage,
  },
  {
    id: 6,
    title: 'Daniel Willington',
    subtitle: 'Admin manager',
    content: 'Daniel Willington, consectetur adipiscing elit',
    image: profileImage,
  }
];

function PofileCardSlider() {

  
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <ArrowButtonLeft direction="left" onClick={onClick} ><img src={RoudLeftArrow}  alt="rightarror" /></ArrowButtonLeft>
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowButtonRight direction="right" onClick={onClick} ><img src={RoudrightArrow}  alt="rightarror" /> </ArrowButtonRight>
       
      );
    }
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  return (
    <SliderWrapper>
      <Slider {...settings}>
          {profileData.map((card) => (
            <ProfileCard image={card?.image}  title={card.title} subTitle={card.subtitle} content={card.content} key={card.id} />
          ))}
      </Slider>
    </SliderWrapper>
  );
}

export default PofileCardSlider;
