import React from "react";
import { Card,
Image,
Body,
Title,
Content,
SubTitle } from './ProfileCard.styles'

const ProfileCard = ({ image, title, subTitle = '', content }) => {
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

export default ProfileCard;
