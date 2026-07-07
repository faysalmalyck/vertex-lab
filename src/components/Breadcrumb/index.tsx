import React, { FC } from 'react'
import Link from 'next/link'

interface BreadcrumbProps {
  links: { href: string; text: string }[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  const lastIndex = links.length - 1
  return (
    <div className='mx-auto my-[0.9375rem] inline-flex flex-wrap items-center justify-center rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10'>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {index !== lastIndex ? (
            <Link
              href={link.href}
              className="no-underline flex items-center text-midnight_text dark:text-white/70 font-bold text-sm hover:text-primary after:relative after:content-[''] after:ml-2.5 after:mr-[0.8125rem] after:my-0 after:inline-block after:top-[0.0625rem] after:w-2 after:h-2 after:border-r-2 after:border-solid after:border-b-2 after:border-midnight_text dark:after:border-white after:-rotate-45">
              {link.text}
            </Link>
          ) : (
            <span className='dark:text-white text-primary text-sm font-bold mx-2.5'>
              {link.text}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Breadcrumb
