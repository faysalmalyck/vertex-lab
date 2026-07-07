'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className='premium-shell premium-mesh relative md:pt-44 pt-32 text-white'>
      <div className='pointer-events-none absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent' />
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-10 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-7 flex flex-col items-start justify-center animate-reveal-up'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='premium-badge'>
            <Sparkles className='h-4 w-4' />
            <span>2026 software agency</span>
          </div>
          <h1 className='text-midnight_text font-black dark:text-white text-5xl md:text-6xl lg:text-7xl leading-[0.98] tracking-normal'>
            Intelligent software for ambitious brands.
          </h1>
          <p className='premium-copy max-w-2xl'>
            Our team combines technical expertise and industry experience to deliver secure, scalable, and business driven software solutions.
          </p>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Link
              href='/contact'
              className='premium-gradient-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold hover:-translate-y-1'>
              Start a project
              <ArrowRight className='h-4 w-4' />
            </Link>
            <Link
              href='/portfolio'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-7 py-4 text-sm font-bold text-midnight_text shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-Sky-blue-mist/40 hover:text-primary dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-white'>
              View portfolio
            </Link>
          </div>
          <div className='grid w-full max-w-xl grid-cols-1 gap-3 pt-2 sm:grid-cols-3'>
            {['SaaS builds', 'AI integrations', 'Cloud delivery'].map((item) => (
              <div key={item} className='glass-card flex items-center gap-2 rounded-2xl px-3 py-3 text-sm font-semibold text-slate-700 dark:text-white/80'>
                <CheckCircle2 className='h-4 w-4 text-success' />
                {item}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-4 pt-3'>
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
              <p className='text-sm font-medium text-secondary max-w-64 dark:text-white/60'>
                Trusted by founders and operators building the next version of their business.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 col-span-12 relative flex items-center justify-center">
          <div className='absolute inset-6 rounded-[3rem] bg-gradient-to-br from-primary/25 via-Sky-blue-mist/15 to-transparent blur-2xl' />
          <div className='glass-card animate-float-slow relative w-full overflow-hidden rounded-[2rem] p-4'>
            <div className='absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/10 dark:from-white/10' />
            <div className='relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-slate-950/5 dark:border-white/10'>
              <Image
                src={getImgPath('/images/hero/hero-image.png')}
                alt='Venus software agency dashboard preview'
                width={700}
                height={520}
                quality={100}
                className='h-auto w-full object-contain drop-shadow-2xl'
                priority
              />
            </div>
            <div className='absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2 rounded-2xl border border-white/40 bg-white/75 p-3 text-center shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-darkmode/75'>
              {[
                ['30M+', 'Revenue'],
                ['92%', 'DevOps'],
                ['4.6', 'Rating'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className='text-lg font-black text-midnight_text dark:text-white'>{value}</p>
                  <p className='text-[11px] font-semibold uppercase tracking-wider text-secondary dark:text-white/50'>{label}</p>
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
