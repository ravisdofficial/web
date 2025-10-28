import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #fdf8f3;
  padding: 80px 60px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;

  img {
    width: 32px;
    height: 32px;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "Maharlika", serif;
    font-size: 48px;
    text-transform: uppercase;
    color: #000;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: nowrap;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;


export const Divider = styled.div`
  width: 1px;
  background-color: #bba089;
  opacity: 0.4;
  height: 80px;
  align-self: flex-start;
  position: relative;
  top: 110px; 
  margin-left: 0; 
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Item = styled.div`
  flex: 1;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align left instead of center */
  text-align: left;
  position: relative;

  @media (max-width: 992px) {
    width: 45%;
    margin-bottom: 40px;
    align-items: center; /* Center align for smaller screens */
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
  margin-left: 5px; /* slight offset for perfect left alignment */
  align-self: flex-start; /* ensures icon aligns to left with title */

  @media (max-width: 992px) {
    align-self: center; /* center icon on smaller screens */
    margin-left: 0;
  }
`;

export const ItemTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const ItemDescription = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #3b3b3b;
  line-height: 26px;
  max-width: 240px;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
  }
`;
