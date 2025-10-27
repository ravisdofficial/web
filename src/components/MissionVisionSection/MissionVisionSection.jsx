import React from "react";
import styled from "styled-components";
import mission from "../../assets/amenities/mission.png";
import vision from "../../assets/amenities/vision.png";

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 426px; /* keeps section tall like your design */

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  padding: 56px 40px;
  background: ${({ bg }) => bg};

  @media (max-width: 1024px) {
    padding: 48px 32px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 560px;    
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;


  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
    max-width: 720px;
  }
`;

const Icon = styled.img`
  max-width: 35px;
  max-height: 35px;
  object-fit: contain;
    margin-bottom: 18px;
`;

const Header = styled.h2`
  font-family: "Maharlika", serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 1;
  text-transform: uppercase;
  color: #1a1a1a;
  margin: 0 0 20px 0;
`;

const Content = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #1a1a1a;
  margin: 0;
`;

const MissionVisionSection = () => {
  return (
    <SectionContainer>
      <Box bg="#DDD7CB">
        <ContentWrapper>
          <Icon src={mission} alt="Mission icon" />
          <Header>Mission</Header>
          <Content>
            To redefine the real estate landscape by championing sustainable and
            profitable agricultural land management and luxurious farm living.
          </Content>
        </ContentWrapper>
      </Box>

      <Box bg="#F5F3EF">
        <ContentWrapper>
          <Icon src={vision} alt="Vision icon" />
          <Header>Vision</Header>
          <Content>
            To be the leading provider of managed farmland and luxury farm home
            solutions, enhancing both land value and the quality of life for our
            clients.
          </Content>
        </ContentWrapper>
      </Box>
    </SectionContainer>
  );
};

export default MissionVisionSection;
