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
  gap: 20px;
`;

export const Heading = styled.h2`
 font-family: "Maharlika", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #e5d9c7;
  text-transform: uppercase;
      max-width: 787px;
    margin: auto;
`;

export const SubHeading = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0%;
  text-align: center;
  color: #d0cfcf;
  max-width: 700px;
  margin: 0 auto;
`;

export const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  justify-items: center;
  align-items: start;
  margin-top: 2rem;

  /* Responsive adjustments */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(180px, 1fr));
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
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
 font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 2%;
  text-align: center;
  color: #eaeaea;
  max-width: 250px;
`;

