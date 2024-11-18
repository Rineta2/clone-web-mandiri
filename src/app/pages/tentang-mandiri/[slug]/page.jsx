import React, { Fragment } from "react";

import Link from "next/link";

import Image from "next/image";

import { box } from "@/components/ui/data/tentang-kami/index";

export default async function TentangDetails({ params }) {
  const { slug } = await params;

  const data = box.find((item) => item.slug === slug);

  if (!data) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <Fragment>
      {data.slugDetails &&
        Array.isArray(data.slugDetails) &&
        data.slugDetails.length > 0 && (
          <section className="relative overflow-hidden min-h-[50vh]">
            <div className="container mx-auto">
              {data.slugDetails.map((item) => (
                <div
                  key={item.id}
                  className="absolute top-0 left-0 w-screen h-full"
                >
                  <div className="text-background z-10 absolute top-6 left-[20%] flex items-center gap-2">
                    <Link
                      href="/"
                      className="hover:underline transition-all duration-300 font-semibold text-[1.2rem]"
                    >
                      Home
                    </Link>

                    <div>/</div>

                    <Link
                      href="/pages/tentang-mandiri"
                      className="hover:underline transition-all duration-300 font-semibold text-[1.2rem]"
                    >
                      Tentang Mandiri
                    </Link>

                    <div>/</div>

                    <Link
                      href={`/pages/tentang-mandiri/${data.slug}`}
                      className="hover:underline transition-all duration-300 text-[1.2rem]"
                    >
                      {data.name}
                    </Link>
                  </div>

                  <div className="absolute flex flex-col gap-4 top-[35%] left-[20%] translate-[-50%,-50%] w-screen h-full z-10">
                    <h1 className="text-background text-[3rem] font-semibold">
                      {item.titleH}
                    </h1>
                    <p className="text-background text-[1.2rem] max-w-[20%]">
                      {item.descH}
                    </p>
                  </div>

                  {item.bgHome && (
                    <Image
                      src={item.bgHome}
                      alt={item.titleH}
                      quality={100}
                      className="w-[100%] h-full object-cover z-[-1] brightness-[0.7] select-none"
                      fill
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      {data.slugDetails &&
        Array.isArray(data.slugDetails) &&
        data.slugDetails.length > 0 && (
          <section>
            <div className="max-w-[1200px] mx-auto">
              {data.slugDetails.map((item) => (
                <div key={item.id} className="flex flex-col gap-6">
                  {item.titleA && (
                    <h1 className="text-[2rem] font-semibold text-primary">
                      {item.titleA}
                    </h1>
                  )}

                  {item.descA && (
                    <p className="text-[1.2rem] text-gray-600 max-w-[80%]">
                      {item.descA}
                    </p>
                  )}

                  {item.link && (
                    <Link
                      href={item.link}
                      className="flex items-center text-[1.2rem] w-[10%]"
                    >
                      {item.name}
                      {item.icons}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      {data.slugDetails &&
        Array.isArray(data.slugDetails) &&
        data.slugDetails.length > 0 &&
        data.slugDetails.some((item) => item.bgvm && item.vm.length > 0) && (
          <section className="relative overflow-hidden min-h-[100vh] bg-primary">
            <div className="max-w-[1200px] mx-auto">
              {data.slugDetails.map(
                (item) =>
                  item.bgvm &&
                  Array.isArray(item.vm) &&
                  item.vm.length > 0 && (
                    <div key={item.id} className="flex flex-col gap-10">
                      {item.bgvm && (
                        <div className="absolute top-0 left-0 w-[100%] h-[50vh]">
                          <Image
                            src={item.bgvm}
                            width={500}
                            height={500}
                            quality={100}
                            alt={item.titleA || "Background Visi Misi"}
                            className="w-[100%] h-[100%] object-cover"
                          />
                        </div>
                      )}

                      <div className="absolute top-[60%] left-[20%] translate-[-50%,-50%] flex flex-col gap-10 text-background z-10">
                        {item.vm.map((vmItem) => (
                          <div
                            key={vmItem.id}
                            className="flex text-background flex-col gap-4"
                          >
                            <h1 className="text-[2rem] font-semibold text-secondary">
                              {vmItem.title}
                            </h1>

                            <p className="text-[1.4rem] font-semibold">
                              {vmItem.desc}
                            </p>
                          </div>
                        ))}

                        {item.linkvm && (
                          <Link
                            href={item.linkvm}
                            className="flex items-center text-[1.2rem] w-[10%]"
                          >
                            {item.name}
                            {item.icons}
                          </Link>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </section>
        )}

      {data.slugDetails &&
        Array.isArray(data.slugDetails) &&
        data.slugDetails.length > 0 && (
          <section className="relative min-h-[50vh]">
            <div className="max-w-[1200px] mx-auto">
              {data.slugDetails.map((item) => (
                <div key={item.id} className="flex flex-col gap-6">
                  {item.bgAuthor && (
                    <div className="absolute top-0 left-0 w-[100%] h-[50vh] -z-10">
                      <Image
                        src={item.bgAuthor}
                        alt={item.author || "Author Background"}
                        className="w-[100%] h-[100%] object-cover"
                        fill
                      />
                    </div>
                  )}

                  <div className="absolute top-[20%] left-[20%] translate-[-50%,-50%] flex flex-col gap-10 z-10">
                    {item.quetes && (
                      <p className="text-[1.3rem] font-semibold text-text max-w-[30%]">
                        {item.quetes}
                      </p>
                    )}

                    {item.author && (
                      <span className="pl-[10px] text-[1.2rem] text-gray-600 relative after:content-[''] after:absolute after:top-0 after:left-[0] after:w-[2px] after:h-[100%] after:bg-secondary">
                        {item.author}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      {data.slugDetails &&
        Array.isArray(data.slugDetails) &&
        data.slugDetails.length > 0 && (
          <section className="relative min-h-[30vh]">
            <div className="max-w-[1200px] mx-auto">
              {data.slugDetails.map((item) => (
                <div key={item.id} className="flex gap-6">
                  {item.manager &&
                    Array.isArray(item.manager) &&
                    item.manager.length > 0 &&
                    item.manager.map(
                      (managerItem) =>
                        managerItem.path && (
                          <div
                            key={managerItem.id}
                            className="flex flex-col items-center justify-center gap-6 bg-[#1a528a] absolute top-0 left-0 w-[50%] h-[100%] text-background"
                          >
                            {managerItem.title && (
                              <h1 className="text-[2rem] font-semibold">
                                {managerItem.title}
                              </h1>
                            )}
                            {managerItem.desc && (
                              <p className="text-[1.2rem]">
                                {managerItem.desc}
                              </p>
                            )}

                            {managerItem.path && (
                              <Link
                                href={managerItem.path}
                                className="text-[1.2rem] hover:underline border-[1px] border-background p-2"
                              >
                                {managerItem.name}
                              </Link>
                            )}
                          </div>
                        )
                    )}

                  {item.organisasi &&
                    Array.isArray(item.organisasi) &&
                    item.organisasi.length > 0 &&
                    item.organisasi.map(
                      (orgItem) =>
                        orgItem.path && (
                          <div
                            key={orgItem.id}
                            className="flex flex-col items-center justify-center gap-6 bg-[#459bd9] absolute top-0 right-0 w-[50%] h-[100%] text-background"
                          >
                            {orgItem.title && (
                              <h1 className="text-[2rem] font-semibold">
                                {orgItem.title}
                              </h1>
                            )}
                            {orgItem.desc && (
                              <p className="text-[1.2rem]">{orgItem.desc}</p>
                            )}

                            {orgItem.path && (
                              <Link
                                href={orgItem.path}
                                className="text-[1.2rem] hover:underline border-[1px] border-background p-2"
                              >
                                {orgItem.name}
                              </Link>
                            )}
                          </div>
                        )
                    )}
                </div>
              ))}
            </div>
          </section>
        )}
    </Fragment>
  );
}
