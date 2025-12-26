"use client";

import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
      {/* Overlay using 'background' variable logic if needed, but keeping gradient for visibility */}
      <div className="absolute inset-0 bg-linear-to-l from-background/0 via-background/50 to-background/70 z-10"></div>
      
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-foreground text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-160">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-primary mb-4"
          >
            <span className="text-chart-1 font-bold">Precision</span> Installation For Pre-Designed Environments
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9 text-muted-foreground font-medium max-w-120"
          >
            Every project receives our tailored approach and that signature golden touch. 
            We listen first, measure accurately, and install with intention.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="View Gallery" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;