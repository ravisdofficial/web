import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
  width: 100%;
  padding: 60px 0 80px;
  overflow: hidden;
  position: relative;
    width: 100%;
    padding: 200px 0 80px 0;
    overflow: hidden;
    position: relative;
    background: red;
   background-image: url(src/assets/overlays/top-overlay.png), linear-gradient(to top, rgb(0 0 0 / 0%) 0%, transparent 70%), linear-gradient(to right, rgb(0 0 0 / 0%) 0%, transparent 50%, rgb(0 0 0 / 0%) 100%), linear-gradient(to bottom, rgb(255 255 255 / 35%) 0%, transparent 17%, rgb(16 77 57) 61%), url(src/assets/home/banner2.webp);
    background-size: contain;
    background-image: 
    linear-gradient(to top, rgb(0 0 0 / 0%) 0%, transparent 70%), 
    linear-gradient(to right, rgb(0 0 0 / 0%) 0%, transparent 50%, rgb(0 0 0 / 0%) 100%), 
    linear-gradient(to bottom, rgb(255 255 255 / 35%) 0%, transparent 17%, rgb(16 77 57) 61%), 
    url(${props => props.$bgImage});
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: hidden;
  }
  
  .slick-slide {
    transition: none;
  }
  
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }

  .slick-prev {
  left:40px !important;
  z-index:999;
  }

  .slick-track .slick-slide:nth-child(even) {
    margin-top: 150px;
}
   .slick-track {
    padding-bottom: 80px !important;
    }

    .slick-dots {
    bottom: 20px !important;
}

`;

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 57%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 100;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export const ArrowButton = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
`;

export const Card = styled.div`
  width: 85%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 415px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 16px 0;
`;

export const Title = styled.h3`
font-family: Maharlika;
font-weight: 400;
font-style: Regular;
font-size: 32px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
text-transform: uppercase;
color:white;
`;

export const Content = styled.p`
 font-family: Poppins;
font-weight: 400;
font-style: Regular;
font-size: 17px;
leading-trim: CAP_HEIGHT;
line-height: 23.8px;
letter-spacing: 0%;
margin-top: 18px;
`;

export const ArrowButtonLeft = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  position:absolute;
    bottom: 0;
    left: 55px;
`;
export const ArrowButtonRight = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
position: absolute;
bottom: -9px;
    right: 59px;
    z-index: 99;

`;