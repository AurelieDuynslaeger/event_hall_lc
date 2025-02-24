import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
// import styles from './style.module.css';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

const Modal = ({modal, projects}) => {
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
  const { active, index } = modal;

  useEffect( () => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    })

  }, [])

  return (
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="absolute h-[400px] w-[400px] bg-white overflow-hidden pointer-events-none flex items-center justify-center">
            <div style={{top: index * -100 + "%"}} className="absolute h-full w-full transition-[top] duration-500 cubic-[0.76, 0, 0.24, 1]">
            {
                projects.map( (project, index) => {
                const { src, color } = project
                return <div className="flex items-center justify-center h-full w-full" style={{backgroundColor: color}} key={`modal_${index}`}>
                    <Image 
                    src={`${src}`}
                    width={400}
                    height={0}
                    alt="image"
                    className='h-full'
                    />
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className="absolute z-20 flex items-center justify-center w-[80px] h-[80px] rounded-full bg-secondary text-foreground text-[14px] font-bold pointer-events-none" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className="absolute z-20 flex items-center justify-center w-[80px] h-[80px] rounded-full bg-secondary text-foregound text-[14px] font-bold pointer-events-none bg-transparent" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>Visit</motion.div>
    </>

  )

}

export default Modal