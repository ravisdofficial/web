import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CardSlider from '../components/CardSlider/CardSlider';
import ZigZagSlider from '../components/ZigZagSlider/ZigZagSlider';
import PofileCardSlider from '../components/PofileCardSlider/PofileCardSlider';
import Tombsection from "/src/components/CommonSection/Tombsection";
import Scenery from '/src/assets/home/scenery.png';
import Flower from '/src/assets/section2/flower.png';
import MissionVisionSection from '../components/MissionVisionSection/MissionVisionSection';
import { PathSection, SectionTitle, PathSectionCards, SectionSubTitle } from './styles/page.styles';
import OvelCard from '../components/OvelCard/OvelCard';
import { AboutovalCards } from '../content/about';
import {ProfileSliderSection } from './styles/page.styles'

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
        <Tombsection bgColor={"#DDD7CB4D"} color={'black'} logo={Flower} imgSrc={Scenery} btn={false}
      heading={"Foundation & evolution"} content={"Over the years, we've expanded our horizons to include a diverse range of properties from  farmlands to luxury villas and eco-resorts, while staying true to our roots in sustainable agriculture."} subHeading={"Vibez Estates began in 2009 as a visionary project in Bangalore."} subHeadColor={"#6D3518"}
      fontStyle={"font-barlow"}
        />
      <MissionVisionSection />
      <PathSection >
        <SectionTitle>
          Our path towards progress
        </SectionTitle>
        <SectionSubTitle>
          Vibez Estates has achieved remarkable growth and recognition in the real estate sector

        </SectionSubTitle>
        <PathSectionCards>
          {
            AboutovalCards.map((item) => {
              return <OvelCard key={item?.title} title={item?.title} content={item?.content} counts={item?.counts} bgImage={item?.bgImage} />
            })
          }
        </PathSectionCards>
      </PathSection>
      <CardSlider />
      <ProfileSliderSection className="green-color-with-vector">
      <PofileCardSlider />
      </ProfileSliderSection>
    </>
  );
}
