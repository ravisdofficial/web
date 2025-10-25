import React from 'react';
import Slider from 'react-slick';

import SliderCardItem from '../SliderCardItem/SliderCardItem';
import SliderImage1 from '../../assets/sliderglobal/sliderCard1.webp'
import SliderImage2 from '../../assets/sliderglobal/sliderCard2.webp'
import SliderImage3 from '../../assets/sliderglobal/sliderCard3.webp'
import { SliderWrapper,
Container,
StyledSlider,
ArrowsContainer,
ArrowButton } from './CardSlider.styles'
import RoudLeftArrow from '../../assets/sliderglobal/rounded-left-arrow.png';
import RoudrightArrow from '../../assets/sliderglobal/rounded-right-arrow.png';


const cardData = [
  {
    id: 1,
    title: 'Award name ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: SliderImage1
  },
  {
    id: 2,
    title: 'Award name ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: SliderImage2
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: SliderImage3
  }
];

export default function Conatct() {
  const sliderRef = React.useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "20%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "15%",
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "5%",
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <SliderWrapper>
      <Container>
        <StyledSlider ref={sliderRef} {...settings}>
          {cardData.map((card) => (
            <SliderCardItem image={card?.image} title={card.title} content={card.content} />
          ))}
        </StyledSlider>
        
        <ArrowsContainer>
          <ArrowButton direction="left" onClick={goToPrev} ><img src={RoudLeftArrow}  alt="rightarror" /></ArrowButton>
          <ArrowButton direction="right" onClick={goToNext} ><img src={RoudrightArrow}  alt="rightarror" /> </ArrowButton>
        </ArrowsContainer>
      </Container>
    </SliderWrapper>
  );
}