import React from 'react';
import Slider from 'react-slick';
import titleFlower from '../../assets/bgVector/flower.png'
import { SliderWrapper,
Container,
StyledSlider,
Card,
Image,
Body,
Title,
Content, ArrowButtonRight, ArrowButtonLeft } from './ZigZagSlider.styles';
import RoudLeftArrow from '../../assets/sliderglobal/rounded-left-arrow.png';
import RoudrightArrow from '../../assets/sliderglobal/rounded-right-arrow.png';
import TitleWithImage from '../TitleWithImage/TitleWithImage';


export default function ZigZagSlider({cardData, bgImage, title}) {
  const sliderRef = React.useRef(null);

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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5%",
    slidesToShow: 2,
    speed: 500,
    dots:true,
    arrows: true,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
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

  const SliderCardItem = ({ image, title, subTitle = '', content }) => {
    return (
      <Card>
        <Image src={image} alt={title} />
        <Body>
          <Title>{title}</Title>
        </Body>
      </Card>
    );
  };

  return (
    <SliderWrapper $bgImage={bgImage}>
      <TitleWithImage title={title} image={titleFlower}/>
      <Container>
        <StyledSlider ref={sliderRef} {...settings}>
          {cardData.map((card) => (
            <SliderCardItem key={card.id} image={card?.image} title={card.title} content={card.content} />
          ))}
        </StyledSlider>

      </Container>
    </SliderWrapper>
  );
}