"use client";

import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const SliderBtns = () => {
  const swiper = useSwiper();
  return (
    <div className="w-max absolute bottom-4 right-4 flex gap-2 z-10">
      <button
        className="bg-accent text-accent-foreground text-[22px] w-10 h-10 flex justify-center items-center transition-all hover:bg-primary hover:text-primary-foreground rounded-sm"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <RiArrowLeftLine />
      </button>
      <button
        className="bg-accent text-accent-foreground text-[22px] w-10 h-10 flex justify-center items-center transition-all hover:bg-primary hover:text-primary-foreground rounded-sm"
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default SliderBtns;