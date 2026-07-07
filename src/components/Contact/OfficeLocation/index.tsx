import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const offices = [
  {
    title: 'Islamabad I',
    tag: 'Headquarters',
    address: 'Office No. 101, First Floor, Al-Qadir Heights, Main Jinnah Avenue, Blue Area, Islamabad, Pakistan',
    email: 'faysalmalick11@gmail.com',
    phone: '+923055552772',
    displayPhone: '+(92) 305 555 2772',
    map: 'https://maps.google.com/?q=Blue+Area+Islamabad',
  },
  {
    title: 'Islamabad II',
    tag: 'Regional Office',
    address: 'Office No. 194-A, Street No. 7, Sector I-10/3, Islamabad 44000, Pakistan',
    email: 'barkatullahkhan@gmail.com',
    phone: '+923406087431',
    displayPhone: '+(92) 340 608 7431',
    map: 'https://maps.google.com/?q=I-10/3+Islamabad',
  },
]

const Location = () => {
  return (
    <section className="relative overflow-hidden bg-[#061329] py-24 lg:py-32">
      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-200 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Our Network
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our{' '}
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Offices
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/60">
            Connect with our teams on the ground. We build products that scale globally from the heart of Islamabad.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.title}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-200 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#061329]">
                    <Icon icon="solar:map-point-bold-duotone" width={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {office.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-300/50">
                      {office.tag}
                    </p>
                  </div>
                </div>

                <Link
                  href={office.map}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-blue-200/70 transition-all duration-300 hover:border-white hover:text-white"
                >
                  <Icon icon="solar:arrow-right-up-linear" width={18} />
                </Link>
              </div>

              <div className="space-y-5 border-y border-white/10 py-6">
                <div className="flex items-start gap-4">
                  <Icon
                    icon="solar:map-point-line-duotone"
                    width={20}
                    className="mt-1 flex-shrink-0 text-blue-300/50"
                  />
                  <p className="text-sm leading-6 text-blue-100/80">
                    {office.address}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Icon
                    icon="solar:letter-line-duotone"
                    width={20}
                    className="flex-shrink-0 text-blue-300/50"
                  />
                  <Link
                    href={`mailto:${office.email}`}
                    className="truncate text-sm text-blue-100/80 transition-colors duration-200 hover:text-white hover:underline decoration-white/30 underline-offset-4"
                  >
                    {office.email}
                  </Link>
                </div>

                <div className="flex items-center gap-4">
                  <Icon
                    icon="solar:phone-calling-line-duotone"
                    width={20}
                    className="flex-shrink-0 text-blue-300/50"
                  />
                  <Link
                    href={`tel:${office.phone}`}
                    className="text-sm text-blue-100/80 transition-colors duration-200 hover:text-white hover:underline decoration-white/30 underline-offset-4"
                  >
                    {office.displayPhone}
                  </Link>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`mailto:${office.email}`}
                  className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-[#061329] transition-all duration-300 hover:bg-blue-50"
                >
                  <Icon icon="solar:letter-bold" width={16} />
                  Email Us
                </Link>

                <Link
                  href={`tel:${office.phone}`}
                  className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-blue-200 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon icon="solar:phone-bold" width={16} />
                  Call Direct
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Location