import React from "react";
import {
  SectionWrapper,
  TitleWrapper,
  Divider,
  ItemsWrapper,
  Item,
  Icon,
  ItemTitle,
  ItemDescription
} from "./ChooseVibez.style";


import arrowup_revenue from "../../assets/home/arrowup_revenue.png";
import ChooseVibez1 from "../../assets/home/ChooseVibez1.png";
import ChooseVibez2 from "../../assets/home/ChooseVibez2.png";
import ChooseVibez3 from "../../assets/home/ChooseVibez3.png";
import ChooseVibez4 from "../../assets/home/ChooseVibez4.png";
import ChooseVibez5 from "../../assets/home/ChooseVibez5.png";

const data = [
  {
    icon: ChooseVibez1,
    title: "Total Assets Under Management (AUM)",
    desc: "INR 300 Crores"
  },
  {
    icon: ChooseVibez2,
    title: "Diverse Portfolio",
    desc: "Resorts, Managed Farmlands, and Villa Projects"
  },
  {
    icon: ChooseVibez3,
    title: "Trusted by Thousands",
    desc: "1100+ Satisfied Customers"
  },
  {
    icon: ChooseVibez4,
    title: "Experienced Leadership",
    desc: "Over 15 Years of Cumulative Experience"
  },
  {
    icon: ChooseVibez5,
    title: "Proven Track Record",
    desc: "18% Internal Rate of Return (IRR) on Successful Exits"
  }
];

function ChooseVibez() {

  return (
    <SectionWrapper>
      <TitleWrapper>
        <img src={arrowup_revenue} alt="arrow" />
        <h2>WHY CHOOSE VIBEZ</h2>
      </TitleWrapper>

      <ItemsWrapper>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Item>
              <Icon src={item.icon} alt={item.title} />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.desc}</ItemDescription>
            </Item>
            {index < data.length - 1 && <Divider />} {/* vertical line */}
          </React.Fragment>
        ))}
      </ItemsWrapper>
    </SectionWrapper>
  );
};



export default ChooseVibez;

