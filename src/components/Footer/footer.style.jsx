import styled from "styled-components";

export const Container = styled.div`
    background-color: #DDD7CB;
    min-height: 523px;
    padding: 20px;`

export const Logo = styled.img`
    width: 119px;
    height: 83.64px;
  `;

export const LineBreak = styled.hr`
    border: none;
    border-top: 1px solid #000;
    margin-top: 20px;
    color: #000;
    display: flex;
    margin: auto;
    width: 88%;
  `;

export const Mail = styled.p`
    text-decoration: underline;
  `;

export const Address = styled.p`
    min-width: 150px;
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    `

export const FooterItem = styled.p`
    display: flex;
    margin-bottom: 18px;
    cursor: pointer;
  
    &:hover {
      text-decoration: underline;
      }
    `

export const SocialIcon = styled.img`
  max-height: 30px;
  margin-right: 10px;
  display: block;
  inline-size: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  margin-left: 10px;
  max-width: 30px;
  `