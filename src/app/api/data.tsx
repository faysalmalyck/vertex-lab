import { getImgPath } from "@/utils/image";

export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "4.6",
    description: "Out of 5 stars from 3896 reviews on Google platform",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "364",
    description: "Client testimonials received in the year 2025",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "30M+",
    description: "Revenue generated through new projects & marketing",
  },
];

export const Progress = [
  { title: "Custom business Websites", Progress: 90 },
  { title: "Saas Application development", Progress: 84 },
  { title: "EdTech", Progress: 90 },
  { title: "AI Integrations (OpenAI,Langchain,MCP)", Progress: 89 },
  { title: "Cloud Deployment & DevOps", Progress: 92 },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "Development",
    description:
      "From concept to deployment we build scalable SaaS platforms, custom web applications, mobile apps, secure APIs, and AI powered solutions that help businesses automate workflows, improve user experiences, and accelerate growth.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "Performance optimization",
    description:
      "Enhance loading speed, SEO, Core Web Vitals, database performance, caching, and application security. Our optimization strategies focus on improving speed, scalability, and overall efficiency.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "Cloud & DevOps",
    description:
      "Deploy and manage applications on AWS, Azure, and Google Cloud. We provide CI/CD pipelines, infrastructure automation, containerization (Docker, Kubernetes), monitoring, and DevOps consulting to ensure your applications are reliable, scalable, and secure.",
  },
];

export const portfolioinfo = [
  {
    image: getImgPath("/images/portfolio/Dierk.png"),
    alt: "Dierks Company",
    title: "Dierks Company",
    slug: "fusion-dynamics",
    info: "A digital platform for a legal and strategy consultancy specializing in regulatory compliance & risk management",
    Class: "md:mt-0",
    link: "https://www.dierks.company/",

  },
  {
    image: getImgPath("/images/portfolio/VanGuard.png"),
    alt: "Portfolio",
    title: "VanGuard",
    slug: "rocket-squared",
    info: "A cross platform web and mobile application for investment tracking savings management and real time financial monitoring",
    Class: "md:mt-24",
    link: "https://investor.vanguard.com/",
  },
  {
    image: getImgPath("/images/portfolio/Doctor.png"),
    alt: "Portfolio",
    title: "Doctor SaaS",
    slug: "Mars",
    info: "An AI Powered SaaS platform that empowers healthcare professionals with smart diagnostics",
    Class: "md:mt-24",
    link: "https://clinicos.codeshop.biz/dashboard/",
  },
  {
    image: getImgPath("/images/portfolio/Gazalle.png"),
    alt: "Portfolio",
    title: "Gazelle",
    slug: "Cozycasa",
    info: "Gazelle is the leading reCommerce that buys and sells pre-owned consumer electronics ",
    Class: "md:mt-0",
    link: "https://gazelle.com/",
  },
  {
    image: getImgPath("/images/portfolio/ServCorp.png"),
    alt: "ServCorp",
    title: "ServCorp",
    slug: "fusion-dynamics",
    info: "A modern workspace platform offering coworking spaces, virtual offices, meeting rooms, and business infrastructure",
    Class: "md:mt-0",
    link: "https://www.servcorp.ae/en/",
  },
  {
    image: getImgPath("/images/portfolio/Haze.png"),
    alt: "Portfolio",
    title: "Haze & Hue",
    slug: "rocket-squared",
    info: "An online vape store offering e cigarettes, vape devices, and accessories",
    Class: "md:mt-24",
    link: "https://hazeandhues.com/",
  },
  {
    image: getImgPath("/images/portfolio/Jubilee.png"),
    alt: "Portfolio",
    title: "Jubilee Gift Shop",
    slug: "innovate-x-ventures",
    info: "A Shopify powered online gift shop offering a seamless shopping experience",
    Class: "md:mt-24",
    link: "https://jubileegiftshop.com/",
  },
  {
    image: getImgPath("/images/portfolio/Beauty.png"),
    alt: "Portfolio",
    title: "Beautox Bar",
    slug: "rocket-squared",
    info: "A premium beauty and aesthetic clinic website with online booking",
    Class: "md:mt-24",
    link: "https://www.beautoxbar.com/",
    },
  {
    image: getImgPath("/images/portfolio/AnganStay.png"),
    alt: "Portfolio",
    title: "AnganStay",
    slug: "everyday-humans",
    info: "A modern platform enabling property owners & renters to navigate through property listings",
    Class: "md:mt-0",
    link: "https://development.anganstay.com/",
  },
  {
    image: getImgPath("/images/portfolio/DCI.png"),
    alt: "Portfolio",
    title: "DCI",
    slug: "panda-logo",
    info: "A Jamican Consortium serving businesses and governments by delivering innovative solutionsto regional needs",
    Class: "md:mt-0",
    link: "https://dcisolutions.com/",
  },
];
