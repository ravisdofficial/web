import styled from "styled-components";

export const BannerDiv = styled.div`
  width: 100%;
  padding: 60px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media (max-width: 1024px) {
    padding: 50px 0 0px;
  }
  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

export const BannerContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  /* Tablet & Mobile View */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .image-div {
    @media (max-width: 900px) {
      margin: auto;
    }
  }
`;

export const StyledImage = styled.img`
  height: 583px;
  width: 100%;
  border-top-left-radius: 10000px;
  border-top-right-radius: 10000px;
  object-fit: cover;
  max-width: 431px;
  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 340px;
  }

  @media (max-width: 480px) {
    height: 260px;
  }
`;

export const BannerTitle = styled.h2`
  color: #333;
  margin-bottom: 1rem;
  font-family: Maharlika;
  font-weight: 400;
  font-style: Regular;
  font-size: 48px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  text-transform: uppercase;
  max-width: 757px;
  margin: auto;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const BannerContent = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  font-family: Poppins;
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  leading-trim: NONE;
  line-height: 28px;
  letter-spacing: 0%;

  @media (max-width: 900px) {
    text-align: center;
  }
`;
