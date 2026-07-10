import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "About",
    href: "/about",
    children: [
      {
        label: "Our Core Values",
        href: "/about/Our Core Values/CoreValue.tsx",
      },
      {
        label: "Our Team",
        href: "/about/Our Team/page.tsx",
      },
    ],},
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  // { label: "Contact", href: "/contact" },
];
