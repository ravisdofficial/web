import React from "react";
import { BannerDiv, BannerContentWrapper, StyledImage, BannerTitle, BannerContent } from './commonSubBanner.style';
import AmenitiesSection from "../Amenities/AmenitiesSection";

function CommonSubBanner({ image, title, content, boldContent = "", amenitiesSectInfo }) {
  return (
    <>
      <BannerDiv>
        <BannerContentWrapper>
          <div className="image-div">
            <StyledImage src={image} alt="project" />
          </div>
          <div>
            <BannerTitle>{title}</BannerTitle>
            <BannerContent>{content}</BannerContent>
            {boldContent && <div className="font-poppins font-bold text-lg leading-[28px]"
            >{boldContent}</div>}
          </div>
        </BannerContentWrapper>
      </BannerDiv>
      <AmenitiesSection
        heading={amenitiesSectInfo.heading}
        subHeading={amenitiesSectInfo.subHeading}
        amenitiesData={amenitiesSectInfo.amenitiesData}
      />
    </>
  );
}

export default CommonSubBanner;