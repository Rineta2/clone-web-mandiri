import React from "react";
import { ChevronDown } from "lucide-react";
import AccordionContent from "@/components/hooks/section/pages/bantuan/AccordionContent";

export default function AccordionItem({
  item,
  isExpanded,
  onToggle,
  contentRef,
}) {
  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center relative cursor-pointer"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <h3 className="text-[20px]">{item.title}</h3>
        <ChevronDown
          className={`text-primary transition-transform duration-300 ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
        <div className="absolute bottom-[-10px] left-0 w-full h-[1px] bg-gray-400"></div>
      </div>

      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <AccordionContent item={item} />
      </div>
    </div>
  );
}
