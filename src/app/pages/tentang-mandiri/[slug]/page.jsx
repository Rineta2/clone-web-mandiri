import React, { Fragment } from "react";

import { box } from "@/components/ui/data/tentang-kami/box";

import Image from "next/image";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

export default function TentangMandiriDetail({ params }) {
  const data = box.find((item) => item.slug === params.slug);

  if (!data) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <Fragment>
      {data.slugDetails && (
        <main>
          <section className="relative overflow-hidden min-h-[50vh] bg-primary">
            <div className="container mx-auto">
              {data.slugDetails.map((item) => (
                <div
                  key={item.id}
                  className="absolute top-0 left-0 w-screen h-full"
                >
                  {item.home &&
                    item.home.map((homeItem) => (
                      <div key={homeItem.id}>
                        <div className="text-background z-10 absolute top-6 left-[20%] flex items-center gap-2">
                          <Link href={"/"}>Home</Link>
                          <div>/</div>
                          <Link href={"/pages/tentang-mandiri"}>
                            Tentang Mandiri
                          </Link>
                          <div>/</div>
                          <Link href={homeItem.link}>{homeItem.title}</Link>
                        </div>

                        <div className="absolute flex flex-col gap-4 top-[35%] left-[20%] translate-[-50%,-50%] w-screen h-full z-10">
                          <h1 className="text-background text-[3rem] font-semibold">
                            {homeItem.title}
                          </h1>
                          <p className="text-background text-[1.2rem] max-w-[20%]">
                            {homeItem.desc}
                          </p>
                        </div>

                        <Image
                          src={homeItem.bgHome}
                          alt={homeItem.title}
                          className="w-[100%] h-full object-cover z-[-1] brightness-[0.7] select-none"
                        />
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden min-h-[200vh]">
            <div className="container mx-auto">
              {data.slugDetails.map((item) => {
                return (
                  <div className="px-20" key={item.id}>
                    {item.about &&
                      item.about.map((aboutItem) => (
                        <div key={aboutItem.id} className="flex flex-col gap-6">
                          <h1 className="text-[2rem] font-semibold text-primary">
                            {aboutItem.title}
                          </h1>
                          <p className="text-[1.2rem] text-gray-400">
                            {aboutItem.desc}
                          </p>
                          <Link
                            href={aboutItem.link}
                            className="flex items-center gap-1 text-primaryLg text-[1.2rem]"
                          >
                            {aboutItem.name} {aboutItem.icons}
                          </Link>
                        </div>
                      ))}
                  </div>
                );
              })}

              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id} className="flex">
                    <div className="w-[100%] h-full object-cover absolute top-[18%] left-0">
                      <Image src={item.img} alt={"picture"} />

                      <div className="z-10 absolute w-[100%] h-[20%] bg-[#1a528a] top-[26%] left-[0] flex flex-col justify-center gap-10">
                        {item.visi &&
                          item.visi.map((visiItem) => (
                            <div
                              key={visiItem.id}
                              className="flex flex-col gap-6 px-[30%]"
                            >
                              <h1 className="text-[2rem] font-semibold text-secondary">
                                {visiItem.title}
                              </h1>

                              <p className="text-[1.2rem] text-background">
                                {visiItem.desc}
                              </p>
                            </div>
                          ))}

                        <Link
                          href={item.linkvm}
                          className="flex items-center gap-1 text-background text-[1.2rem] px-[30%]"
                        >
                          Selengkapnya <ChevronRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id} className="flex">
                    {item.quete &&
                      item.quete.map((queteItem) => (
                        <div
                          key={queteItem.id}
                          className="w-[100%] h-full absolute top-[65%] left-0"
                        >
                          <Image src={queteItem.bgAuthor} alt={"picture"} />
                        </div>
                      ))}

                    {item.quete &&
                      item.quete.map((queteItem) => (
                        <div
                          key={queteItem.id}
                          className="z-10 absolute top-[73%] left-[4%] flex flex-col gap-6"
                        >
                          <p className="text-[1.2rem] text-text max-w-[30%]">
                            &quot; {queteItem.quetes} &quot;
                          </p>

                          <h1 className="text-[1.3rem] font-semibold text-text pl-2">
                            {queteItem.author}
                            <div className="w-[2px] h-[20px] bg-text absolute bottom-[2%] left-0 bg-secondary"></div>
                          </h1>
                        </div>
                      ))}
                  </div>
                );
              })}

              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id} className="flex">
                    {item.manager &&
                      item.manager.map((managerItem) => (
                        <div
                          key={managerItem.id}
                          className="z-10 absolute top-[87%] h-[10%] left-[0] flex flex-col items-center justify-center gap-6 w-[50%] bg-[#1a528a] text-background"
                        >
                          <h1 className="text-[2rem] font-semibold">
                            {managerItem.title}
                          </h1>
                          <p className="text-[1.2rem]">{managerItem.desc}</p>
                          <Link
                            href={managerItem.path}
                            className="flex items-center gap-1 text-[1.2rem] border-2 border-background px-4 py-2 rounded-md"
                          >
                            Selengkapnya
                          </Link>
                        </div>
                      ))}

                    {item.organisasi &&
                      item.organisasi.map((organisasiItem) => (
                        <div
                          key={organisasiItem.id}
                          className="z-10 absolute text-background top-[87%] h-[10%] right-[0] flex flex-col items-center justify-center gap-6 w-[50%] bg-[#459bd9]"
                        >
                          <h1 className="text-[2rem] font-semibold">
                            {organisasiItem.title}
                          </h1>
                          <p className="text-[1.1rem]">{organisasiItem.desc}</p>
                          <Link
                            href={organisasiItem.path}
                            className="flex items-center gap-1 text-[1.2rem] border-2 border-background px-4 py-2 rounded-md"
                          >
                            Selengkapnya
                          </Link>
                        </div>
                      ))}
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      )}
    </Fragment>
  );
}
