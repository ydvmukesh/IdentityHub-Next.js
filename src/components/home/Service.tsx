import React from "react";
import Title from "../common/Title";
import CardIcon from "../common/CardIcon";
import { cardData } from "@/utils/data"; // Import the card data from data.ts
import SubTitle from '../common/SubTitle';

const Service = () => {

  return (
    <div className="service lg:pt-[160px]">
      <SubTitle subTitle="Services" />
      <div className="container">
        <Title
          title='<span class="block">See our services for </span>secure your <span class=" inline-block text-gradient">Data</span>'
          description="Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel."
        />
        <div className="cards-container grid  sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
          {cardData.map((card, index) => (
            <CardIcon
              key={index}
              title={card.title}
              description={card.description}
              buttonTitle={card.buttonTitle}
              buttonHref={card.buttonHref}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
