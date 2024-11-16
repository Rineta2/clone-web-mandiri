import React, { Fragment } from "react";

import { box } from "@/components/ui/data/perseorangan/data";

import Image from "next/image";

import Link from "next/link";

export default function PerseorangDetail({ params }) {
  const data = box.find((item) => item.slug === params.slug);

  if (!data) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <Fragment>
      <section className="relative overflow-hidden min-h-[50vh]">
        <div className="container mx-auto">
          {data.slugDetails.map((item) => {
            return (
              <div
                key={item.id}
                className="absolute top-0 left-0 w-screen h-full"
              >
                <div className="text-background z-10 absolute top-6 left-[20%] flex items-center gap-2">
                  <Link
                    href={"/"}
                    className="hover:underline transition-all duration-300 font-semibold text-[1.2rem]"
                  >
                    Home
                  </Link>

                  <div>/</div>

                  <Link
                    href={"/pages/perseorangan"}
                    className="hover:underline transition-all duration-300 font-semibold text-[1.2rem]"
                  >
                    Perseorangan
                  </Link>

                  <div>/</div>

                  <Link
                    href={`/pages/perseorangan/${data.slug}`}
                    className="hover:underline transition-all duration-300 text-[1.2rem]"
                  >
                    {data.name}
                  </Link>
                </div>

                <div className="absolute flex flex-col gap-4 top-[35%] left-[20%] translate-[-50%,-50%] w-screen h-full z-10">
                  <h1 className="text-background text-[3rem] font-semibold">
                    {item.name}
                  </h1>
                  <p className="text-background text-[1.2rem] max-w-[20%]">
                    {item.desc}
                  </p>
                </div>

                <Image
                  src={item.bg}
                  alt={item.name}
                  quality={100}
                  className="w-[100%] h-full object-cover z-[-1] brightness-[0.7] select-none"
                />
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          {data.slugDetails &&
            data.slugDetails.map((item) => (
              <div key={item.id} className="grid grid-cols-3 gap-10">
                {item.box.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="relative w-full border border-gray-200 h-[400px] rounded-lg overflow-hidden"
                      style={{
                        background: `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))`,
                      }}
                    >
                      <div className="flex flex-col gap-2 px-6 py-4">
                        <Link
                          href={item.details}
                          className="text-[1.4rem] text-primary font-semibold flex items-center gap-2"
                        >
                          {item.title}
                          {item.icons}
                        </Link>
                        <p className="text-[1.2rem] text-gray-400 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>

                      <div className="w-full h-[300px]">
                        <Image
                          src={item.img}
                          alt={item.title}
                          className="w-full h-[300px] object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

          {data.slugDetails && (
            <div className="flex flex-col gap-10">
              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id}>
                    <h1 className="text-[2rem] font-semibold text-primary mt-20 mb-24">
                      {item.tBoxTitle}
                    </h1>

                    <div className="grid grid-cols-3 gap-10">
                      {item.tBox.map((item) => {
                        return (
                          <div key={item.id} className="flex flex-col gap-6">
                            <Image
                              src={item.img}
                              width={100}
                              height={100}
                              alt={item.name}
                            />

                            <Link
                              href={""}
                              className="text-[1.3rem] max-w-[80%]"
                            >
                              {item.name}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {data.slugDetails && (
            <div className="flex flex-col gap-10">
              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id}>
                    <h1 className="text-[2rem] font-semibold text-primary mt-20 mb-24">
                      {item.tTabsTitle}
                    </h1>

                    <div className="flex gap-10">
                      {item.tTabs.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="relative flex flex-col items-center justify-center p-6 text-center gap-6 w-[100%] border border-gray-200 rounded-lg"
                          >
                            <Image
                              src={item.img}
                              width={100}
                              height={100}
                              alt={item.name}
                            />

                            <div className="relative flex flex-col gap-2">
                              <h1 className="text-[1.3rem] text-primary">
                                {item.title}
                              </h1>

                              <p className="text-[1.2rem] text-gray-400">
                                {item.desc}
                              </p>

                              <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-gray-200"></div>
                            </div>

                            <div className="flex flex-col gap-4">
                              <h3 className="text-[1.2rem] text-gray-400">
                                {item.setor}
                              </h3>

                              <p className="text-[1.2rem] text-gray-700">
                                {item.nominal}
                              </p>
                            </div>

                            <div className="flex flex-col gap-4">
                              <h3 className="text-[1.2rem] text-gray-400">
                                {item.syarat}
                              </h3>

                              <p className="text-[1.2rem] text-gray-700 line-clamp-2">
                                {item.listS}
                              </p>
                            </div>

                            <div className="flex flex-col gap-4">
                              <h3 className="text-[1.2rem] text-gray-400">
                                {item.fasilitas}
                              </h3>

                              <p className="text-[1.2rem] text-gray-700 line-clamp-2">
                                {item.listF}
                              </p>
                            </div>

                            <Link
                              href={""}
                              className="flex items-center gap-1 text-primaryLg text-[1.2rem]"
                            >
                              {item.name} {item.icons}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {data.slugDetails && (
            <div className="flex flex-col gap-10">
              {data.slugDetails.map((item) => {
                return (
                  <div key={item.id} className="max-w-[80%] mx-auto">
                    <h1 className="text-[2rem] font-semibold text-primary mt-20 mb-4">
                      {item.jangka}
                    </h1>

                    <p className="text-[1.3rem] text-gray-400 mb-24">
                      {item.descJ}
                    </p>

                    <div className="flex gap-10">
                      {item.jBox.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="relative flex flex-col items-center justify-center p-6 text-center gap-6 w-[100%] border border-gray-200 rounded-lg"
                          >
                            <Image
                              src={item.img}
                              width={100}
                              height={100}
                              alt={item.name}
                            />

                            <div className="relative flex flex-col gap-2">
                              <h1 className="text-[1.3rem] text-primary">
                                {item.title}
                              </h1>

                              <p className="text-[1.2rem] text-gray-400">
                                {item.desc}
                              </p>

                              <div className="absolute -bottom-3 left-0 w-full h-[1px] bg-gray-200"></div>
                            </div>

                            <div className="flex flex-col gap-4">
                              <h3 className="text-[1.2rem] text-gray-400">
                                {item.setor}
                              </h3>

                              <p className="text-[1.2rem] text-gray-700">
                                {item.nominal}
                              </p>
                            </div>

                            <div className="flex flex-col gap-4">
                              <h3 className="text-[1.2rem] text-gray-400">
                                {item.syarat}
                              </h3>

                              <p className="text-[1.2rem] text-gray-700 line-clamp-2">
                                {item.listS}
                              </p>
                            </div>

                            <div className="flex flex-col gap-4">
                              <h3 className="text-[1.2rem] text-gray-400">
                                {item.fasilitas}
                              </h3>

                              <p className="text-[1.2rem] text-gray-700 line-clamp-2">
                                {item.listF}
                              </p>
                            </div>

                            <Link
                              href={""}
                              className="flex items-center gap-1 text-primaryLg text-[1.2rem]"
                            >
                              {item.name} {item.icons}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
}
