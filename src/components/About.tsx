"use client";

import Button from "./Button";
import Pretitle from "./Pretitle";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const About = () => {
  return (
    <section className="pt-16 md:pt-32 " id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* Text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-135 pl-10"
            >
              <Pretitle text="Our Philosophy" />
              <h2 className="h2 mb-6">Service With Precision & Intention</h2>
              <p className="mb-11 text-muted-foreground">
                A three-pillared approach guides every project: understanding your needs, 
                measuring with precision, and installing with intention. From the first 
                measurement to the final bolt, we deliver on time and on budget.
              </p>
              
              <div className="w-max flex flex-col text-right mb-10">
                {/* Replaced signature with text if image missing, or keep image */}
                <Image src="/assets/img/about/signature.svg" width={154} height={38} alt="Signature" />
                <p className="mb-5 text-chart-2 font-semibold">Golden Touch Team</p>
              </div>

              <Button text="Contact us" />
            </motion.div>
          </div>

          {/* Img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-111 xl:h-123.25 relative">
              <div className="hidden xl:flex w-111 h-123.25 bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image 
                src={"/assets/img/about/img.jpg"} 
                width={444} 
                height={493} 
                alt="About Golden Touch Interiors"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;