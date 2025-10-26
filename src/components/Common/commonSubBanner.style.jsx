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
`;

export const StyledImage = styled.img`
  height:583px;
  width: 100%;
  border-top-left-radius: 51%;
  border-top-right-radius: 51%;
  object-fit: cover;
`;
