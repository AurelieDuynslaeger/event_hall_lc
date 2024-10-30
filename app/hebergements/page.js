"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const hebergements = [
    {
        id: 1,
        img: "/domaine/manoir_3.jpg",
        heading: "Le Manoir",
        subheading: "Charme et Authenticité",
        appeal: "Poutres centenaires, murs en pierre et cheminée XVIième siècle classée, découvrez votre prochain cocon pour une escapade dans le Gers : nos suites et chambres d'exception, offrant vue sur la vallée, terrasse privative, pour un week-end hors du temps !",
        desc: "Un lieu prestigieux et acceuillant",
        plus: ""
    },
    {
        id: 2,
        img: "/domaine/dortoir_6.jpg",
        heading: "Le Dortoir",
        subheading: "Lieu magique et vue panoramique",
        description: "Le Dortoir offre un cadre confortable...",
        desc: "Description du Dortoir",
        appeal: "Un hébergement pratique et abordable",
        plus: "Parfait pour les groupes"
    },
    {
        id: 3,
        img: "/domaine/etable_7.jpeg",
        heading: "L'Étable",
        subheading: "Charpente centenaire et volige en peuplier",
        description: "L'Étable est un hébergement rustique...",
        desc: "Description de l'Étable",
        appeal: "Pour une expérience authentique",
        plus: "Idéal pour les amoureux de la nature",
    }
];

const HebergementsPage = () => {
    return (
        <div className="mt-48">
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
                    />
                </TextParallaxContent>
            ))}
        </div>
    )
}

export default HebergementsPage


const IMG_PADDING = 12;

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
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/50"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({ subheading, heading }) => {
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
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    );
};

const ExampleContent = ({ desc, appeal, plus }) => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            {desc}
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                {appeal}
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                {plus}
            </p>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                Découvrir <FiArrowUpRight className="inline" />
            </button>
        </div>
    </div>
);