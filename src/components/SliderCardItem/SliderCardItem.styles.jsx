import styled from "styled-components";

export const Card = styled.div`
  width: 95%;
  overflow: hidden;

  &.top-content {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: #00ffe0;
      opacity: 0.2;
      pointer-events: none;
      width: 100%;
      height: 100%;
      left: 0;
    }
    .content-body {
      position: absolute;
      bottom: 0px;
      left: 25px;
      z-index:99;
      h3 {
        font-family: Maharlika;
        font-weight: 400;
        font-size: 50px;
        line-height: 58px;
        text-transform: uppercase;
        color: white;
      }
      p {
        font-family: Maharlika;
        font-weight: 400;
        font-size: 25px;
        vertical-align: middle;
        text-transform: uppercase;
        margin: 0;
        color: white;
        line-height: 1.2;
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 415px;
  min-height: 413px;
  object-fit: cover;
`;

export const BlurImg = styled.img`
  width: 100%;
  max-height: 415px;
  min-height: 413px;
  object-fit: cover;
`;

export const Body = styled.div`
  padding: 16px 0;
`;

export const Title = styled.h3`
  font-family: Poppins;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0%;
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
