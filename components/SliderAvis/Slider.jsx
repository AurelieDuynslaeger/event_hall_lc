import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import Image from "next/image";
import { cinzel, montserrat } from "@/app/font";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");

const Slider = ({ avis }) => {
  const [splitText, setSplitText] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null); // Référence pour le slider
  const cardsRef = useRef([]); // Référence pour toutes les cartes
  const h1SpansRef = useRef([]); // Référence pour les <span> des h1

  // Fonction pour découper le texte en <span> pour chaque caractère
  const splitTextIntoSpans = (text) => {
    return text
      .split("")
      .map((char, index) => (
        <span key={index} className="relative inline-block">
          {char === " " ? "\u00A0\u00A0" : char}
        </span>
      ));
  };

  // Fonction pour initialiser les cartes avec l'animation GSAP
  const initializeCards = () => {
    const cards = cardsRef.current;
    gsap.to(cards, {
      y: (i) => -15 + 15 * i + "%",
      z: (i) => 15 * i,
      opacity: 1,
      duration: 1,
      ease: "cubic",
      stagger: -0.1,
    });
  };

  // Initialiser les cartes après le premier rendu
  useEffect(() => {
    initializeCards();

    gsap.set("h1 span", { y: -200 });
    gsap.set(".slider .card:first-child h1 span", { y: 0 });

    return () => {
      // Cleanup si nécessaire
      gsap.killTweensOf(cardsRef.current); // Annuler toutes les animations GSAP
    };
  }, [avis]);

  // Fonction de gestion de l'animation au clic
  const handleCardClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    let cards = cardsRef.current;
    const lastCard = cards.pop();
    const nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll("h1 span"), {
      y: 200,
      duration: 0.75,
      ease: "cubic",
    });

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();
        gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      },
    });

    // Modifier la cible de la carte suivante
    if (nextCard) {
      gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1,
        ease: "cubic",
        stagger: 0.05,
      });
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-background">
      <div
        ref={sliderRef}
        className="absolute top-[10vh] w-screen h-screen overflow-hidden perspective-[200px] perspective-origin-[50%_100%] cursor-pointer"
      >
        {avis.map((a, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)} // Ajouter chaque carte dans le tableau de refs
            className="card absolute top-1/2 left-1/2 w-1/2 h-[300px] md:h-[500px] rounded-lg transform -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black border-primary border-2"
          >
            <Image
              src={a.imgSrc}
              alt=""
              className="absolute w-full h-full opacity-75"
              width={500}
              height={0}
            />
            <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)]">
              <p
                className={`${montserrat.className} relative text-center text-[3vw] font-light tracking-[-0.05em] text-[#dfe1c8]`}
              >
                {a.nbStars}
              </p>
              <button
                onClick={handleCardClick}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-black text-white rounded-md z-10"
              >
                Next Card
              </button>
              <h1
                className={`${cinzel.className} relative text-center text-4xl font-light tracking-[-0.05em] uppercase text-[#dfe1c8]`}
                ref={(el) => (h1SpansRef.current[i] = el)} // Ajouter la référence de chaque <h1>
              >
                {splitTextIntoSpans(a.title)} {/* Applique la découpe du texte ici */}
              </h1>
              <p
                className={`${montserrat.className} relative text-center text-md font-light tracking-[-0.05em] text-[#dfe1c8]`}
              >
                {a.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
