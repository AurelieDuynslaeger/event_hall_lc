"use client"
import { ReactLenis } from "lenis/dist/lenis-react"
import Hero from "@/components/Hero/Hero"
import PrezDom from "@/components/PrezDom/PrezDom"
import { PiCalendarDotsThin } from "react-icons/pi";
import DrawOutlineButton from "@/components/DrawOutlineButton/DrawOutlineButton"

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
          <DrawOutlineButton href="/reservation"> 
            <PiCalendarDotsThin className="mr-2 h-6 w-6"/>
            <p>Réserver</p>
          </DrawOutlineButton>
      </ReactLenis>
    </div>
  );
}


