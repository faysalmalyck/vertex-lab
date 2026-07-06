import React from 'react'
import Link from 'next/link'
import { Servicebox } from '@/app/api/data'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const Services = () => {
  return (
    <section
      id='services'
      className='bg-section py-24 dark:bg-darklight'
    >
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex items-center justify-center gap-2'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <span className='h-3 w-3 rounded-full bg-success'></span>

          <span className='text-sm font-medium text-midnight_text dark:text-white/50'>
            Our Services
          </span>
        </div>

        <h2
          className='mx-auto mt-6 mb-16 max-w-3xl text-center text-[30px] font-bold leading-tight text-midnight_text sm:text-4xl dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          Services specifically designed to meet your business needs
        </h2>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={index * 150}
              data-aos-duration='1000'
              className='group transform-gpu will-change-transform transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3'
            >
              <div className='relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-transparent bg-white px-8 py-12 text-center shadow-service transition-[box-shadow,border-color,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-primary/20 hover:shadow-[0_35px_80px_rgba(15,23,42,0.14)] dark:border-white/5 dark:bg-darkmode dark:hover:border-primary/40'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100'></div>

                <div className='relative z-10 flex flex-1 flex-col items-center'>
                  <div className='mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className='h-10 w-10 object-contain'
                    />
                  </div>

                  <h3 className='mb-4 text-2xl font-bold text-midnight_text dark:text-white'>
                    {item.title}
                  </h3>

                  <p className='mb-8 text-base leading-7 text-gray-600 dark:text-white/60'>
                    {item.description}
                  </p>

                  <Link
                    href='#'
                    className='mt-auto inline-flex items-center gap-2 font-semibold text-primary'
                  >
                    Get Started

                    <Icon
                      icon='ei:chevron-right'
                      width='22'
                      height='22'
                      className='transition-transform duration-500 ease-out group-hover:translate-x-5'
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services