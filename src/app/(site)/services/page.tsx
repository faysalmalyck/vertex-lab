import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import FeaturesSection from "@/components/Feature";
import { Metadata } from "next";
import Services from "./services";
import ContactForm from "@/components/Contact/Form";
export const metadata: Metadata = {
    title: "Services",
    description: "Explore Vertex digital solution services across web, SaaS, AI, cloud, and product engineering.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />      
      <Services />
      
      <div className="py-12 ">
        <FeaturesSection />
        <ContactForm />
      
      </div>
    </>
  );
};

export default page;