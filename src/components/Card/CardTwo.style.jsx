import styled from "styled-components";

export const CardTwoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  width: 30%;
  height: 25%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Image = styled.img`
  align-self: left;
  width: 20%;
  height: 20%;
`;

export const LineBreak2 = styled.hr`
  width: 100%;
  border: none;
  color: #000;
  height: 1px;
  background-color: #CEA177;
  margin: 10px 0;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder ;
  margin: 10px 0;
  `;
  
  export const Description = styled.p`
  font-size: 0.875rem;
  color: #000000B2;
  width: 90%;
`;