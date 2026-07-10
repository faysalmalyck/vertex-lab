
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Services from "./services";
import ProgressWork from "./progress";

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
      <ProgressWork isColorMode />

    </>
  );
};

export default page;
