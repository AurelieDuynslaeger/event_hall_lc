"use client"
import Slider from "@/components/SliderAvis/Slider"

const reviews = [
    {
        title: "John Peterson",
        imgSrc: "/reviews.avif",
        desc: "As a CTO, finding a place that allows me to focus while offering a change of scenery is rare. Gather and Grow provided exactly that. The serene environment, combined with exceptional amenities, made my week productive and inspiring. I’m looking forward to returning!",
        nbStars: 5
    },
    {
        title: "Emma Carter",
        imgSrc: "/reviews.avif",
        desc: "Our team’s retreat at Gather and Grow was transformative. Between brainstorming sessions and relaxing by the lake, we found a perfect balance. The attention to detail in every corner of the space was truly impressive. Highly recommend it for any remote team.",
        nbStars: 5
    },
    {
        title: "Liam Bennett",
        imgSrc: "/reviews.avif",
        desc: "This coworking hub is a gem for any tech professional. Waking up to mountain views and winding down in the cozy common areas felt like a dream. The staff went above and beyond to ensure our needs were met. Definitely a game-changer for remote work.",
        nbStars: 5
    },
    {
        title: "Sophia Adams",
        imgSrc: "/reviews.avif",
        desc: "Gather and Grow has redefined what a workspace should be. I came here stressed, and I left feeling recharged and motivated. The curated meals, natural surroundings, and comfortable workspace make it an oasis for professionals.",
        nbStars: 5
    },
    {
        title: "James Walker",
        imgSrc: "/reviews.avif",
        desc: "The perfect mix of tranquility and productivity. As a startup employee, the uninterrupted time to focus on tasks was invaluable. The added bonus of meeting like-minded professionals made the experience even more enriching. I’ll be back soon!",
        nbStars: 5
    },
    {
        title: "Olivia Taylor",
        imgSrc: "/reviews.avif",
        desc: "Our offsite here was a resounding success. The setting fostered creativity, while the hospitality ensured we could focus entirely on our goals. The evenings spent connecting over dinner were the cherry on top. Highly recommend it!",
        nbStars: 5
    }
];

const AvisPage = () => {
    return (
        <Slider avis={reviews}/>
    )
}

export default AvisPage
