import React from "react";
import { apple, google, bill } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="bill" className="w-full h-full relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
      <div className="absolute z-0 -left-1/2 top-0 w-1/2 h-1/2 rounded-full pink__gradient" />
    </div>

    <div className={`${layout.sectionInfo} `}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-wrap mt-6 sm:mt-10">
        <img
          src={apple}
          alt="apple"
          className="w-32 h-[42px] cursor-pointer object-contain mr-5"
        />
        <img
          src={google}
          alt="google"
          className="w-32 h-[42px] cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
);

export default Billing;
