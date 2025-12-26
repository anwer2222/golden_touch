"use client";

import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";
import { FaqItemData } from "@/types";

const faqItemsData: FaqItemData[] = [
  {
    title: "Can you install based on existing blueprints?",
    description: "Absolutely. We specialize in working with pre-designed plans. Our team reviews your blueprints to ensure accurate measurements and placement before installation begins.",
  },
  {
    title: "Do you handle site cleanup after installation?",
    description: "Yes. Our 'Service with Precision' philosophy means we leave your space spotless. We remove all packaging, debris, and ensure the furniture is ready for immediate use.",
  },
  {
    title: "Can you work outside of business hours?",
    description: "We understand that business continuity is vital. We offer flexible scheduling, including evenings and weekends, to minimize disruption to your workflow.",
  },
  {
    title: "Do you provide measurement services before ordering?",
    description: "Yes! Correct measurements are critical. We provide on-site laser measurement services to ensure the equipment you order will fit perfectly into your space.",
  },
  {
    title: "What types of modular systems do you install?",
    description: "We are experienced with all major office furniture brands and modular systems, including cubicles, glass partitions, executive desks, and ergonomic workstations.",
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { delay: index * 0.1, duration: 0.3 }
  })
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32 mb-16 xl:mb-32">
      <div className="container mx-auto">
        {/* Text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-150 mx-auto xl:mb-16"
        >
          <Pretitle text="Common Questions" center />
          <h2 className="h2 mb-4">You Ask, We Answer</h2>
          <p className="text-muted-foreground">
            Understanding the installation process helps you plan better. Here are answers to common questions about our precise approach.
          </p>
        </motion.div>
        
        {/* FAQ Items */}
        <div className="max-w-225 mx-auto bg-card p-6 xl:p-10 shadow-sm rounded-lg border border-border/50">
          <ul className="flex flex-col">
            {faqItemsData.map((item, index) => (
              <motion.li
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
                key={index}
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;