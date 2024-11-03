import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef, useEffect } from 'react';





const ServiceLanding = () => {

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const serviceImages = {
        orangerie : {
            img : [
                {
                    src: "/orangerie/orangerie_1_vue.jpg",
                    scale: scale4
                },
                {
                    src: "/orangerie/orangerie_3_presta.jpg",
                    scale: scale5
                },
                {
                    src: "/orangerie/orangerie_4_terrasse.jpg",
                    scale: scale6
                },
                {
                    src: "/orangerie/orangerie_11_traiteur.jpg",
                    scale: scale8
                },
                {
                    src: "/orangerie/orangerie_12_open.jpg",
                    scale: scale9
                },
            ]
        
        }
    }

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


    useEffect(()=> {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    },[])

  return (
    <div ref={container} className="h-[300vh] relative">
            <div className="sticky overflow-hidden top-0 h-screen">
            {
                serviceImages.orangerie.img.map( ({src, scale}, index) => {
                    return <motion.div key={index} style={{scale}} className="w-full h-full top-0 absolute flex items-center justify-center">
                        <div className="relative w-[25vw] h-[25vh]">
                            <Image
                                src={src}
                                fill
                                alt="image"
                                placeholder='blur'
                                className='object-cover'
                            />
                        </div>
                    </motion.div>
                })
            }
                {/* <motion.div style={{scale}} className="w-full h-full top-0 absolute flex items-center justify-center">
                    <div className="relative w-[25vw] h-[25vh]">
                        <Image
                            src={serviceImages.orangerie.img}
                            fill
                            alt="image"
                            placeholder='blur'
                            className='object-cover'
                        />
                    </div>
                </motion.div> */}
            </div>
        </div>
  )
}

export default ServiceLanding