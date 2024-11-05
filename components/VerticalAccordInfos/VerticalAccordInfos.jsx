import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../../lib/hooks/useWindowSize";
import { useState } from "react";
import { PiArrowsDownUpThin, PiMapPinThin, PiUserCirclePlusThin, PiVanThin } from "react-icons/pi";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";

const panelVariants = {
    open: {
      width: "100%",
      height: "100%",
    },
    closed: {
      width: "0%",
      height: "100%",
    },
  };
  
  const panelVariantsSm = {
    open: {
      width: "100%",
      height: "200px",
    },
    closed: {
      width: "100%",
      height: "0px",
    },
  };
  
  const descriptionVariants = {
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.125,
      },
    },
    closed: { opacity: 0, y: "100%" },
  };

  const items = [
    {
      id: 1,
      title: "Nous Trouver",
      icon: <PiMapPinThin />,
      imgSrc:
        "/domaine/lassallemap.jpg",
      description:
        "Le Domaine est référencé sur tous les sites Google Map, Plan Apple, GPS. Accessible sans difficulté à pied, à vélo ou moto, en véhicules de tourismes, en bus etc.",
    },
    {
      id: 2,
      title: "Venir à nous",
      icon: <PiArrowsDownUpThin />,
      imgSrc:
        "/domaine/navettevip.jpg",
      description:
        "Tarifs navette",
    },
    {
      id: 3,
      title: "..Ou on vient à vous ! Navette VIP",
      icon: <PiVanThin />,
      imgSrc:
        "/domaine/navettevip.jpg",
      description:
        "Nous mettons à votre disposition un service navette VIP 7 personnes. Prise en charge à Lectoure (chemin de Compostelle, pointage à la cathédrale), la gare d’Agen ou l’Aéroport Toulouse-Blagnac (rayon de 75 km maximum - tarif à la demande)",
    },
    {
      id: 4,
      title: "Visiter le Domaine ?",
      icon: <HiOutlineViewfinderCircle />,
      imgSrc:
        "/domaine/4.jpg",
      description:
        "N'hésitez pas à revenir vers nous pour toute demande complémentaire, nous pouvons aussi vous faire visiter le domaine, sans engagement.",
    },
    {
        id: 5,
        title: "Nous suivre",
        icon: <PiUserCirclePlusThin />,
        imgSrc:
          "/domaine/8.jpg",
        description:
          "Retrouvez nous sur Facebook, Instagram et Linkedin",
      },
  ];
const VerticalAccordionInfos = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-inherit h-[80vh] flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[600px] w-full max-w-7xl mx-auto shadow overflow-hidden rounded-xl">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              icon={item.icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-[#e39c7e] text-white grid place-items-center">
          {icon}
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordionInfos;

