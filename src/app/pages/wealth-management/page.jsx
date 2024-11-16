"use client";

import React, { Fragment, useState } from "react";

import {
  box,
  layananBox,
  productWealth,
  Raksada,
  penawaran,
  menarik,
  yt,
} from "@/components/ui/data/wealth-management/data";

import Image from "next/image";

import Link from "next/link";

import button from "@/components/assest/prioritas/ag-icon-youtube.png";

export default function WealthManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openModal = (url) => {
    setCurrentVideo(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo("");
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <section className="relative min-h-[40vh] bg-gradient-to-b from-[#a89971] to-[#a89971] flex items-center justify-center">
        <div className="container mx-auto text-start">
          <h1 className="text-7xl font-bold text-white">Wealth Management</h1>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,224 C120,260 240,260 360,234 C480,208 600,160 720,176 C840,192 960,272 1080,288 C1200,304 1320,272 1440,240 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <h1 className="text-4xl text-[#91690c] font-bold text-center mb-12">
            Berita Terkini
          </h1>

          <div className="flex gap-4 items-center justify-center">
            {box.map((item) => {
              return (
                <div
                  className="relative flex flex-col gap-2 w-[400px] h-[400px]"
                  key={item.id}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="-z-10 brightness-[0.7]"
                  />

                  <h1 className="text-[24px] font-bold text-background absolute bottom-6 left-6">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>

          <Link
            className="block text-center text-[18px] text-[#a89971] mt-12 p-4 border-2 border-[#a89971] rounded-md w-[250px] mx-auto"
            href="/pages/wealth-management/prioritas"
          >
            Lihat Berita Lainnya
          </Link>

          <h1 className="text-4xl text-[#91690c] font-bold text-center mt-24">
            Layanan Kami
          </h1>

          <div className="flex gap-4 items-center justify-center mt-14">
            {layananBox.map((item) => {
              return (
                <div
                  className="bg-[#f7eed7] flex flex-col gap-2 w-[600px] h-[400px] py-8 group hover:bg-[#e9d4a9] transition-colors duration-300 cursor-pointer"
                  key={item.name}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={500}
                    height={500}
                    quality={100}
                    style={{
                      objectPosition: "center",
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                  <h1 className="flex items-center justify-center text-[24px] text-center font-bold text-[#91690c] hover:text-[#a89971] transition-colors duration-300">
                    {item.name}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                      {item.icons}
                    </span>
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container mx-auto">
          <h1 className="text-4xl text-[#91690c] font-bold text-center mb-16">
            Produk Wealth Management
          </h1>

          <div className="flex gap-4 items-center justify-center max-w-[1200px] mx-auto w-[100%]">
            {Raksada.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={`/pages/wealth-management/${item.slug}`}
                  className="relative flex flex-col gap-2 w-[70vh] hover:brightness-[0.7] transition-brightness duration-300 h-[78vh] group"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    quality={100}
                    width={500}
                    height={500}
                    className="w-[70vh] h-[78vh] object-cover brightness-[0.8] -z-10"
                  />

                  <h1 className="flex items-center justify-center text-[24px] font-bold text-background absolute bottom-6 left-6">
                    {item.name}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                      {item.icons}
                    </span>
                  </h1>
                </Link>
              );
            })}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {productWealth.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={`/pages/wealth-management/${item.slug}`}
                    className="relative flex flex-col gap-2 hover:brightness-[0.7] transition-brightness duration-300 group"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      quality={100}
                      width={500}
                      height={500}
                      className="w-[380px] h-[380px] object-cover brightness-[0.7]"
                    />

                    <h1 className="flex items-center text-[14px] font-bold text-background absolute bottom-6 left-6">
                      {item.name}
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                        {item.icons}
                      </span>
                    </h1>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container mx-auto">
          <h1 className="text-4xl text-[#91690c] font-bold text-center mb-16">
            Penawaran Menarik
          </h1>

          <div className="flex gap-4 max-w-[1200px] mx-auto items-center justify-center">
            {penawaran.map((item) => {
              return (
                <div className="box relative" key={item.name}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-[100%] h-[100%] object-cover brightness-[.8]"
                  />

                  <h1 className="flex items-center absolute bottom-6 left-6 text-[20px] font-bold text-background">
                    {item.name}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                      {item.icons}
                    </span>
                  </h1>
                </div>
              );
            })}

            {menarik.map((item) => {
              return (
                <div className="box relative" key={item.name}>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="w-[100%] h-[100%] object-cover brightness-[.8]"
                  />

                  <h1 className="flex items-center absolute bottom-7 left-6 text-[20px] font-bold text-[#91690c]">
                    {item.name}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                      {item.icons}
                    </span>
                  </h1>
                </div>
              );
            })}
          </div>

          <h1 className="text-4xl text-[#91690c] font-bold text-center mb-16 mt-24">
            Liputan Acara Wealth Management
          </h1>

          <div className="flex gap-4 max-w-[1200px] mx-auto items-center justify-center">
            {yt.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 w-[100%] h-[300px] cursor-pointer"
                  onClick={() => openModal(item.url)}
                >
                  <div className="relative w-[100%] h-[300px]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      quality={100}
                      width={500}
                      height={500}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        filter: "brightness(0.7)",
                      }}
                    />

                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80px] h-[80px] flex items-center justify-center">
                      <Image
                        src={button}
                        alt="button"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>

                  <h1 className="text-[18px] font-bold text-[#91690c]">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)]  flex items-center justify-center z-50">
          <div className="p-10 bg-white rounded-lg overflow-hidden relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-3 text-gray-700 text-4xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="500px"
              src={currentVideo.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </Fragment>
  );
}
