import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: #104d39;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const Heading = styled.h2`
  font-size: 1.75rem;
  letter-spacing: 1px;
  font-weight: 600;
  color: #e5d9c7;
  text-transform: uppercase;
`;

export const SubHeading = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1rem;
  color: #d0cfcf;
  line-height: 1.6;
`;

export const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  align-items: start;
  justify-content: center;
  margin-top: 2rem;
`;

export const AmenityCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Text = styled.p`
  font-size: 0.95rem;
  color: #eaeaea;
  max-width: 250px;
`;
