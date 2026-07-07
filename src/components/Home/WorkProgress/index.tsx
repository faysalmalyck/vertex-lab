'use client'

import React from 'react'
import Image from 'next/image'
import { Progress as ProgressData } from "@/data/siteData";
import { getImgPath } from '@/utils/image'
import { ArrowUpRight } from 'lucide-react'

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
      className={`scroll-mt-25 relative overflow-hidden ${
        isColorMode
          ? 'bg-section dark:bg-darklight'
          : 'bg-white dark:bg-darkmode'
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="glass-card relative hidden overflow-hidden rounded-[2rem] p-5 md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-Sky-blue-mist/10" />
              <Image
                src={getImgPath('/images/work-progress/progress-work.png')}
                alt="Work Progress"
                width={650}
                height={520}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                className="relative z-10"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-darkmode/75">
                <p className="text-sm font-bold text-midnight_text dark:text-white">Strategy to shipped product</p>
                <p className="mt-1 text-xs leading-5 text-secondary dark:text-white/55">Discovery, design systems, engineering, deployment, and iteration in one delivery loop.</p>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-6"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="premium-badge">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <span>Capability system</span>
            </div>

            <h2 className="premium-heading pb-6 pt-7">
              We Build Real Software That Solves Business Problems
            </h2>

            <p className="premium-copy">
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
                  <div className="glass-card relative overflow-hidden rounded-2xl px-5 py-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:hover:border-primary/30">

                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100 dark:from-white/5"></div>

                    <div className="relative z-10">

                      <div className="mb-3 flex items-center justify-between gap-4">
                        <h4 className="text-[15px] font-bold tracking-tight text-midnight_text dark:text-white">
                          {item.title}
                        </h4>
                        <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      </div>

                      <div
                        role="progressbar"
                        aria-label={item.title}
                        aria-valuenow={item.Progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="relative mt-1 h-3 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10"
                      >
                        <div
                          className="animate-gradient-pan relative flex h-full items-center justify-end rounded-full bg-gradient-to-r from-primary via-Sky-blue-mist to-success pr-3 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{ width: `${item.Progress}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                          <span className="absolute -top-7 right-0 text-xs font-black tracking-wide text-primary dark:text-white">
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
