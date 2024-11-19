import React, { Fragment } from "react";

import { box } from "@/components/ui/data/tentang-kami/box";

import Image from "next/image";

import Link from "next/link";

export default function TentangMandiriDetail({ params }) {
  const data = box.find((item) => item.slug === params.slug);

  if (!data) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <Fragment>
      {data.slugDetails && (
        <main>
          <section className="relative overflow-hidden min-h-[50vh]">
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
                          <p className="text-background text-[1.2rem] max-w-[30%]">
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

          <section className="relative overflow-hidden min-h-[200vh] mt-[-3%]">
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
                  <div key={item.id} className="flex flex-col">
                    <div className="w-[100%] h-full object-cover absolute top-[18%] left-0">
                      {item.img &&
                        item.img.map((item) => {
                          return (
                            <Image
                              key={item.id}
                              src={item.img}
                              alt={item.title}
                              quality={100}
                            />
                          );
                        })}

                      <div className="absolute top-[26%] left-0 w-[100%]">
                        {item.visi.map((item) => {
                          return (
                            <div
                              className="bg-primary flex flex-col justify-center pl-[30%] gap-6 h-[20vh]"
                              key={item.id}
                            >
                              <div className="flex flex-col item-center justify-center">
                                <h1 className="text-secondary text-[2rem]">
                                  {item.title}
                                </h1>
                                <p className="text-background text-[1.2rem]">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {item.linkvm && (
                        <Link
                          href={item.linkvm}
                          className="flex items-center gap-1 text-background text-[1.2rem] px-[30%]"
                        >
                          {item.name} {item.icons}
                        </Link>
                      )}
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
                            {managerItem.name} {managerItem.icons}
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
                            {organisasiItem.name} {organisasiItem.icons}
                          </Link>
                        </div>
                      ))}
                  </div>
                );
              })}

              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id} className="flex flex-col">
                    {item.saham &&
                      item.saham.map((sahamItem) => (
                        <div
                          key={sahamItem.id}
                          className="absolute top-0 left-0 w-[100%] h-[100%]"
                        >
                          <Image
                            src={sahamItem.img}
                            width={500}
                            height={500}
                            className="w-[100%] h-[300px] object-cover"
                            alt={sahamItem.title}
                          />
                          <div className="absolute top-[5%] left-[20%]">
                            <h1 className="text-[1.8rem] font-semibold text-primary">
                              {sahamItem.title}
                            </h1>
                          </div>
                        </div>
                      ))}
                  </div>
                );
              })}

              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="flex gap-10 w-[100%] h-[100%] absolute top-[10%] left-[10%] translate-[-50%,-50%] px-8 container mx-auto">
                      {item.sahamBox &&
                        item.sahamBox.map((sahamBoxItem) => (
                          <div
                            key={sahamBoxItem.id}
                            className="flex py-8 px-8 bg-background border border-1 h-[200px]"
                          >
                            <div className="flex justify-center flex-col gap-4">
                              <h1 className="text-[1.7rem] text-gray-600">
                                {sahamBoxItem.title}
                              </h1>
                              <p className="text-[1.1rem]">
                                {sahamBoxItem.desc}
                              </p>
                              <Link
                                href={sahamBoxItem.link}
                                className="text-primary text-[18px]"
                              >
                                {sahamBoxItem.name}
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })}

              {data.slugDetails.map(
                (item) =>
                  item.inform &&
                  item.informBox.length > 0 && (
                    <div key={item.id}>
                      {item.inform.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="absolute top-[25%] left-0"
                          >
                            <Image
                              src={item.img}
                              alt={item.title}
                              width={500}
                              height={500}
                              className="w-screen h-[600px] z-[-1]"
                              quality={100}
                            />

                            <h1 className="absolute top-[25%] left-[15%] text-background text-[2rem]">
                              {item.title}
                            </h1>
                          </div>
                        );
                      })}

                      <div className="absolute top-[40%] left-[10%] translate-[-50%,-50%] flex gap-10">
                        {item.informBox.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="bg-background w-[100%] h-[550px] relative rounded-md transition-all duration-300 overflow-hidden"
                            >
                              <div className="py-10 px-10 flex flex-col gap-4 mb-10">
                                <Link
                                  href={item.path}
                                  className="flex items-center gap-2 text-[1.4rem] text-primary"
                                >
                                  {item.title}
                                  {item.icons}
                                </Link>

                                <p className="text-[1.2rem] text-gray-400">
                                  {item.desc}
                                </p>
                              </div>

                              <div className="w-[100%] h-[400px] absolute bottom-0">
                                <Image
                                  src={item.img}
                                  width={500}
                                  height={500}
                                  className="w-[100%] h-[100%] object-cover"
                                  alt={item.title}
                                  quality={100}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
              )}

              {data.slugDetails.map(
                (item) =>
                  item.pages.length > 0 && (
                    <div key={item.id}>
                      <div className="absolute container top-[70%] left-[10%] translate-[-50%,-50%] flex flex-col">
                        {item.pages.map((item) => {
                          return (
                            <div
                              key={item.id}
                              className="bg-background w-[100%] h-[100%] relative rounded-md transition-all duration-300 overflow-hidden"
                            >
                              <div className="flex gap-4 mb-10">
                                <Image
                                  src={item.img}
                                  width={500}
                                  height={500}
                                  className="w-[600px] h-[300px] object-cover"
                                  alt={item.title}
                                  quality={100}
                                />

                                <div className="flex flex-col gap-4 justify-center">
                                  <h1 className="text-[2rem]">{item.title}</h1>

                                  <p className="text-[1.2rem] text-gray-400">
                                    {item.desc}
                                  </p>

                                  <Link
                                    href={item.path}
                                    className="flex items-center text-[1.3rem] text-primary"
                                  >
                                    {item.name} {item.icons}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )
              )}

              {data.slugDetails.map(
                (item) =>
                  item.box.length > 0 && (
                    <div
                      key={item.id}
                      className="grid grid-cols-2 max-w-[1000px] mx-auto gap-4"
                      style={{
                        rowGap: "2rem",
                      }}
                    >
                      {item.box.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="flex flex-col gap-4 border border-1 p-4"
                          >
                            <Link
                              href={item.path}
                              className="flex items-center text-[1.8rem] text-primary z-10"
                            >
                              {item.title} {item.icons}
                            </Link>

                            <p className="text-[1.2rem] text-gray-400">
                              {item.desc}
                            </p>

                            <Image
                              src={item.img}
                              alt={item.title}
                              quality={100}
                              width={500}
                              height={500}
                            />
                          </div>
                        );
                      })}
                    </div>
                  )
              )}
            </div>
          </section>
        </main>
      )}
    </Fragment>
  );
}
