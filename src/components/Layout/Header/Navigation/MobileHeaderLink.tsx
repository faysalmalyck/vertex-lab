import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  return (
    <Link href={item.href} className="relative block w-full">
      <button
        onClick={item.submenu ? handleToggle : undefined}
        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${path === item.href ? 'bg-primary text-white shadow-lg shadow-primary/25 dark:text-white!' : ''} ${path.startsWith("/blog") && item.href==="/blog"?"bg-primary! text-white dark:text-white!":null} ${path.startsWith("/portfolio") && item.href==="/portfolio"?"bg-primary text-white dark:text-white!":null}`}
      >
        {item.label}
        {item.submenu && (
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </button>
      {submenuOpen && item.submenu && (
        <div className="w-full rounded-2xl bg-white/80 p-2 shadow-sm dark:bg-white/5">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href} className="block py-2 text-gray-500 hover:bg-gray-200">
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default MobileHeaderLink;
