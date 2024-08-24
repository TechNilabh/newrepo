"use client";
import React, { useState } from "react";  // Move this import to the top
import { cn } from "./lib/utils";  // Move this import to the top

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "yesrounded-lg yesrelative yesbg-gray-100 dark:yesbg-neutral-900 yesoverflow-hidden yesh-60 md:yesh-96 yesw-full yestransition-all yesduration-300 yesease-out",
      hovered !== null && hovered !== index && "yesblur-sm yesscale-[0.98]"
    )}>
    <img
      src={card.src}
      alt={card.title}
      fill
      className="yesobject-cover yesabsolute yesinset-0" />
    <div
      className={cn(
        "yesabsolute yesinset-0 yesbg-black/50 yesflex yesitems-end yespy-8 yespx-4 yestransition-opacity yesduration-300",
        hovered === index ? "yesopacity-100" : "yesopacity-0"
      )}>
      <div
        className="yestext-xl md:yestext-2xl yesfont-medium yesbg-clip-text yestext-transparent yesbg-gradient-to-b yesfrom-neutral-50 yesto-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({
  cards
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="yesgrid yesgrid-cols-1 md:yesgrid-cols-3 yesgap-10 yesmax-w-5xl yesmx-auto md:yespx-8 yesw-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} />
      ))}
    </div>
  );
}
