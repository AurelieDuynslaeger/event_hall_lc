"use client"
import { ReactLenis } from "lenis/dist/lenis-react"
import Hero from "@/components/Hero/Hero"
import PrezDom from "@/components/PrezDom/PrezDom"
import Header from "@/components/Home/Header"

export default function Home() {
  return (
    <div>
     <ReactLenis
        root
        options={{
          lerp: 0.05,
          syncTouch: true,
        }}
      >
        <Header />
        <Hero />
        <PrezDom/>
      </ReactLenis>
    </div>
  );
}


