"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Cards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Happy Birthday to one of the goofiest man alive. Love you forever",
    name: "Haris Bhai",
    title: "Tur moromor jaan",
  },
  {
    quote:
      "Jibanot aji ahisili kintu keneke je jibon rongili. HBD Dost",
    name: "Juman Saikia",
    title: "Your buddy",
  },
  {
    quote: "A guy more than a friend and even deeper than family. Love you bro",
    name: "Himanshi Choudhury",
    title: "Your Queen",
  },
  {
    quote:
      "Happy birthday good friend",
    name: "Augustus",
    title: "Your brother",
  },
  {
    quote:
      "A man greater than family spawned today changing my life. Happy anniversary",
    name: "Hari Jain",
    title: "Loving bro",
  },
];
