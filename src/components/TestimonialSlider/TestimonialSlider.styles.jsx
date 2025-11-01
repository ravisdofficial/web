import styled from "styled-components";
import Slider from "react-slick";
import testinBorderImg from "../../assets/bgVector/testi-border.png";
import QuoteImg from "../../assets/bgVector/quote.png";
export const SliderWrapper = styled.div`
  width: 100%;
  background: #f2efec;
  padding: 60px 0 80px;
  position: relative;
  @media (max-width: 992px) {
    padding: 60px 0 40px;
  }
`;

export const Container = styled.div`
  width: 88%;
  margin: auto;
  padding: 0;
  .sectio-title1 {
    max-width: 499px;
    padding-left: 25px;
    @media (max-width: 992px) {
      max-width: unset;
      padding-left: 20px;
    }
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    padding-top: 60px;
  }

  .testimonial-card {
    position: relative;
    padding: 25px;

    &::after {
      content: "";
      position: absolute;
      top: -50px;
      right: 40px;
      height: 100px;
      width: 100px;
      background: url(${QuoteImg}) no-repeat center / contain;
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
      position: relative;

      &::after {
        content: "";
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
      color: #6d3518;
      line-height: 1.5;
    }
  }
`;

export const ArrowsContainer = styled.div``;

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
  right: 0;
  top: 40%;

  @media (max-width: 768px) {
    right: -30px;
    top: 55%;
  }
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
  .left-arrow {
    transform: rotate(180deg);
  }
  position: absolute;
  left: 0;
  top: 40%;
  @media (max-width: 768px) {
    left: -30px;
    top: 55%;
  }
`;
