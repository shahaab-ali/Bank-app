import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
import Buttons from "./Buttons";

const cardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Buttons styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="card deal"
        className="w-full h-full"
      />
    </div>
  </section>
);

export default cardDeal;
