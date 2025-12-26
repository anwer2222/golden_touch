"use client";

import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { WorkItem } from "@/types";

const workData: WorkItem[] = [
  {
    img: "/assets/img/work/work-1.jpg",
    name: "Corporate HQ",
    description: "Full Office Installation",
    href: "#",
  },
  {
    img: "/assets/img/work/work-2.jpg",
    name: "Tech Hub",
    description: "Modular Systems Setup",
    href: "#",
  },
  {
    img: "/assets/img/work/work-3.jpg",
    name: "Creative Studio",
    description: "Adaptive Workstations",
    href: "#",
  },
  {
    img: "/assets/img/work/work-4.jpg",
    name: "Medical Center",
    description: "Precision Measurement",
    href: "#",
  },
];

const Work = () => {
  return (
    <section className="container mx-auto mt-12 pt-16" id="projects">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-center max-w-135 mx-auto xl:mb-20"
      >
        <Pretitle text="Gallery" center />
        <h2 className="h2 mb-3">Our Craftsmanship</h2>
        <p className="mb-11 max-w-120 mx-auto text-muted-foreground">
          A selection of completed installations — showcasing our precision and attention to detail.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        {workData.map((item, index) => (
          <div
            key={index}
            className="w-full h-123 relative overflow-hidden group flex justify-center rounded-lg shadow-sm"
          >
            <Image
              src={item.img}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              alt={item.name}
              quality={100}
            />
            {/* Hover Overlay */}
            <div className="w-[90%] bg-card/95 absolute bottom-4 flex justify-between items-center p-4 rounded-md translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
              <div>
                <h4 className="text-card-foreground font-primary font-semibold tracking-[1px] uppercase">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <RiCheckboxCircleFill className="text-accent text-lg" />
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <Link
                href={item.href}
                className="w-11 h-11 bg-accent text-accent-foreground rounded-full flex justify-center items-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <RiArrowRightUpLine className="text-xl" />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;