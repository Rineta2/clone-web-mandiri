import React from 'react'

import { dataTel } from "@/components/ui/data/kalkulator/kurs/data"

import Link from 'next/link'

export default function BoxCall() {
  return (
    <div className='grid grid-cols-2 gap-6 mt-[3%]'>
      {
        dataTel.map((item) => {
          return (
            <div className="flex flex-col gap-2 relative w-[100%] h-[150px] justify-center bg-background border border-gray-300 rounded-lg py-4 px-6" key={item.id}>
              <h1 className='text-xl font-bold text-primary'>{item.title}</h1>
              <p className='text-sm text-gray-500 max-w-[80%]'>{item.desc}</p>
              <span className='text-sm text-gray-500 max-w-[80%]'>{item.tel}</span>

              <div className="absolute bottom-4 right-4 w-[40px] h-[40px] border border-primary bg-white rounded-lg flex items-center justify-center hover:bg-primary group duration-300 cursor-pointer">
                <Link href={item.path} className='text-primary group-hover:text-white'>
                  {item.icons}
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
