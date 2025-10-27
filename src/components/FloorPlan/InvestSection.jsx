import React from "react";
import {
  SectionWrapper,
  InvestBox,
  InvestContent,
  InvestTitle,
  InvestDescription,
  DownloadButton,
} from "./InvestSection.style";

import amenitiesPattern from "../../assets/amenities/amenitiesPattern.png";

function InvestSection() {
  return (
    <SectionWrapper>
      <InvestBox background={amenitiesPattern}>
        <InvestContent>
          <InvestTitle>INVEST IN EXCLUSIVITY AND ELEGANCE</InvestTitle>
          <InvestDescription>
            Discover competitive pricing options that reflect quality and
            exclusivity. For detailed pricing information and to view our
            comprehensive brochure, please download it below.
          </InvestDescription>
          <DownloadButton>DOWNLOAD NOW</DownloadButton>
        </InvestContent>
      </InvestBox>
    </SectionWrapper>
  );
}

export default InvestSection;

