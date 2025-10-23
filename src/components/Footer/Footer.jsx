
import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Footer = () => {

  const Container = styled.div`
    background-color: #DDD7CB;
    min-height: 523px;
    padding: 20px;`

  const Logo = styled.img`
    width: 119px;
    height: 83.64px;
  `;

  const LineBreak = styled.hr`
    border: none;
    border-top: 1px solid #000;
    margin-top: 20px;
    color: #000;
    display: flex;
    margin: auto;
    width: 88%;
  `;

  const Mail = styled.p`
    text-decoration: underline;
  `;

  const Address = styled.p`
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    `

  const FooterItem = styled.p`
    display: flex;
    margin-bottom: 18px;
    cursor: pointer;
  
    &:hover {
      text-decoration: underline;
      }
    `

    const SocialIcon = styled.img`
      max-width: 30px;
      max-height: 30px;
      margin-right: 20px;
      display: block;
      inline-size: 100%;
      object-fit: cover;
      aspect-ratio: 1;
      `

  return (
    <>
      <Container className="text-black p-4 mt-auto">
        <div className="container mx-auto px-4 py-10 flex justify-between">
          {/* LeftTop: Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <Logo src="src/assets/header/logo.png" alt="Logo" />
          </Link>

          {/* RightTop: Contact Us Button */}
          <div className="hidden md:block py-5 text-black px-5 py-2 transition text-left font-poppins">
            <p className="mb-5">
              +91 8152 88 33 88
            </p>
            <Mail>
              info@vibezclub.com
            </Mail>
          </div>
        </div>
        <LineBreak />

        <div className="flex justify-between mx-18 width-full px-4 py-5">
          <div>
            <Address className="font-poppins text-left text-xs">
              #200, 4th floor, 10th cross, CBI Main Road, <br />
              Ganganagar, Bangalore – 560032.
            </Address>
            <div className="flex flex-row mt-5">
              <Link
              to="https://www.youtube.com/channel/UCvjK6y-8a2MUEx_4Hqarjww"
              >
                <SocialIcon src='src/assets/footer/youtube.png' alt="Youtube"></SocialIcon>
              </Link>
              <Link
              to="https://www.instagram.com/vibezestates/"
              >
                <SocialIcon src='src/assets/footer/instagram.png' alt="Insta"></SocialIcon>
              </Link>
              <Link
              to="https://x.com/i/flow/login?redirect_after_login=%2Fvibez_coffee"
              >
                <SocialIcon src='src/assets/footer/twitter.png' alt="X"></SocialIcon>
              </Link>
              <Link
              to="https://www.facebook.com/VibezEstates/"
              >
                <SocialIcon src='src/assets/footer/facebook.png' alt="Facebook"></SocialIcon>
              </Link>
            </div>
          </div>
          <div className=" py-5 flex flex-row">
            <div className="mx-40 flex flex-col font-inter text-left text-sm">
              <FooterItem>About us</FooterItem>
              <FooterItem>Managed Farmlands</FooterItem>
              <FooterItem>Luxury Villas</FooterItem>
              <FooterItem>Revenue Generation</FooterItem>
              <FooterItem>Contact Us</FooterItem>
            </div>
            <div className="mx-2 flex flex-col font-inter text-left text-sm">
              <FooterItem>Privacy Policy</FooterItem>
              <FooterItem>Terms and Conditions</FooterItem>
              <FooterItem>Disclaimer</FooterItem>
            </div>
          </div>
        </div>
      </Container >
    </>
  );
};

export default Footer;
