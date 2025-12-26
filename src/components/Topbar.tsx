"use client";

import { RiPhoneFill, RiMailFill, RiTimeFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section className="hidden xl:flex py-3 bg-accent text-accent-foreground items-center" id="home">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-8">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <RiPhoneFill className="text-lg" />
              <p className="font-medium text-sm">+1 (555) 123-0000</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <RiMailFill className="text-lg" />
              <p className="font-medium text-sm">hello@goldentouch.com</p>
            </div>

            {/* Hours (New addition for context) */}
            <div className="flex items-center gap-2">
              <RiTimeFill className="text-lg" />
              <p className="font-medium text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <Socials 
            containerStyles="flex items-center gap-6" 
            iconStyles="text-accent-foreground hover:text-primary transition-all text-[18px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;