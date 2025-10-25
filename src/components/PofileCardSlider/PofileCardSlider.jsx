import React from "react";
import Slider from "react-slick";
import ProfileCard from "../ProfileCard/ProfileCard";
import profileImage from '../../assets/profile/profile.png';
import { SliderWrapper } from './PofileCardSlider.styles';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
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
