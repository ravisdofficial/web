import React from 'react'
import Banner from "../components/FullSlider/Banner";
import CardSlider from '../components/CardSlider/CardSlider';
import ZigZagSlider from '../components/ZigZagSlider/ZigZagSlider';
import PofileCardSlider from '../components/PofileCardSlider/PofileCardSlider';
import Tombsection from "../components/CommonSection/Tombsection";
import Scenery from '../assets/home/scenery.png';
import Flower from '../assets/section2/flower.png';
import MissionVisionSection from '../components/MissionVisionSection/MissionVisionSection';
import { PathSection, SectionTitle, PathSectionCards, SectionSubTitle } from './styles/page.styles';
import OvelCard from '../components/OvelCard/OvelCard';
import { AboutovalCards } from '../content/about';
import { ProfileSliderSection } from './styles/page.styles'
import SliderImage1 from '../assets/sliderglobal/sliderCard1.webp'
import SliderImage2 from '../assets/sliderglobal/sliderCard2.webp'
import SliderImage3 from '../assets/sliderglobal/sliderCard3.webp'

export default function About() {

  const cardData = [
  {
    id: 1,
    title: 'Award name ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: SliderImage1
  },
  {
    id: 2,
    title: 'Award name ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: SliderImage2
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    image: SliderImage3
  }
];

  return (
    <>
      <Banner
        image="src/assets/home/banner2.webp"
        title="Crafting Spaces, Enriching Lives"
        content="Dive into the world of Vibez Estates, where every property tells a story of luxury, sustainability, and innovation."
        button="Learn More"
        bgEffect={true}
      />
      <Tombsection bgColor={"#DDD7CB4D"} bgTheme="vector-leaf-left-right-v1" color={'black'} logo={Flower} imgSrc={Scenery} btn={false}
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
      <CardSlider cardData={cardData} bgColor={"#DDD7CB"}/>
      <ProfileSliderSection className="green-color-with-vector">
        <PofileCardSlider />
      </ProfileSliderSection>
    </>
  );
}
