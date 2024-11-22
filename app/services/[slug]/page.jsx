"use client"
import React from "react";
import { useParams } from "next/navigation";
import { useSpring } from "framer-motion";
import ServicesGallery from "@/components/ServicesGallery/ServicesGallery"
import ServicesDescription from '@/components/ServicesDescription/ServicesDescription'
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll"
import RoomPage from "./[name]/page";

const serviceData = {
    receptions: {
        title: "Nos salles de réceptions",
        description: "Séminaire, Réunion de famille, Mariage : un lieu d'exception pour magnifier cette célébration! Vous pourrez apprécier l'Orangerie et ses terrasses avec vue panoramique sur la vallée et le Domaine,ou la salle Saint-Loup (petit espace réception de 50m², 30 personnes assises).",
        // description: "Séminaire, Réunion de famille, Mariage : un lieu d'exception pour magnifier cette célébration! Vous pourrez apprécier l' Orangerie et ses terrasses avec vue panoramique sur la vallée et le Domaine. Une salle de réception de 235m² (190 personnes assises, 200 debout), entièrement vitrée, plus de 30 mètres d'ouvertures accordéon ouvrant sur les terrasses de plus de 300m², c'est plus de 500m² d'espace de réception dans un cadre exceptionnel! Entièrement normée PMR, espaces sanitaires de qualité de plus de 50m², cuisine et office traiteur de 50m² avec parking privatif - Parking pour 90 véhicules. Le Domaine vous propose aussi une solution hébergements pouvant aller jusqu'à 44 couchages. Possibilité de louer l'Orangerie à la journée en semaine du lundi au jeudi. Vous pourrez aussi apprécier la salle Saint-Loup (petit espace réception de 50m², 30 personnes assises)",
        links: [
            { name: "L'Orangerie", href: "/services/receptions/orangerie" },
            { name: "La salle Saint-Loup", href: "/services/receptions/saintloup" },
        ],
    },
    tablehote: {
        title: "Table d'hôte",
        description: "Exclusivement pour le diner, Olivier vous prépare des repas du terroir ou à thème, selon la saison, ses envies et celles de nos Hôtes. Une cuisine simple, sans chi-chi, familiale, pour un plaisir partagé. (Merci à nos hôtes de nous prévenir de leurs éventuels régimes ou allergies, ainsi que leur préférences alimentaires - Végé. etc.) Le repas du diner par personne : 25.00€ TTC. (Compris apéritif, boissons et café ou infusion)",
        img:[
          {name: "Step into a warm and welcoming space", handle: "view_1"},
          {name: "Experience dishes crafted from local produce", handle: "view_2"},
          {name: "Enjoy moments of connection around the table", handle: "view_3"},
          {name: "Leave nourished and inspired for your next step.", handle: "view_4"},
        ]
    },
    spabienetre: {
        title: "Spa et Bien-être",
        description: "Vous aurez accès à notre piscine couverte (10X5) chauffée à 27° toute l'année. Vous pourrez profiter de sa plage balnéo avec ses 4 buses de massage (allongé). Le banc de massage balnéo de 4 buses assis. Ses deux canons à eau de massage, relaxation garantie! La piscine du domaine partagée entre les chambres d'hôtes, les Gîtes et le dortoir. Grâce à ses grandes baies en accordéon, la piscine s'ouvre entièrement sur les terrasses et les espaces verts,  mais peut aussi être refermée en cas d'intempéries ou en mi-saison, permettant de profiter de ses bienfaits toute l'année. Dès 2025, Le Spa Jaccuzi 5 places est en accès libre toute l'année, pour une détente assurée. Directement accessible de la terrasse de la piscine, vous pourrez vous relaxer en pleine nature, sous l'ombrière en toile de lin pour votre plus grand confort. Aromathérapie, chromothérapie triple (projecteur led, spa lumineux). Musicothérapie Bluetooth relaxante. SPA Archipel® GT5 balboa. Gamme professionnel thérapeutique 2m15 * 2m15. 100 jets (86 jets de massage + 14 buses d'air chaud). 5 personnes (2 places allongées et 3 places assises). Sauna et Hamman dès 2025, Profitez de l'espace hammam et sauna avec une vue panoramique sur la vallée, Relaxez-vous en pleine nature, vous pouvez vous détendre et vous ressourcer en toute intimité (sur réservation pour plus d'intimité et de confort). Combiné 8 personnes maximum: Côté Sauna : 4 personnes maxi, boiserie extérieur et intérieur en Cèdre rouge du Canada. Côté Hammam : 4 personnes maxi, Acrylique thermoformé Aristech'blanc effet marbre, poêle finlandais HARVIA. Sauna & Hammam 7.50€ TTC par personne, la céance de 30 minutes, sur réservation",
        img:[
          {name: "chauffée à 27° toute l'année", handle: "view_1"},
          {name: "s'ouvre entièrement sur les terrasses", handle: "view_2"},
          {name: "venez vous relaxer en pleine nature", handle: "view_3"},
          {name: "sous une ombrière en toile de lin", handle: "view_4"},
          {name: "et profiter de ses bienfaits toute l'année", handle: "view_5"},
          {name: "...dès 2025, Spa Jaccuzi 5 places", handle: "view_6"},
        ]
    },
};

// const shuffle = (array) => {
//     let currentIndex = array.length,
//       randomIndex;
  
