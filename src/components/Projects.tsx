"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import Pretitle from "./Pretitle";
import { RiArrowRightLine } from "react-icons/ri";

const projectsData = [
  {
    title: "Downtown Tech Hub",
    category: "Office Installation",
    image: "/assets/img/work/work-1.jpg", // Ensure path exists or use placeholders
    description: "A 15,000 sq ft installation of modular workstations for a high-growth tech startup, completed in 48 hours.",
  },
  {
    title: "Apex Medical Center",
    category: "Consulting & Fit-out",
    image: "/assets/img/work/work-2.jpg", 
    description: "Precision installation of sterile environment furniture and waiting room seating across 4 floors.",
  },
  {
    title: "Lawson & Partners",
    category: "Restoration",
    image: "/assets/img/work/work-3.jpg",
    description: "Refurbishing and re-configuring existing mahogany desks to fit a new open-plan layout.",
  }
];

const Projects = () => {
  return (
    <section className="pt-16 xl:pt-32 px-5" id="case-studies">
      <div className="container mx-auto">
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
            <div className="max-w-150">
                <Pretitle text="Case Studies" />
                <h2 className="h2 mb-4">Featured Installations</h2>
                <p className="text-muted-foreground max-w-100">
                    Deep dives into how we solve complex space challenges with our signature golden touch.
                </p>
            </div>
            <Link href="/#" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                View all projects <RiArrowRightLine />
            </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn("up", 0.3 + (index * 0.1))}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="group flex flex-col gap-4"
                >
                    <div className="relative w-full h-75 overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500"></div>
                        <Image 
                            src={project.image}
                            fill
                            alt={project.title}
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-chart-1 font-medium text-sm tracking-wider uppercase">
                            {project.category}
                        </span>
                        <h3 className="text-2xl font-primary font-bold text-chart-2 group-hover:text-chart-4 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                            {project.description}
                        </p>
                        <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold mt-2 underline decoration-accent underline-offset-4 hover:text-accent transition-colors">
                            Read Case Study
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
             <Link href="/#" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                View all projects <RiArrowRightLine />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;