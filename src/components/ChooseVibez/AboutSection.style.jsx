import styled from "styled-components";
import maskShape from "../../assets/home/Maskgroup.png";

export const SectionWrapper = styled.section`
  position: relative;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 5%;
  box-sizing: border-box;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 30%;
    background: #f2efec;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 60px 4%;
    &::before {
      width: 60%;
      height: 55%;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 3%;
    &::before {
      width: 100%;
      height: 40%;
    }
  }

  @media (max-width: 576px) {
    padding: 40px 2%;
    &::before {
      width: 100%;
      height: 35%;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 60px;
  width: 100%;
  max-width: 1280px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;

  img {
    width: 550px;
    height: auto;
    max-height: 805px;
    object-fit: cover;
    border-top-left-radius: 46%;
    border-top-right-radius: 46%;
    transition: all 0.3s ease;
  }

  @media (max-width: 992px) {
    img {
      max-width: 460px;
      max-height: 600px;
    }
  }

  @media (max-width: 768px) {
    img {
      max-width: 400px;
      max-height: 500px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 320px;
      max-height: 420px;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: left;
  }
`;

export const Icon = styled.img`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  margin-top: 4px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: #000;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 17px;
  font-style: Regular;
  color: #4b4b4b;
  line-height: 23.8px;
  margin: 0;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #d5b89a;
  width: 100%;
  margin: 12px 0;
  opacity: 0.5;
`;

export const RightSection = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;

  background-image: url(${maskShape});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;

  @media (max-width: 1024px) {
    background-size: 250px auto;
    background-position: top right;
  }

  @media (max-width: 768px) {
    background-size: 200px auto;
  }

  @media (max-width: 576px) {
    background-size: 150px auto;
    background-position: top center;
  }
`;

