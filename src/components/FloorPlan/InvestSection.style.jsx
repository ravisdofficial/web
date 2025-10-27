import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background-color: #f9f7f3; /* page background */
`;

export const InvestBox = styled.div`
  background-color: #6e3b12;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0;
  width: 85%;
  max-width: 1200px;
  padding: 80px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 50px 30px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

export const InvestContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  color: #fff;
`;

export const InvestTitle = styled.h2`
  font-family: "Maharlika";
  font-size: 36px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 24px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const InvestDescription = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  color: #fff;
  opacity: 0.9;
  max-width: 700px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const DownloadButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  font-family: "Poppins";
  font-size: 14px;
  letter-spacing: 0.5px;
  padding: 12px 36px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #6e3b12;
  }

  @media (max-width: 480px) {
    padding: 10px 28px;
    font-size: 13px;
  }
`;
