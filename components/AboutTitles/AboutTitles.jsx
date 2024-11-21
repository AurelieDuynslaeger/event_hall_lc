import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';


const AboutTitles = ({data, setSelectedProject}) => {
  return (
    <div className="w-full">
    {
        data.map( (project, i) => {
            return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
        })
    }
</div>
  )
}

export default AboutTitles


function Title({data, setSelectedProject}){

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className="cursor-default relative z-10">
            <div 
                className="inline-block pl-[10%]"
                onMouseOver={() => {setSelectedProject(i)}}
                onMouseLeave={() => {setSelectedProject(null)}}
            >
                <motion.p style={{clipPath: clip}} className="inline-block text-primary uppercase font-bold text-[4vw] leading-[5vw] m-0 relative z-10">
                    {title}
                </motion.p>
            </div>
        </div>
  )
}
