import styled from "styled-components";

export const Wrapper =styled.div`

  background-image: ${(props) => 
     `linear-gradient(
      rgba(0, 0, 0, 0.6),   /* Top fade color (60% opacity) */
      rgba(0, 0, 0, 0.6)
    ),
         url(${props.$bgImage})`
  };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  border-radius: 8px;
 
  color: white;
    border-top-left-radius: 10000px;
        border-top-right-radius: 10000px;
        min-height:400px;
        max-width:420px;
        
`;

export const Count = styled.h4`
font-family: Maharlika;
font-weight: 400;
font-size: 80px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
text-transform: uppercase;
border-bottom: 1px solid #ffffff;
display: inline-block;
`
export const ContentDiv = styled.div`
    padding: 114px 38px 0 34px;
`
export const ContentP = styled.p`
font-family: Poppins;
font-weight: 400;
font-style: Regular;
font-size: 20px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;

`