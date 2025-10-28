import React from 'react';
import Slider from 'react-slick';
import { SliderCardItemTitle,
StyledSlider,
Card,
Image,
Body,
Title,
Content, ArrowButtonRight, ArrowButtonLeft } from './ServicesSlider.styles';
import RoudLeftArrow from '../../assets/sliderglobal/black-right-arrow.png';
import RoudrightArrow from '../../assets/sliderglobal/black-right-arrow.png';

export default function ServicesSlider({cardData}) {


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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };



  const SliderCardItem = ({ title, content }) => {
    return (
      <Card>
        <Body>
          <SliderCardItemTitle>{title}</SliderCardItemTitle>
          <Content>{content}</Content>
        </Body>
      </Card>
    );
  };

  return (
    <>
    <div className="slider-container">
      <StyledSlider {...settings}>
        {cardData.map((card) => (
          <SliderCardItem title={card?.title} content={card?.content}/>
        ))}
      </StyledSlider>
    </div>
        </>
  );
}