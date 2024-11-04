import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Image from 'next/image';

gsap.registerPlugin(CustomEase);

const SliderServices = ({ images }) => {
    const sliderRef = useRef(null);
    const sliderTitleRef = useRef(null);
    const sliderCounterRef = useRef(null);
    const sliderPreviewRef = useRef(null);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        CustomEase.create("hop", "M0, 0 C0.488, 0.02 0.467, 0.286 0.5, 0.5 0.532, 0.712 0.58, 1 1,1");
        const sliderTitle = sliderTitleRef.current;
            const titleSpans = sliderTitle.querySelectorAll("span");
            gsap.fromTo(titleSpans, { y: 60 }, { y: 0, duration: 1, stagger: 0.02, ease: "hop" });

        // Animation initiale de l'image
        gsap.from(sliderPreviewRef.current, { opacity: 0, duration: 1 });
    }, []);

    const handleSlideChange = (direction) => {
        const newIndex = (activeSlideIndex + (direction === "next" ? 1 : -1) + totalSlides) % totalSlides;
        setActiveSlideIndex(newIndex);

        gsap.to(sliderPreviewRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                // Change the slide here
                gsap.fromTo(sliderPreviewRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            }
        });
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden" ref={sliderRef}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-[60px] text-center clip-path-polygon z-10" ref={sliderTitleRef}>
            <h1 className='absolute w-full h-[50px] text-center text-black text-[50px] font-medium'>
    {images[activeSlideIndex].name.split("").map((char, index) => (
        <span key={index} className='inline-block translate-y-[50px] will-change-transform'>{char}</span>
    ))}
</h1>
            </div>
            <div className="absolute left-1/2 bottom-[2.5em] transform -translate-x-1/2 text-center z-2">
                <p className='flex gap-4 justify-center text-black'>
                    <span ref={sliderCounterRef}>{activeSlideIndex + 1}</span> / {totalSlides}
                </p>
            </div>
            <div className="absolute w-1/3 h-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-inherit cursor-pointer will-change-transform will-change-opacity will-change-clip-path z-20">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-full z-0 opacity-50 overflow-hidden" ref={sliderPreviewRef}>
                    <Image 
                        src={images[activeSlideIndex].img} 
                        alt={images[activeSlideIndex].name} 
                        layout="responsive" 
                        width={500} 
                        height={300} 
                        className='absolute top-0 animate-pan'
                    />
                </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
                <div className="absolute left-[2.5em] bottom-[2.5em] z-20 text-black text-base">
                    {images.map((image, index) => (
                        <p key={index} className={`transition-colors duration-500 ${index === activeSlideIndex ? 'text-black' : 'text-gray-600'}`}>
                            {image.name}
                        </p>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30">
                <button className="bg-[#d6815d] text-black px-4 py-2 mr-2" onClick={() => handleSlideChange("prev")}>Previous</button>
                <button className="bg-[#d6815d] text-black px-4 py-2" onClick={() => handleSlideChange("next")}>Next</button>
            </div>
        </div>
    );
}

export default SliderServices;
