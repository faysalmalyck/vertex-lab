'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className='premium-shell premium-mesh relative pb-12 pt-24 text-white sm:pt-28 md:pt-44 md:pb-24'>
      <div className='pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-7 md:gap-10 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-0 md:p-4 md:px-4 space-y-4 md:space-y-7 flex flex-col items-start justify-center animate-reveal-up'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='premium-badge px-3 py-1.5 text-[10px] sm:px-4 sm:py-2 sm:text-xs'>
            <Sparkles className='h-3.5 w-3.5 sm:h-4 sm:w-4' />
            <span>2026 software agency</span>
          </div>
          <h1 className='text-midnight_text font-black dark:text-white text-[2.45rem] sm:text-5xl md:text-6xl lg:text-5xl leading-[1.02] md:leading-[0.98] tracking-normal'>
            Intelligent software for ambitious brands.
          </h1>
          <p className='premium-copy max-w-2xl text-sm leading-6 sm:text-base md:text-lg md:leading-8'>
            Our team combines technical expertise and industry experience to deliver secure, scalable, and business driven software solutions.
          </p>
          <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row'>
            <Link
              href='/contact'
              className='premium-gradient-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold hover:-translate-y-1 sm:px-7 sm:py-4'>
              Start a project
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/portfolio'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-5 py-3.5 text-sm font-bold text-midnight_text shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-Sky-blue-mist/40 hover:text-primary dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-white sm:px-7 sm:py-4'>
              View portfolio
            </Link>
          </div>
          <div className='grid w-full max-w-xl grid-cols-1 gap-2 pt-1 sm:grid-cols-3 sm:gap-3 md:pt-2'>
            {['SaaS builds', 'AI Integrations', 'Cloud & DevOps '].map((item) => (
              <div key={item} className='glass-card flex items-center gap-2 rounded-2xl px-3 py-2.5 text-xs font-semibold text-slate-700 dark:text-white/80 sm:text-sm sm:py-3'>
                <CheckCircle2 className='h-4 w-4 text-success' />
                {item}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-3 pt-1 md:gap-4 md:pt-3'>
            <div className='flex items-center'>
              <Image
                src={getImgPath('/images/hero/hero-profile-1.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-0'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-2.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
              />
              <Image
                src={getImgPath('/images/hero/hero-profile-3.jpg')}
                alt='hero-image'
                width={40}
                height={40}
                quality={100}
                className='w-10! h-10! rounded-full border border-solid border-white -ml-3'
              />
            </div>
            <div>
              <p className='max-w-56 text-xs font-medium leading-5 text-secondary dark:text-white/60 sm:max-w-64 sm:text-sm'>
                Trusted by founders and operators building the next version of their business.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative flex items-center justify-center">
          <div className='absolute inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 via-Sky-blue-mist/15 to-transparent blur-2xl md:inset-6 md:rounded-[3rem]' />
          <div className='glass-card animate-float-slow relative w-full max-w-[26rem] overflow-hidden rounded-[1.5rem] p-2.5 sm:p-4 md:max-w-none md:rounded-[2rem]'>
            <div className='absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/10 dark:from-white/10' />
            <div className='relative overflow-hidden rounded-[1.15rem] border border-white/70 bg-slate-950/5 dark:border-white/10 md:rounded-[1.5rem]'>
              <Image
                src={getImgPath('/images/hero/hero-image.png')}
                alt='Vertex digital solutions agency dashboard preview'
                width={700}
                height={520}
                quality={100}
                className='h-[360px] w-full object-cover object-center drop-shadow-2xl sm:h-auto sm:object-contain'
                priority
              />
            </div>
            <div className='absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-1.5 rounded-2xl border border-white/40 bg-white/80 p-2 text-center shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-darkmode/75 sm:bottom-7 sm:left-7 sm:right-7 sm:gap-2 sm:p-3'>
              {[
                ['30M+', 'Revenue'],
                ['92%', 'DevOps'],
                ['4.8', 'Rating'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className='text-sm font-black text-midnight_text dark:text-white sm:text-lg'>{value}</p>
                  <p className='text-[9px] font-semibold uppercase tracking-wider text-secondary dark:text-white/50 sm:text-[11px]'>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
