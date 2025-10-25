 import styled from 'styled-components';
 export const BannerDiv = styled.div`
  width: 100%;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
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
`;


 export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 500;
`;


 export const BannerContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

export const StyledImage = styled.img`
  height:583px;
  width: 100%;
  border-top-left-radius: 10000000000px;
  border-top-right-radius: 10000000000px;
`;
