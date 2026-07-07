import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { portfolioinfo } from "@/data/siteData";
import { ArrowUpRight } from 'lucide-react'

const PortfolioList = () => {
  return (
    <section id='portfolio' className='premium-shell md:pb-24 pb-16 pt-8 dark:bg-darkmode'>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {portfolioinfo.map((item, index) => (
          <Link key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='group block'>
            <article className='glass-card relative h-full overflow-hidden rounded-[1.75rem] p-3 transition-all duration-500 hover:-translate-y-2 hover:border-Sky-blue-mist/30 hover:shadow-[0_30px_90px_rgba(139,92,246,0.22)]'>
              <div className='relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-900'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-[#070A12]/15 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100' />
                <div className='absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-lg backdrop-blur-xl transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-Sky-blue-mist group-hover:text-white'>
                  <ArrowUpRight className='h-5 w-5' />
                </div>
              </div>
              <div className='p-4'>
                <span className='mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary'>{item.slug}</span>
                <h4 className='pb-2 text-2xl font-black text-midnight_text transition-colors duration-300 group-hover:text-primary dark:text-white'>
                  {item.title}
                </h4>
                <p className='text-base leading-7 text-secondary dark:text-white/55'>
                  {item.info}
                </p>
                <div className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary'>
                  View project
                  <ArrowUpRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PortfolioList
