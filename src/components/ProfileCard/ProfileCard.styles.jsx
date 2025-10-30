import styled from "styled-components";

export const Card = styled.div`

  border-top-left-radius: 10000px;
  border-top-right-radius: 10000px;
  position: relative;
    ::after {
    content: "";
    position: absolute;
    width: 100%;
    background: #96969600;
top: -21px;
    height: 389px;
 border:20px solid #3a6c433b;
    box-sizing: content-box;
    left: -20px;
    border-top-left-radius: 10000px;
    border-top-right-radius: 10000px;
        border-bottom: 0;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-top-left-radius: 10000px;
    border-top-right-radius: 10000px;
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
min-height: 57px;
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