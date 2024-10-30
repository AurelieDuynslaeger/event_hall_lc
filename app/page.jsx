"use client"
import { ReactLenis } from "lenis/dist/lenis-react"
import Hero from "@/components/Hero/Hero"
import PrezDom from "@/components/PrezDom/PrezDom"

export default function Home() {
  return (
    <div>
     <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          syncTouch: true,
        }}
      >
        <Hero />
        <PrezDom/>
      </ReactLenis>
    </div>
  );
}


