import Image from 'next/image';
import {motion} from "motion/react"

const ServiceLanding = ( {scaleValues, roomName}) => {

    const serviceImages = {
        meeting : {
            img : [
              {
                src: "/orangerie/view_3.webp",
                  scale: scaleValues[0]
              },
              {
                  src: "/orangerie/view_2.avif",
                  scale: scaleValues[2]
              },
                {
                    src: "/orangerie/view_3.avif",
                    scale: scaleValues[2]
                },
                {
                    
                    src: "/orangerie/view_1.avif",
                    scale: scaleValues[4]
                },
                {
                    src: "/orangerie/view_4.webp",
                    scale: scaleValues[0]
                },
                {
                  src: "/orangerie/view_5.webp",
                  scale: scaleValues[1]
              },
              {
                src: "/orangerie/view_6.webp",
                scale: scaleValues[4]
            },
            ]
        
        },
        teamb : {
            img : [
                {
                  src: "/saintloup/view_2.avif",
                    scale: scaleValues[0]
                },
                {
                    src: "/saintloup/view_1.webp",
                    scale: scaleValues[1]
                },
                {
                    src: "/saintloup/view_3.avif",
                    scale: scaleValues[2]
                },
                {
                    src: "/saintloup/view_4.avif",
                    scale: scaleValues[4]
                },
                {
                  src: "/saintloup/view_6.jpg",
                  scale: scaleValues[4]
              },
              {
                src: "/saintloup/view_5.webp",
                scale: scaleValues[4]
            },
            ]
        
        }
    }

    const getImageContainerStyle = (index) => {
        switch (index) {
          case 1:
            return {
              top: "-30vh",
              left: "5vw",
              width: "35vw",
              height: "30vh",
            };
          case 2:
            return {
              top: "-10vh",
              left: "-25vw",
              width: "20vw",
              height: "45vh",
            };
          case 3:
            return {
              left: "27.5vw",
              width: "25vw",
              height: "25vh",
            };
          case 4:
            return {
              top: "27.5vh",
              left: "5vw",
              width: "20vw",
              height: "25vh",
            };
          case 5:
            return {
              top: "27.5vh",
              left: "-22.5vw",
              width: "30vw",
              height: "25vh",
            };
          case 6:
            return {
              top: "22.5vh",
              left: "25vw",
              width: "15vw",
              height: "15vh",
            };
            case 7:
              return {
                top: "12.5vh",
                left: "15vw",
                width: "20vw",
                height: "25vh",
              };
          default:
            return {
              width: "25vw",
              height: "25vh",
            };
        }
      };

      const images = serviceImages[roomName]?.img || [];

  return (
    <>
            <div className="sticky overflow-hidden top-0 h-screen">
            {
                images.map( ({src, scale}, index) => {
                    return <motion.div key={index} style={{scale}} className="w-full h-full top-0 absolute flex items-center justify-center ">
                        <div className="relative"
                        style={getImageContainerStyle(index)}>
                            <Image
                                src={src}
                                srcSet={`${src}?w=800&h=600 1x, ${src}?w=1600&h=1200 2x, ${src}?w=2400&h=1800 3x`}
                                fill 
                                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                                quality={90}
                                alt="image"
                                className='object-contain'
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
        </>
  )
}

export default ServiceLanding