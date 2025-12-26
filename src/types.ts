// types/index.ts

import { IconType } from "react-icons";


export interface ServiceItem {
  name: string;
  icon: IconType;
  title: string;
  description: string;
  serviceList: string[];
  thumbs: { url: string }[];
}

export interface WorkItem {
  img: string;
  name: string;
  description: string;
  href: string;
}

export interface StatItem {
  endCountNum: number;
  endCountText: string;
  text: string;
}

export interface FaqItemData {
  title: string;
  description: string;
}