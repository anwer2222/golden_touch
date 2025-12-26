"use client";

import { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";
import { FaqItemData } from "@/types";

const FaqItem = ({ title, description }: FaqItemData) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-border/40 last:border-none">
      <div 
        className="flex items-center justify-between py-6 cursor-pointer group" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="h4 text-lg md:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
          {title}
        </h4>
        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
            {isOpen ? (
                <RiSubtractFill className="text-primary text-xl" />
            ) : (
                <RiAddFill className="text-primary text-xl" />
            )}
        </div>
      </div>
      
      {/* Description Wrapper */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-50 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-muted-foreground leading-relaxed max-w-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;