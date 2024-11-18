import React, { Fragment } from "react";

import { content } from "@/components/ui/data/wealth-management/Content";

import Link from "next/link";

import Image from "next/image";

export default function WealthManagementDetails({ params }) {
  const data = content.find((item) => item.slug === params.slug);

  if (!data) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <Fragment>
      {data.slugDetails && (
        <section className="relative overflow-hidden min-h-[50vh]">
          <div className="container mx-auto">
            {data.slugDetails.map((item) => (
              <div
                key={item.id}
                className="absolute top-0 left-0 w-screen h-full"
                style={{
                  background:
                    "linear-gradient(122deg, rgba(241,231,212,1) 0%, rgba(241,227,194,1) 99%)",
                }}
              >
                <div className="text-text z-10 absolute top-6 left-[20%] flex items-center gap-2">
                  <Link
                    href={"/"}
                    className="hover:underline transition-all duration-300 font-semibold text-[1.2rem]"
                  >
                    Priority
                  </Link>

                  <div>/</div>

                  <Link
                    href={"/pages/perseorangan"}
                    className="hover:underline transition-all duration-300 font-semibold text-[1.2rem]"
                  >
                    Wealth Management
                  </Link>

                  <div>/</div>

                  <Link
                    href={`/pages/perseorangan/${data.slug}`}
                    className="hover:underline transition-all duration-300 text-[1.2rem]"
                  >
                    {data.name}
                  </Link>
                </div>

                <div className="absolute flex flex-col gap-4 top-[45%] left-[20%] translate-[-50%,-50%] w-screen h-full z-10">
                  <h1 className="text-[#91690c] text-[3rem] font-semibold">
                    {item.name}
                  </h1>
                </div>

                <Image
                  src={item.bg}
                  alt={item.name}
                  quality={100}
                  className="w-[100%] h-full object-cover z-[-1] select-none"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="max-w-[60%] mx-auto">
          <div className="flex gap-4  items-center">
            {data.slugDetails.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center justify-center overflow-hidden"
              >
                {item.card.map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col items-center justify-center gap-6 p-6 bg-background border border-gray-200 box-shadow-lg rounded-lg hover:translate-y-[-10px] transition-all duration-700"
                  >
                    <Image
                      src={card.img}
                      quality={100}
                      alt={card.name}
                      className="w-[100%] h-[100%] object-cover"
                    />

                    <h1 className="text-[2rem] font-semibold text-[#91690c]">
                      {card.name}
                    </h1>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {data.slugDetails.map(
            (item) =>
              item.tBoxTitle &&
              item.tBox.length > 0 && (
                <div key={item.id} className="flex flex-col gap-10">
                  <div className="mx-auto">
                    <h1 className="text-[2rem] max-w-[30%] mx-auto text-center font-semibold text-[#91690c] mt-[8%] mb-[5%]">
                      {item.tBoxTitle}
                    </h1>

                    <div className="flex gap-10">
                      {item.tBox.map((jBoxItem) => (
                        <div
                          key={jBoxItem.id}
                          className="relative flex flex-col items-center justify-center p-6 text-center gap-10 w-[100%] border border-gray-200 rounded-lg"
                        >
                          <Image
                            src={jBoxItem.img}
                            width={100}
                            height={100}
                            alt={jBoxItem.name}
                          />

                          <h1 className="text-[1.3rem] text-[#91690c]">
                            {jBoxItem.name}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}

          {data.slugDetails.map(
            (item) =>
              item.titleTabs &&
              item.tTabs.length > 0 && (
                <div key={item.id} className="flex flex-col gap-10">
                  <div className="mx-auto">
                    <h1 className="text-[2rem] max-w-[30%] mx-auto text-center font-semibold text-[#91690c] mt-[8%] mb-[5%]">
                      {item.titleTabs}
                    </h1>

                    <div className="flex gap-10">
                      {item.tTabs.map((jBoxItem) => (
                        <div
                          key={jBoxItem.id}
                          className="relative flex flex-col items-center justify-center p-6 text-center gap-10 w-[350px] h-[350px] border border-gray-200 rounded-lg"
                        >
                          <Image
                            src={jBoxItem.img}
                            width={500}
                            height={500}
                            quality={100}
                            className="absolute top-0 left-0 w-[100%] h-[100%] object-cover filter brightness-[0.7] -z-10"
                            alt={jBoxItem.name}
                          />

                          <div className="flex items-center absolute bottom-[0] p-4 left-[0] text-background justify-between w-[100%]">
                            <Link
                              href={`/pages/perseorangan/${data.slug}`}
                              className="text-[1.3rem] max-w-[60%] text-start"
                            >
                              {jBoxItem.title}
                            </Link>
                            <span>{jBoxItem.icons}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}

          {data.slugDetails.map(
            (item) =>
              item.banner && (
                <div key={item.id} className="flex flex-col gap-10 mt-[10%]">
                  <div className="mx-auto">
                    <Image
                      src={item.banner}
                      alt="banner"
                      width={500}
                      height={500}
                      className="w-screen h-auto object-cover"
                      quality={100}
                    />
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </Fragment>
  );
}
