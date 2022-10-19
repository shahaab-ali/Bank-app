import React from "react";
import { stats } from "../constants";
import styles from "../styles";

const Stats = () => (
  <section className={`flex sm:justify-center sm:items-center flex-col sm:flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-1 justify-start items-center m-3 `}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-3 uppercase">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
