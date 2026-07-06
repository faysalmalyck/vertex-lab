'use client'

import React from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

interface ProgressItem {
  title: string
  Progress: number
}

interface ProgressWorkProps {
  isColorMode: boolean
}

const ProgressWork = ({ isColorMode }: ProgressWorkProps) => {
  const progressValues = ProgressData as ProgressItem[]

  return (
    <section
      id="about"
      className={`scroll-mt-25 ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Image
              src={getImgPath('/images/work-progress/progress-work.png')}
              alt="Work Progress"
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className="hidden md:block"
            />
          </div>

          <div
            className="md:col-span-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-success"></span>

              <span className="text-sm font-medium text-midnight_text dark:text-white/50">
                Build Everything
              </span>
            </div>

            <h2 className="pb-6 pt-7 text-4xl font-bold leading-tight text-midnight_text dark:text-white">
              We Build Real Software That Solves Business Problems
            </h2>

            <p className="text-base leading-6 text-gray dark:text-white/70">
              From SaaS platforms to custom dashboards, we help startups and
              businesses turn ideas into scalable, production ready systems.
            </p>

            <div className="space-y-3 pt-8">
              {progressValues.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden rounded-xl border border-slate-200/70 bg-white/80 px-5 py-3.5 shadow-md backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:shadow-[0_15px_35px_rgba(15,23,42,0.10)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-primary/30">

                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:from-white/5"></div>

                    <div className="relative z-10">

                      <div className="mb-2">
                        <h4 className="text-[15px] font-semibold tracking-tight text-midnight_text dark:text-white">
                          {item.title}
                        </h4>
                      </div>

                      <div
                        role="progressbar"
                        aria-label={item.title}
                        aria-valuenow={item.Progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="relative mt-1 h-4 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10"
                      >
                        <div
                          className="relative flex h-full items-center justify-end rounded-full bg-gradient-to-r from-primary via-blue-500 to-cyan-400 pr-3 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ width: `${item.Progress}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                          <span className="relative z-10 text-[10px] font-semibold tracking-wide text-white">
                            {item.Progress}%
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgressWork