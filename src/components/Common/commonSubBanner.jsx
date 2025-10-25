import React from "react";
import { BannerDiv, BannerContentWrapper, StyledImage, BannerTitle, BannerContent } from './commonSubBanner.style';

function CommonSubBanner({ image, title, content, boldContent="" }) {
  return (
    <BannerDiv>
      <BannerContentWrapper>
        <div>
          <StyledImage src={image} alt="project" />
        </div>
        <div>
          <BannerTitle>{title}</BannerTitle>
          <BannerContent>{content}</BannerContent>
          {boldContent && <BannerContent style={{ fontWeight: 'bold', marginTop: '10px' }}>{boldContent}</BannerContent>}
        </div>
      </BannerContentWrapper>
    </BannerDiv>
  );
}

export default CommonSubBanner;