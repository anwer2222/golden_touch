"use client";

import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "@/../public/assets/variants";

const Content = () => {
  return (
    <section className="pt-16 xl:pt-32 pb-16" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-182.5 shadow-lg bg-card p-4 xl:p-8 xl:px-22.5 xl:py-9 border-t-4 border-accent rounded-sm">
          <div className="flex flex-col xl:flex-row h-full gap-10 xl:gap-22.5">
            {/* Info Section */}
            <div className="w-full xl:max-w-95 xl:pr-17.5 xl:border-r xl:border-border/40 h-full flex flex-col">
              <h4 className="text-[26px] font-primary font-bold mb-6 text-card-foreground">
                Get In Touch
              </h4>
              <p className="mb-9 text-muted-foreground">
                Ready to begin? Tell us about your project. We`re here to help you measure, prepare, and install with confidence.
              </p>

              <div className="flex flex-col gap-10 mb-auto">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <RiChat1Line className="text-chart-1 size-20" />
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      Email
                    </h5>
                    <p className="mb-2 text-muted-foreground">Drop us a line</p>
                    <p className="font-semibold text-primary">hello@goldentouch.com</p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start gap-5">
                  <RiMapPin2Line className="text-chart-1 size-20" />
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      Office
                    </h5>
                    <p className="mb-2 text-muted-foreground">Visit our showroom</p>
                    <p className="font-semibold text-primary">123 Design District, Thunder Bay, CA</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <RiSmartphoneLine className="text-chart-1 size-20" />
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2 text-card-foreground">
                      Phone
                    </h5>
                    <p className="mb-2 text-muted-foreground">Mon-Fri from 9am to 6pm</p>
                    <p className="font-semibold text-primary">+1 (555) 123-0000</p>
                  </div>
                </div>
              <Socials containerStyles="flex gap-[40px] mt-8" iconStyles="text-muted-foreground hover:text-accent transition-all text-4xl size-24" />
              </div>

            </div>

            {/* Form Section */}
            <div className="flex-1 my-auto">
              <h2 className="h2 mb-3 text-card-foreground">Request A Quote</h2>
              <p className="mb-9 text-muted-foreground">
                Fill out the form below and we will get back to you with a tailored plan.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Content;