//     while (currentIndex != 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex],
//         array[currentIndex],
//       ];
//     }
  
//     return array;
//   };

  // const squareData = [
  //   {
  //     id: 1,
  //     src: "/orangerie/orangerie_1_vue.jpg",
  //   },
  //   {
  //     id: 2,
  //     src: "/orangerie/orangerie_3_presta.jpg",
  //   },
  //   {
  //     id: 3,
  //     src: "/saintloup/parvisbis.jpg",
  //   },
  //   {
  //     id: 4,
  //     src: "/saintloup/config20p.jpg",
  //   },
  //   {
  //     id: 5,
  //     src: "/orangerie/orangerie_4_terrasse.jpg",
  //   },
  //   {
  //     id: 6,
  //     src: "/orangerie/orangerie_11_traiteur.jpg",
  //   },
  //   {
  //     id: 7,
  //     src: "/saintloup/config20pbis.jpg",
  //   },
  //   {
  //     id: 8,
  //     src: "/saintloup/salle50m.jpg",
  //   },
  //   {
  //     id: 9,
  //     src: "/orangerie/orangerie_12_open.jpg",
  //   },
  //   {
  //     id: 10,
  //     src: "/orangerie/orangerie_7_empty.jpg",
  //   },
  //   {
  //     id: 11,
  //     src: "/orangerie/orangerie_14_table.jpg",
  //   },
  //   {
  //     id: 12,
  //     src: "/orangerie/orangerie_8_office.jpg",
  //   },
  //   {
  //     id: 13,
  //     src: "/orangerie/orangerie_6_terrasse.jpg",
  //   },
  //   {
  //     id: 14,
  //     src: "/orangerie/orangerie_13_coucher.jpg",
  //   },
  //   {
  //     id: 15,
  //     src: "/orangerie/orangerie_9_cuisine.jpg",
  //   },
  //   {
  //     id: 16,
  //     src: "/orangerie/orangerie_5_terrasse.jpg",
  //   },
  // ];
  
  // const generateSquares = () => {
  //   return shuffle(squareData).map((sq) => (
  //     <motion.div
  //       key={sq.id}
  //       layout
  //       transition={{ duration: 1.5, type: "spring" }}
  //       className="w-full h-full"
  //       style={{
  //         backgroundImage: `url(${sq.src})`,
  //         backgroundSize: "cover",
  //       }}
  //     ></motion.div>
  //   ));
  // };

const ServicePage = () => {
    // const router = useRouter();
    const { slug } = useParams();
    const spring = {
      stiffness: 150,
      damping: 15,
      mass: 0.1
    }
    
    const mousePosition = {
      x: useSpring(0, spring),
      y: useSpring(0, spring)
    }
    
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const targetX = clientX - (window.innerWidth / 2 * 0.25);
      const targetY = clientY - (window.innerWidth / 2 * 0.30);
      mousePosition.x.set(targetX);
      mousePosition.y.set(targetY);
    }

    // Récupère les données en fonction du slug
    const service = serviceData[slug];

    if (!service) {
        return <div>Hébergement non trouvé</div>;
    }

    return (
      <>
        {slug === "receptions" ? (
          <>
            {/* <section className="w-full h-[90vh] p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto my-auto">
                <div>
                    <h1 className={`${cinzel.className} text-4xl md:text-6xl font-semibold`}>
                        {service.title}
                    </h1>
                    <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                        {service.description}
                    </p>
                    <div className="flex justify-evenly">
                        {service.links && service.links.length > 0 && service.links.map((link) => (
                            <button 
                                key={link.name} 
                                className="bg-secondary  text-background font-medium py-2 px-4 rounded transition-all hover:bg-background hover:text-secondary hover:border-1 hover:border-secondary hover:font-bold active:scale-95" 
                                onClick={() => router.push(link.href)}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
                <ShuffleGrid />
            </section> */}
            <RoomPage />
            </>
        ) : (slug === "tablehote" || slug === "spabienetre") ? (
            // <SliderServices images={service.img}/>
            <SmoothScroll>
            <section onMouseMove={mouseMove} className="w-4/5 m-auto mt-28">
            {service.img.map(({ handle, name }, i) => (
              <>
                <ServicesGallery mousePosition={mousePosition} handle={handle} slug={slug} key={i} name={name} activeIndex={i}/>
                </>
              ))}
               {service.img && service.img.length > 0 ? (
              <ServicesDescription mousePosition={mousePosition} service={service.img} slug={slug}/>): (
                <p>Aucune description disponible</p> // Message de secours pour la description
              )}
              </section>
              </SmoothScroll>
      
        ) : null} {/* Ajoutez une valeur par défaut si nécessaire */}
    </>
    )
}

export default ServicePage

// const ShuffleGrid = () => {
//     const timeoutRef = useRef(null);
//     const [squares, setSquares] = useState(generateSquares());
  
//     useEffect(() => {
//       shuffleSquares();
  
//       return () => clearTimeout(timeoutRef.current);
//     }, []);
  
//     const shuffleSquares = () => {
//       setSquares(generateSquares());
  
//       timeoutRef.current = setTimeout(shuffleSquares, 3000);
//     };
  
//     return (
//       <div className="grid grid-cols-5 grid-rows-3 h-[450px] gap-1">
//         {squares.map((sq) => sq)}
//       </div>
//     );
//   };


