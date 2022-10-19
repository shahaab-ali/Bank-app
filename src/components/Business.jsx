import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles";
import Buttons from "./Buttons";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-16 h-16 rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>

    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins text-white font-semibold text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-6">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the
        money.{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Buttons styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
