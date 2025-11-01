import styled from "styled-components";
import Slider from "react-slick";
import bg from "../../assets/bgVector/leaferightfaded.png";
export const SliderWrapper = styled.div``;

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledSlider = styled(Slider)`
  max-width: 450px !important;
  .slick-slider {
    max-width: 450px !important;
  }
  .slick-list {
    overflow: hidden;
    padding-bottom: 85px;
  }

  .slick-slide {
    transition: none;
  }

  .slick-slide > div {
    display: flex;
    justify-content: left;
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
  overflow: hidden;
`;

export const Image = styled.img`
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
  font-size: 48px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  color: black;
  max-width: 454px;
  padding-right: 35px;
  margin-bottom: 71px;
`;
export const SliderCardItemTitle = styled.h5`
  font-family: Poppins;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: black;
  max-width: 454px;
  padding-right: 132px;
`;

export const Content = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  leading-trim: CAP_HEIGHT;
  line-height: 1.5;
  letter-spacing: 0%;
  vertical-align: middle;

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
  position: absolute;
  bottom: 0;
  border: 1px solid #cea174;
  transform: rotate(180deg);
  z-index: 99;
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
  bottom: 0px;
  border: 1px solid #cea174;
  z-index: 99;
    left: 100px;

`;

export const Wrapper = styled.div`
  display: block;
`;
export const WrapperDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    .slider-container {
      max-width: 438px;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    .slider-container {
      max-width: 300px;
      margin-right: auto;
    }
  }
`;

export const SliderWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-size: contain;
  background-position: bottom left;
  background-repeat: no-repeat;
  background: url(${bg});
  background-size: 66%;
  background-repeat: no-repeat;
  background-position: top right;
`;
