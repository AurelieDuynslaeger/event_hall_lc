"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react"
import DrawOutlineButton from "@/components/DrawOutlineButton/DrawOutlineButton";
import { PiArrowUpRightThin } from "react-icons/pi";

const hebergements = [
    {
        id: 1,
        img: "/bedroom_detail.jpeg",
        slug: "cloudline",
        heading: "Cloudline Hub",
        subheading: "Charme et Authenticité",
        appeal: "Perched between earth and sky, Cloudline Hub invites you to work in the calm and creative heights. Its large bay windows offer breathtaking views of the surrounding mountains, while its cozy interior, blending raw wood and modern touches, fuels productivity in a soothing atmosphere.",
        desc: "An inspiring coworking space nestled in the heart of the mountains, perfect for those seeking to combine serenity and efficiency.",
        plus: ""
    },
    {
        id: 2,
        img: "/view_4.avif",
        slug: "bayside",
        heading: "Bayside Hub",
        subheading: "Charpente centenaire et volige en peuplier",
        appeal: "Set along the shores of a shimmering lake, Bayside Hub is a true haven for creative minds. Connect with nature while working in a modern space where every window frames a living masterpiece: reflections on the water, soaring birds, and the enchanting calm of the lakeside.",
        desc: "A tranquil lakeside retreat, providing the perfect environment to collaborate, innovate, and recharge.",
    }
];

const HebergementsPage = () => {
    return (
        <ReactLenis
        root
        options={{
          lerp: 0.05,
          syncTouch: true,
        }}
      >
        <div className="mt-40 container m-auto">
            {hebergements.map((hebergement) => (
                <TextParallaxContent
                    key={hebergement.id}
                    imgUrl={hebergement.img}
                    subheading={hebergement.subheading}
                    heading={hebergement.heading}
                >
                    <ExampleContent
                        desc={hebergement.desc}
                        appeal={hebergement.appeal}
                        plus={hebergement.plus}
                        slug={hebergement.slug}
                    />
                </TextParallaxContent>
            ))}
        </div>
        </ReactLenis>
    )
}

export default HebergementsPage


const IMG_PADDING = 20;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(80vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/30"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ heading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-primary"
        >
            {/* <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p> */}
            <p className="font-stretch text-center text-4xl font-bold md:text-9xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ desc, appeal, plus, slug }) => {

    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 text-primary ">
            <h2 className="font-stretch col-span-1 text-xl text-primary font-bold md:col-span-4">
                {desc}
            </h2>
            <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl md:text-xl">
                    {appeal}
                </p>
                <p className="mb-8 text-xl md:text-2xl">
                    {plus}
                </p>
                <DrawOutlineButton href={`/hebergements/${slug}`} className="w-1/2 mt-auto mb-8"> 
                    <p>Let&apos;s See</p>
                    <PiArrowUpRightThin className="ml-2 h-8 w-8"/>
                </DrawOutlineButton>
            </div>
        </div>
    )
};