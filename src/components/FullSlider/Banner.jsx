import React from "react";
import { BannerDiv, BannerContentWrapper, BannerTitle, BannerContent, BannerButton } from "./Banner.style";

function Banner({ image, title, button, content }) {
  return (
    <>
      <BannerDiv $bgImage={image}>
        <BannerContentWrapper>
          <BannerTitle>{title}</BannerTitle>
          <BannerContent>{content}</BannerContent>
          {button && <BannerButton>{button}</BannerButton>}
        </BannerContentWrapper>
      </BannerDiv>
    </>
  );
}

export default Banner;
