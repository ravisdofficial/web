import styled from 'styled-components';
import Slider from 'react-slick';
import testinBorderImg from '../../assets/bgVector/testi-border.png';

export const SliderWrapper = styled.div`
  width: 100%;
background: #F2EFEC;
  padding: 60px 0 80px;
  overflow: hidden;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

.sectio-title1 {
  max-width: 27vw;
    margin-left: 15vw;
    margin-bottom: 50px;
 @media (max-width: 1350px) {
    margin-left: 13vw;
    }
 @media (max-width: 1250px) {
    margin-left: 15vw;
    }
 @media (max-width: 1024px) {
    margin-left: 30vw;
    }
}
`;

export const StyledSlider = styled(Slider)`
.testimonial-card {
   max-width: 417px;

    @media (max-width: 1250px) {
    max-width: 300px;
  }
    @media (max-width: 786px) {
    max-width: 150px;
  }
    p {
    font-family: Poppins;
font-weight: 400;
font-style: Regular;
font-size: 18px;
leading-trim: NONE;
line-height: 28px;
letter-spacing: 0%;
padding-bottom: 60px;
position:relative;

&::after {
content: '';
    position: absolute;
    bottom: 0;
    height: 40px;
    width: 100%;
   background: url(${testinBorderImg}) no-repeat center / contain;
    left: 0;
        background-size: contain;
    background-repeat: no-repeat;
}
    }
h6 {
font-family: Poppins;
font-weight: 600;
font-style: SemiBold;
font-size: 24px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
color: #6D3518;
line-height: 1.5;
}
}


  .slick-list {
    overflow: hidden;
        max-width: 70vw;
    margin: auto;
  }
  
  .slick-slider {
    transition: none;
    max-width: 85vw;
  }
  
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
  
  .slick-arrow {
    display: none !important;
  }

`;

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 100;
  padding: 0 20px;
  
  @media (max-width: 1000px) {
    max-width: 100%;
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
  .left-arrow {
  transform: rotate(180deg);
  }
`;