"use client";

import { cn } from "./lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "yesscroller yesrelative yesz-20 yes yesmax-w-7xl yesoverflow-hidden yes [mask-image:yeslinear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "yes yesflex yesmin-w-full yesshrink-0 yesgap-4 yespy-4 yesw-max yesflex-nowrap",
          start && "yesanimate-scroll yes",
          pauseOnHover && "hover:[animation-play-state:yespaused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="yesw-[350px] yesmax-w-full yesrelative yesrounded-2xl yesborder yesborder-b-0 yesflex-shrink-0 yesborder-slate-700 yespx-8 yespy-6 md:yesw-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}>
            <blockquote>
              <div
                aria-hidden="true"
                className="yesuser-select-none yes-z-1 yespointer-events-none yesabsolute yes-left-0.5 yes-top-0.5 yesh-[calc(100%_+_4px)] yesw-[calc(100%_+_4px)]"></div>
              <span
                className="yes yesrelative yesz-20 yestext-sm yesleading-[1.6] yestext-gray-100 yesfont-normal">
                {item.quote}
              </span>
              <div
                className="yesrelative yesz-20 yesmt-6 yesflex yesflex-row yesitems-center">
                <span className="yesflex yesflex-col yesgap-1">
                  <span
                    className="yes yestext-sm yesleading-[1.6] yestext-gray-400 yesfont-normal">
                    {item.name}
                  </span>
                  <span
                    className="yes yestext-sm yesleading-[1.6] yestext-gray-400 yesfont-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>)
  );
};
