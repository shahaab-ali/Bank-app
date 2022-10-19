import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`${styles.paddingY} flex flex-col md:flex-row`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-8 h-8" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>

      <div className="flex justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] text-[52px] leading-[75px] text-white">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] ss:leading-[100px] text-[52px] leading-[75px] text-white w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="robot" className="w-full h-full relative z-10" />
      <div className="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 pink__gradient" />
      <div className="absolute z-0 w-1/2 h-1/2 right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
);

export default Hero;
