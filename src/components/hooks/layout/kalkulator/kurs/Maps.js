import React from 'react'

import { maps } from "@/components/ui/data/kalkulator/kurs/data"

import Image from "next/image"

export default function Maps() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      {
        maps.map((item, index) => (
          <div key={index}>
            <span className="text-sm font-bold mb-6 text-primary">{item.title}</span>
            <Image src={item.img} alt={item.title} />
          </div>
        ))
      }
    </div>
  )
}
