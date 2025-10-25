import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CardSlider from '../components/CardSlider/CardSlider';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import PofileCardSlider from '../components/PofileCardSlider/PofileCardSlider';

export default function About() {
  return (
    <>
      <Banner
        image="src/assets/home/banner2.webp"
        title="Crafting Spaces, Enriching Lives"
        content="Dive into the world of Vibez Estates, where every property tells a story of luxury, sustainability, and innovation."
        button="Learn More"
        bgEffect={true}
        />
      <CardSlider />
      <PofileCardSlider />
        </>
  );
}
