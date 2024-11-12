import React from 'react'

const AboutDesc = ({data, selectedProject}) => {

    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    }
  return (
     <div className="absolute top-[5px] h-full w-full z-0 pointer-events-none">
            {
                data.map( (project, i) => {
                    const { title, description } = project;
                    return (
                    <div 
                        key={i} 
                        className="bg-secondary flex justify-between items-center px-[10%] clip-[inset(50%_0_50%)] transition-[clip-path_.4s]"
                        style={{clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%"}}
                    >
                        <p className="text-secondary uppercase font-bold text-[4vw] leading-[5vw] m-0 relative z-10">{crop(title, 9)}</p>
                        <p className="w-[40%] text-[0.7vw] font-bold text-primary">{description}</p>
                    </div>
                    )
                })
            }
        </div>
  )
}

export default AboutDesc