import React from "react";
import {
  Card,
  Image,
  Body,
  Title,
  Content,
  BlurImg
} from './SliderCardItem.styles'

const SliderCardItem = ({ image, title, subTitle = '', content, blur }) => {
  return (
    <Card className={blur && "top-content"}>
      {blur ? <BlurImg src={image} alt={title}/> :
        <Image src={image} alt={title} />
      }
      <Body className="content-body" >
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <Content>{content}</Content>
      </Body>
    </Card>
  );
};

export default SliderCardItem;
