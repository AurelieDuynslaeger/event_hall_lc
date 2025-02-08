"use client"
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
  } from "motion/react";
  import { useRef } from "react";

const SECTION_HEIGHT = 1200;

const Hero = () => {
    return (
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >
        {/* <CenterImage /> */}
  
        <ParallaxImages />
  
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-slate-50/0 to-slate-250" />
      </div>
    );
  };

export default Hero;

// const CenterImage = () => {
// const { scrollY } = useScroll();

// const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
// const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

// const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

// const backgroundSize = useTransform(
//     scrollY,
//     [0, SECTION_HEIGHT + 500],
//     ["70%", "100%"]
// );
// const opacity = useTransform(
//     scrollY,
//     [SECTION_HEIGHT, SECTION_HEIGHT + 500],
//     [0.7, 0]
// );

// return (
//     <motion.div
//     className="sticky top-0 h-screen w-full rounded-xl"
//     style={{
//         clipPath,
//         backgroundSize,
//         opacity,
//         backgroundImage:
//         "url(/view_4.avif)",
//         backgroundPosition: "cover",
//         backgroundRepeat: "no-repeat",
//     }}
//     >
//         <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         className="w-1/4 flex flex-col items-center justify-center gap-2 absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2"
//         >
//             <p
//                     className="text-primary font-stretch text-2xl"
//                 >
//                     Enter...

//                 </p>
//             <PiArrowDownThin className="text-primary w-14 h-14"/>
//         </motion.div>

//     </motion.div>
// );
// };
  
const ParallaxImages = () => {
  return (
      <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
          src="/bedroom_view.webp"
          alt="Gather and Grow Spaces"
          start={550}
          end={-200}
          className="w-1/3 opacity-50"
      />
      <ParallaxImg
          src="/view_13.avif"
          alt="Gather and Grow Spaces"
          start={200}
          end={-250}
          className="mx-auto w-2/3 opacity-50"
      />
      <ParallaxImg
          src="/view_14.avif"
          alt="Gather and Grow Spaces"
          start={-200}
          end={100}
          className="ml-auto w-1/3 opacity-50"
      />
      <ParallaxImg
          src="/view_9.avif"
          alt="Cour du domaine Lassalle Saint Créac"
          start={0}
          end={-500}
          className="ml-24 w-5/12 opacity-50"
      />
      </div>
  );
};
  
const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
      target: ref,
      offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
      <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity, borderRadius: "25px" }}
      />
  );
};
  