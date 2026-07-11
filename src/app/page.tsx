import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/app/(site)/about/Our work Count'
import ProgressWork from '@/components/Home/progress';
import Contactform from '@/components/Home/Contact';
import SoftwareSolutions from '@/components/Home/SoftwareSolutions/softwareSolution';
export const metadata: Metadata = {
  title: {
    absolute: "Vertex | Digital Solutions Agency",
  },
  description:
    "Vertex builds premium websites, SaaS platforms, AI integrations, and scalable digital products for ambitious brands.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <ProgressWork isColorMode />
      <SoftwareSolutions />
      <Contactform />
    </main>
  )
}
