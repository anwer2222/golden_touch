"use client";

import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-no-repeat bg-cover bg-center relative">
      {/* Overlay using 'background' variable logic if needed, but keeping gradient for visibility
      <div className="absolute inset-0 z-10"
  //     style={{ background: "linear-gradient(to left, rgba(var(--background), 0.7), rgba(var(--background), 0.5), transparent)"
  // }} />  */}
  
  <div className="absolute inset-0 w-full h-full z-0">
  {/* 1. Sharp Image */}
  <Image
    src="/assets/img/hero/bg.jpg"
    alt="Hero Background"
    fill
    priority
    className="object-cover object-center"
  />
  
  {/* 2. Blur Overlay */}
  {/* ADDED: backdrop-blur-sm */}
  <div className="absolute inset-0 bg-black/30 backdrop-brightness-75 z-10"></div>

</div>
      
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-foreground text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-160">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-chart-4 mb-4"
          >
            <span className="text-chart-1 font-bold">Precision</span> Installation For Pre-Designed Environments
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9 text-primary-foreground font-medium max-w-120"
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