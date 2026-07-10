import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/app/(site)/about/Our work Count'
import VertexEdgePage from '@/components/Home/vertex edge/vertexedge';
import Contactform from '@/components/Home/Contact';
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
      
      <Contactform />
    </main>
  )
}
