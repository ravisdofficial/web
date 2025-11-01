import React from "react";
import {
  SectionWrapper,
  ContentWrapper,
  Heading,
  SubHeading,
  AmenitiesGrid,
  AmenityCard,
  Icon,
  Text
} from "./AmenitiesSection.style";
import amenitiesPattern from "../../assets/amenities/amenitiesPattern.png";
import SliderImage1 from '../../assets/sliderglobal/sliderCard1.webp'
import SliderImage2 from '../../assets/sliderglobal/sliderCard2.webp'
import SliderImage3 from '../../assets/sliderglobal/sliderCard3.webp'
import ProjectSlider from '../ProjectSilder/ProjectSlider';

const AmenitiesSection = ({ heading, subHeading, amenitiesData}) => {

  const columns = amenitiesData.length <= 5 ? amenitiesData.length : 4;

  const cardData = [
  {
    id: 1,
    image: SliderImage1
  },
  {
    id: 2,
    image: SliderImage2
  },
  {
    id: 3,
    image: SliderImage3
  }
];

  return (
    <SectionWrapper background={amenitiesPattern}>
      <ContentWrapper>
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>

        <AmenitiesGrid columns={columns}>
          {amenitiesData.map((item, index) => (
            <AmenityCard key={index}>
              <Icon src={item.icon} alt={item.title} />
              <Text>{item.title}</Text>
            </AmenityCard>
          ))}
        </AmenitiesGrid>
        {/* <ProjectSlider cardData={cardData} heading={"Gallery"} color={"#DDD7CB"}/> */}
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AmenitiesSection;
