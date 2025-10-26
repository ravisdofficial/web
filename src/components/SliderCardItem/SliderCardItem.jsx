import React from "react";
import { Card,
Image,
Body,
Title,
Content, } from './SliderCardItem.styles'

const SliderCardItem = ({ image, title, subTitle = '', content }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Body>
        <Title>{title}</Title>
        { subTitle &&<SubTitle>{subTitle}</SubTitle>}
        <Content>{content}</Content>
      </Body>
    </Card>
  );
};

export default SliderCardItem;
