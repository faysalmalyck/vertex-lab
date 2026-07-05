import React from 'react'
import Link from 'next/link'

const Location = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/contact', text: 'Contact' },
  ]
  return (
    <>
      <section className='bg-primary md:py-24 py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className=''>
            <div className='grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white border-opacity-50 pb-11'>
              <div className='col-span-3'>
                <h2 className='text-white max-w-56 text-[30px] leading-tight font-bold'>
                  Islamabad-I
                </h2>
              </div>
              <div className='col-span-3'>
                <p className='sm:text-2xl text-xl text-IceBlue font-normal max-w-64 leading-7 text-white/50'>
                  Office # 101, 1st Floor, Al-Qadir Heights, Main Jinnah Avenue, Blue Area, Islamabad, Pakistan
                </p>
              </div>
              <div className='col-span-3'>
                <Link
                  href='mailto:faysalmalick1@gmail.com'
                  className='sm:text-2xl text-xl text-white font-medium '>
                  faysalmalick1@gmail.com
                </Link>
                <Link
                  href='tel:+923055552772'
                  className='sm:text-2xl text-xl text-white/80 flex items-center gap-2 hover:text-opacity-100 w-fit'>
                  <span className='text-white/40!'>Call</span>
                  +(92)-305-5552772
                </Link>
              </div>
            </div>
            <div className='grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12'>
              <div className='col-span-3'>
                <h2 className='text-white max-w-52 text-[30px] leading-tight font-bold'>
                  Islamabad-II
                </h2>
              </div>
              <div className='col-span-3'>
                <p className='sm:text-2xl text-xl text-white/50 font-normal max-w-64 leading-7'>
                  Office # 194A,Street 7 I-10-/3 Islamabad, Pakistan
                </p>
              </div>
              <div className='col-span-3'>
                <Link
                  href='mailto:barkatullahkhan120136@gmail.com'
                  className='sm:text-2xl text-xl text-white font-medium '>
                  barkatullahkhan120136@gmail.com
                </Link>
                <Link
                  href='tel:=923406087431'
                  className='sm:text-2xl text-white/80 text-xl text-IceBlue flex items-center gap-2 hover:text-opacity-100 w-fit'>
                  <span className='text-white/40!'>Call</span>
                  +(92)-340-6087431
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
