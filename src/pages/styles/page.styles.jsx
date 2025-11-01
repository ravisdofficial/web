import styled from "styled-components";

export const PathSection = styled.div`
  padding: 120px 60px;
  text-align: center;

  background: linear-gradient(to top, #6d3518 40%, #f2efec 30%);
  @media (max-width: 800px) {
    background: #f2efec;
  }
`;
export const PathSectionCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 37px;
  max-width: 1113px;
  margin: auto;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  text-align: left;
`;

export const SectionTitle = styled.h3`
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

export const ProfileSliderSection = styled.div``;

export const SectionSubTitle = styled.h5`
  font-family: Barlow;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 20px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #6d3518;
  margin: 50px 0 70px 0;
`;
export const SericeSliderWrapper = styled.div``;
export const TestimonialSliderWraper = styled.div`
  padding: 40px;
  background: #f2efec;
`;
export const ZigZagSliderWraper = styled.div`
  background: #f2efec;
`;
