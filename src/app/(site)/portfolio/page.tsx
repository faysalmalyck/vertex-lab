import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore Vertex portfolio work across premium websites, SaaS products, and digital platforms.",
};

const PortfolioList = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/portfolio", text: "Portfolio" },
    ];
    return (
        <>
            <HeroSub
                title="Our Clients"
                description="Every client engagement is built on trust, collaboration. Our success is defined by the success of our clients. We build lasting partnerships by delivering technology solutions that create measurable impact and sustainable growth."
                breadcrumbLinks={breadcrumbLinks}
            />
            <Portfolio />
        </>
    );
};

export default PortfolioList;
