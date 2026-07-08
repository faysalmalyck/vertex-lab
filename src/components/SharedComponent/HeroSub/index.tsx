import React, { FC } from 'react'
import Breadcrumb from '@/components/Breadcrumb'
import { BreadcrumbLink } from '@/types/breadcrumb'

interface HeroSubProps {
  title: string
  description: string
  breadcrumbLinks: BreadcrumbLink[]
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {
  return (
    <>
      <section className='premium-shell premium-mesh relative text-center md:py-24 py-16 md:pt-44 pt-36 dark:bg-darkmode'>
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent' />
        <div className='premium-badge mx-auto mb-6 w-fit'>
          <span className='h-2 w-2 rounded-full bg-success' />
          Vertex studio
        </div>
        <h2 className='premium-heading mx-auto max-w-3xl'>
          {title}
        </h2>
        <p className='premium-copy mx-auto my-[1.875rem] max-w-3xl sm:px-0 px-4'>
          {description}
        </p>
        <Breadcrumb links={breadcrumbLinks} />
      </section>
    </>
  )
}

export default HeroSub
