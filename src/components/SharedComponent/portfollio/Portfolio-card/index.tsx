"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { portfolioinfo } from "@/app/api/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioCard = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2300,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#f7f9fc] py-16 dark:bg-darkmode"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-sm dark:border-white/10 dark:bg-white/10">
            Our Portfolio
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-midnight_text dark:text-white sm:text-4xl lg:text-5xl">
            Projects We Have Built
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-secondary dark:text-white/60">
            A selection of modern websites and digital experiences designed with
            performance, clean UI, and business growth in mind.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous portfolio slide"
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white lg:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next portfolio slide"
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-900 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-white lg:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="portfolio-slider -mx-3">
            <Slider ref={sliderRef} {...settings}>
              {portfolioinfo.map((item, index) => (
                <div key={index} className="px-3 pb-6">
                  <Link
                    href={{ pathname: item.link }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <article className="relative h-[430px] overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(15,23,42,0.22)]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                          Project
                        </span>

                        <h4 className="line-clamp-2 text-2xl font-black leading-tight text-white">
                          {item.title}
                        </h4>

                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">
                          {item.info}
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-sm font-bold text-white">
                          <span>View case study</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-6 flex justify-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous portfolio slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-md transition-all duration-300 hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next portfolio slide"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md transition-all duration-300 hover:bg-blue-700"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCard;
