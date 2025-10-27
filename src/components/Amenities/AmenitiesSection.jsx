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

const AmenitiesSection = ({ heading, subHeading, amenitiesData}) => {

  const columns = amenitiesData.length <= 5 ? amenitiesData.length : 4;

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
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AmenitiesSection;
