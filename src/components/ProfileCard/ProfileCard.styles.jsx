import styled from "styled-components";

export const Card = styled.div`
  width: 75%;
  overflow: hidden;
  border-top-left-radius: 35%;
    border-top-right-radius: 35%;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 415px;
  object-fit: cover;
  border-top-left-radius: 90%;
    border-top-right-radius: 90%;
`;

export const Body = styled.div`
  padding: 24px;
    background: white;
`;

export const Title = styled.h3`
font-family: Poppins;
font-weight: 400;
font-size: 24px;
leading-trim: NONE;
line-height:1.2;
letter-spacing: 0%;

`;

export const Content = styled.p`
font-family: Poppins;
font-weight: 400;
font-size: 17px;
leading-trim: NONE;
line-height: 25px;
letter-spacing: 0%;

`;
export const SubTitle = styled.p`
font-family: Poppins;
font-weight: 400;
font-size: 17px;
leading-trim: NONE;
line-height: 29.6px;
letter-spacing: 10.4%;
text-align: left;
margin-top: 18px;
`;