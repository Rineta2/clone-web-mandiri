import React, { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";

import AccordionItem from "@/components/hooks/section/pages/bantuan/AccordionItem";

export default function Accordion({ items, prefix = "" }) {
  const [expandedId, setExpandedId] = useState(null);
  const contentRefs = useRef({});

  const handleToggle = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    if (expandedId !== null && contentRefs.current[expandedId]) {
      gsap.to(contentRefs.current[expandedId], {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    items.forEach((item) => {
      const itemId = prefix ? `${prefix}-${item.id}` : item.id;
      if (itemId !== expandedId && contentRefs.current[itemId]) {
        gsap.to(contentRefs.current[itemId], {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });
  }, [expandedId, items, prefix]);

  return (
    <div className="flex flex-col gap-10 mt-28">
      {items.map((item) => {
        const itemId = prefix ? `${prefix}-${item.id}` : item.id;
        const isExpanded = expandedId === itemId;
        return (
          <AccordionItem
            key={itemId}
            item={item}
            isExpanded={isExpanded}
            onToggle={() => handleToggle(itemId)}
            contentRef={(el) => (contentRefs.current[itemId] = el)}
          />
        );
      })}
    </div>
  );
}
