import type { Metadata } from "next";

import HeroSub from "@/components/SharedComponent/HeroSub";
import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";

export const metadata: Metadata = {
  title: "Contact | Venus",
  description:
    "Get in touch with the Venus team for inquiries, support, or project discussions.",
};

export default function Page() {
  const breadcrumbLinks = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />

      <ContactInfo />
      <ContactForm />
      <Location />

  
    </>
  );
}