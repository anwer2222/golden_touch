"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper
      className="bg-card shadow-xl w-full max-w-157.5 h-auto xl:h-50 rounded-lg border border-border"
      loop={true}
      navigation={false}
    >
      {/* Slider 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
            <Image
              src="/assets/img/testimonials/avatar-1.jpg"
              fill
              className="object-cover rounded-full border-2 border-accent"
              quality={100}
              alt="Client Avatar"
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2">
            <p className="text-card-foreground italic leading-relaxed">
              &quot;The precision was incredible. They measured everything twice and the installation was flawless. Our new office looks exactly like the renderings.&quot;
            </p>
            <div>
              <p className="font-primary font-bold text-foreground">Sarah Jenkins</p>
              <p className="text-sm text-muted-foreground">Operations Manager, TechFlow</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
            <Image
              src="/assets/img/testimonials/avatar-2.jpg"
              fill
              className="object-cover rounded-full border-2 border-accent"
              quality={100}
              alt="Client Avatar"
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2">
            <p className="text-card-foreground italic leading-relaxed">
              &quot;Golden Touch is the right name. They handled our modular systems with such care. Minimal disruption to our workflow.&quot;
            </p>
            <div>
              <p className="font-primary font-bold text-foreground">Michael Ross</p>
              <p className="text-sm text-muted-foreground">CEO, Horizon Arch</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-15 py-8 flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-22.5 h-22.5 min-w-22.5">
            <Image
              src="/assets/img/testimonials/avatar-3.jpg"
              fill
              className="object-cover rounded-full border-2 border-accent"
              quality={100}
              alt="Client Avatar"
            />
          </div>
          {/* Text */}
          <div className="flex-1 xl:max-w-85 flex flex-col gap-2">
            <p className="text-card-foreground italic leading-relaxed">
              &quot;From the site measurements to the final cleanup, the team was professional and efficient. Highly recommend for any corporate fit-out.&quot;
            </p>
            <div>
              <p className="font-primary font-bold text-foreground">Emily Tao</p>
              <p className="text-sm text-muted-foreground">Director, Creative Spaces</p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Navigation Buttons */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;