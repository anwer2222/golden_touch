"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import { PiRulerFill, PiWrenchFill, PiUserGearFill, PiGearFill } from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { ServiceItem } from "@/types";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const serviceData: ServiceItem[] = [
  {
    name: "installation",
    icon: PiWrenchFill,
    title: "Office Equipment Installation",
    description: "Professional installation of pre-designed office layouts, furniture, workstations, and modular systems. We handle the full installation with care, efficiency, and technical expertise.",
    serviceList: [
      "Modular Systems",
      "Workstations",
      "Office Furniture",
      "Adaptive Setups",
      "Efficient Workflow",
      "Durable Materials",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "measurement",
    icon: PiRulerFill,
    title: "Measurement & Site Readiness",
    description: "We take the exact measurements you need to confidently place your order and ensure every component fits perfectly. No guesswork, no templates.",
    serviceList: [
      "Site Analysis",
      "Accurate Measurements",
      "Order Verification",
      "Layout Validation",
      "Space Planning",
      "Fit Assurance",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: PiUserGearFill,
    title: "Consulting & Coordination",
    description: "We coordinate delivery, prepare the site, and manage the installation process from start to finish. We ensure minimal disruption to your space.",
    serviceList: [
      "Project Coordination",
      "Delivery Management",
      "Site Preparation",
      "Timeline Planning",
      "Safety Compliance",
      "Final Walkthrough",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "others",
    icon: PiGearFill,
    title: "Others",
    description: "We coordinate delivery, prepare the site, and manage the installation process from start to finish. We ensure minimal disruption to your space.",
    serviceList: [
      "Project Coordination",
      "Delivery Management",
      "Site Preparation",
      "Timeline Planning",
      "Safety Compliance",
      "Final Walkthrough",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("installation");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-135 mx-auto mb-20"
        >
          <Pretitle text="What We Do" center />
          <h2 className="h2 mb-3">Tailored Installation Solutions</h2>
          <p className="mb-11 max-w-120 mx-auto text-muted-foreground">
            From adaptive systems to sustainable setups, we create environments that scale with your business tomorrow.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="installation"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-7.5"
          >
            <TabsList className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-7.5 h-full w-full xl:w-100 rounded-none p-0 bg-transparent">
              {serviceData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-25 flex items-center relative shadow-sm bg-card p-0 outline-none data-[state=active]:ring-2 ring-accent"
                >
                  <div
                    className={`w-25 h-25 flex items-center justify-center absolute left-0 transition-colors duration-300 ${
                      activeTab === item.name
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    <item.icon className="size-10"/>
                  </div>
                  <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-full pl-27.5 text-left">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            <div className="flex-1 bg-card text-card-foreground shadow-md h-auto xl:h-122.5 p-7.5">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0 h-full">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-7.5 h-full"
                  >
                    {/* Images */}
                    <div className="flex md:flex-col gap-5 xl:gap-7.5">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-35 xl:w-50 h-35 xl:h-50 overflow-hidden"
                        >
                          <Image src={thumb.url} fill alt="" className="object-cover" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Text & Button */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10 text-muted-foreground">{item.description}</p>
                        
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              <div className="capitalize font-medium text-card-foreground">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button text="Learn more" />
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;