import styled from "styled-components";

export const Card = styled.div`
  width: 95%;
  overflow: hidden;
`;

export const Image = styled.img`
width: 100%;
max-height: 415px;
min-height: 413px;
object-fit: cover;
`;

export const BlurImg = styled.img`
width: 100%;
max-height: 415px;
min-height: 413px;
object-fit: cover;
mask-image: linear-gradient(to right, #00000060, black 5%, black 95%, #00000060);
mask-repeat: no-repeat;
`

export const Body = styled.div`
  padding: 16px 0;
`;

export const Title = styled.h3`
  font-family: Poppins;
font-weight: 600;
font-style: SemiBold;
font-size: 24px;
leading-trim: CAP_HEIGHT;
line-height: 100%;
letter-spacing: 0%;
`;

export const Content = styled.p`
 font-family: Poppins;
font-weight: 400;
font-style: Regular;
font-size: 17px;
leading-trim: CAP_HEIGHT;
line-height: 23.8px;
letter-spacing: 0%;
margin-top: 18px;
`;