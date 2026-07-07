"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.href} className={`premium-link-line flex py-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-primary dark:text-white/75 dark:hover:text-white ${path === item.href ? 'text-primary dark:text-white after:w-full' : ''} ${path.startsWith("/blog") && item.href==="/blog"?"text-primary! dark:text-white! after:w-full":null} ${path.startsWith("/portfolio") && item.href==="/portfolio"?"text-primary! dark:text-white! after:w-full":null}`}>
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className={`absolute left-0 top-9 mt-2 w-60 rounded-2xl border border-slate-200/70 bg-white/90 py-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-darklight/90 dark:shadow-dark-md`}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-[15px]  ${
                path === subItem.href
                  ? "bg-primary text-white"
                  : "text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
