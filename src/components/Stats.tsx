"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { StatItem } from "@/types"; // Assuming shared type definition

const statsData: StatItem[] = [
  {
    endCountNum: 98,
    endCountText: "%",
    text: "On-Time Completion",
  },
  {
    endCountNum: 1500,
    endCountText: "+",
    text: "Offices Installed",
  },
  {
    endCountNum: 500,
    endCountText: "k",
    text: "Sq. Ft. Covered",
  },
  {
    endCountNum: 15,
    endCountText: "+",
    text: "Years of Precision",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 }); // Changed threshold to amount for consistency

  return (
    <section ref={ref} className="mt-16 xl:mt-32 bg-primary py-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row gap-12 text-center xl:text-left">
          {statsData.map((item, index) => (
            <div className="w-full flex flex-col items-center justify-center" key={index}>
              <div className="text-5xl font-bold text-accent mb-2">
                {inView && (
                  <CountUp 
                    start={0} 
                    end={item.endCountNum} 
                    delay={0.2} 
                    duration={3} 
                  />
                )}
                <span>{item.endCountText}</span>
              </div>
              <p className="text-primary-foreground/80 font-medium tracking-wide uppercase text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;