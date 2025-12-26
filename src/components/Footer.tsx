"use client";

import Image from "next/image";
import Link from "next/link";
import { RiMapPin2Fill, RiPhoneFill, RiMailFill, RiArrowRightLine } from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary text-primary-foreground pt-16 px-5"
    >
      <div className="container mx-auto">
        <div className="pb-16 flex flex-col xl:flex-row gap-15 xl:gap-7.5">
          {/* Logo & Description */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/golde_touch.png" width={230} height={48} alt="Golden Touch Interiors" />
            </Link>
            <p className="text-primary-foreground/70 max-w-67.5">
              Precision installation for pre-designed office environments. Future-ready setups tailored to your workflow.
            </p>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h4 className="h4 text-primary-foreground mb-10">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="text-accent text-xl" />
                <p className="text-primary-foreground/80">123 Design District, Thumder Bay, CA</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl" />
                <p className="text-primary-foreground/80">+1 (555) 123-0000</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl" />
                <p className="text-primary-foreground/80">hello@goldentouch.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="flex-1">
            <h4 className="h4 text-primary-foreground mb-10">Stay Connected</h4>
            <p className="mb-9 text-primary-foreground/70">
              Subscribe to get the latest updates on modular systems and office trends.
            </p>
            <div className="relative max-w-92.5">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-background/10 h-16 w-full pl-7 text-primary-foreground placeholder:text-white/50 border border-white/10 rounded-none outline-none focus:border-accent transition-all"
              />
              <button className="bg-accent w-12 h-12 absolute right-2 top-2 bottom-2 text-accent-foreground text-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Acknowledgement */}
      <div className="bg-primary/20 py-8">
        <div className="container mx-auto flex flex-col gap-4 text-center xl:text-left">
           <p className="text-primary-foreground/50 text-sm">
             We acknowledge the traditional custodians of the land where we operate and pay respect to Elders past, present and emerging.
           </p>
           <div className="border-t border-white/10 my-4 w-full"></div>
           <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
              <p className="text-primary-foreground/60">
                Copyright &copy; 2025 Golden Touch Interiors. All rights reserved.
              </p>
              <Socials containerStyles="flex gap-6 text-white" iconStyles="hover:text-accent transition-all text-2xl" />
           </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;