import React from 'react';
import Slider from 'react-slick';
import { SliderWrapper,
Container,
StyledSlider,
ArrowsContainer,
ArrowButton } from './TestimonialSlider.styles';
import RoudLeftArrow from '../../assets/sliderglobal/black-right-arrow.png';
import RoudrightArrow from '../../assets/sliderglobal/black-right-arrow.png';
import testinBorderImg from '../../assets/bgVector/testi-border.png'

export default function TestimonialSlider({cardData}) {
  const sliderRef = React.useRef(null);

  const settings = {
    className: "testimonial",
    infinite: true,
    slidesToShow: 2,
    speed: 300,
    arrows: false,
       responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  
   const SliderCardItem = ({ title, content }) => {
      return (
        <div className='testimonial-card'>
            <p>{content}</p>
            <h6>{title}</h6>
         
        </div>
      );
    };

  return (
    <SliderWrapper>
      <Container>
        <h6 className='sectio-title1'>Hear from our clients</h6>
        <StyledSlider ref={sliderRef} {...settings}>
          {cardData.map((card) => (
            <SliderCardItem key={card.id}  title={card.title} content={card.content} />
          ))}
        </StyledSlider>
        
        <ArrowsContainer>
          <ArrowButton direction="left" onClick={goToPrev} ><img className="left-arrow" src={RoudLeftArrow}  alt="rightarror" /></ArrowButton>
          <ArrowButton direction="right" onClick={goToNext} ><img src={RoudrightArrow}  alt="rightarror" /> </ArrowButton>
        </ArrowsContainer>
      </Container>
    </SliderWrapper>
  );
}