'use client';
import { useState } from 'react';
import AboutTitles from '@/components/AboutTitles/AboutTitles';
import AboutDesc from '@/components/AboutDesc/AboutDesc';
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll"
import Slider from "@/components/SliderAvis/Slider"


const data = [
  {
      title: "Nous trouver",
      description: "Domaine Lassalle Saint-Créac, 500 chemin d'en Mansaut, 32380 Saint-Créac, France",
      speed: 0.6
  },
  {
      title: "VISITER",
      description: "N'hésitez pas à revenir vers nous pour toute demande complémentaire, nous pouvons aussi vous faire visiter le domaine, sans engagement. Le Domaine est référencé sur tous les sites Google Map, Plan Apple, GPS. Accessible sans difficulté à pied, à vélo ou moto, en véhicules de tourismes, en bus etc.",
      speed: 0.6
  },
  {
      title: "Navette VIP",
      description: "Nous mettons à votre disposition un service navette VIP 7 personnes. Prise en charge à Lectoure (chemin de Compostelle, pointage à la cathédrale), la gare d’Agen ou l’aéroport Toulouse-Blagnac.",
      speed: 0.77
  },
  {
      title: "venir à vous",
      description: "Tarifs A/R : Aéroport Toulouse-Blagnac [120kms : 120€ TTC] | Gare férroviaire Agen [106kms : 106€ TTC] | Aéroport Agen La Garenne [98kms : 98€ TTC] | en soit Le km dans un rayon maxi de 75 kms = 1 € TTC",
      speed: 0.9
  },
  {
      title: "Ils sont venus",
      description: "Découvrez les avis de ceux qui ont déjà séjourné chez nous et partagé leurs expériences du Domaine Lassalle Saint-Créac.",
      speed: 0.9
  },

]

const avis = [
    {
        title : "Magali Roy",
        imgSrc : "/domaine/1.jpg",
        desc: "Le domaine est superbe et le calme absolu. Nous avons beaucoup apprécié le confort de notre chambre ainsi que l’espace de celle-ci, la piscine chauffée couverte qui permet de se baigner quelle que soit la météo et la tranquillité du site. La rénovation est superbe et le charme du site est indéniable ! Nous avons été très bien accueillis et avons eu des échanges très sympathiques avec Olivier et Didier que nous remercions chaleureusement !",
        nbStars : 5
    },
    {
        title : "Magali Roy",
        imgSrc : "/domaine/1.jpg",
        desc: "Le domaine est superbe et le calme absolu. Nous avons beaucoup apprécié le confort de notre chambre ainsi que l’espace de celle-ci, la piscine chauffée couverte qui permet de se baigner quelle que soit la météo et la tranquillité du site. La rénovation est superbe et le charme du site est indéniable ! Nous avons été très bien accueillis et avons eu des échanges très sympathiques avec Olivier et Didier que nous remercions chaleureusement !",
        nbStars : 5
    },
    {
        title : "Severine ROAUX",
        imgSrc : "/domaine/2.jpg",
        desc: "Domaine magnifique où nous nous avons passé un excellent week-end. Nos hôtes ont été très accueillants, à l'écoute et de très bons conseils pour compléter le séjour avec des visites adaptées et pertinentes. Le gîte est de toute beauté, la chambre très confortable, le repas de qualité ... un lieu dans lequel on se sent vite a l'aise et dans lequel nous aurons plaisir à revenir ! Merci à Didier et Olivier pour leur accueil qui a magnifié notre Anniversaire de Mariage.",
        nbStars : 5
    },
    {
        title : "Veronique Janin",
        imgSrc : "/domaine/3.jpg",
        desc: "3ème visite et cette fois pour y organiser mes 60 ans, nous avions privatisé le domaine. Et encore une fois tout était parfait ! Mes invités subjugués par la beauté du lieu, la salle de réception idéale pour les événements festifs et surtout l'accueil et l'extrême gentillesse de Didier et Olivier ! Encore mille merci à vous 2, ce lieu magique a sublimé cette soirée . A très bientôt",
        nbStars : 5
    },
    {
        title : "SYLVIE COUCKE",
        imgSrc : "/domaine/4.jpg",
        desc: "Nous avons passé un week-end magnifique en famille les 24 et 25 août 2024. Un décor authentique, un domaine restauré, rénové, dans le respect de l'architecture locale. Tout est aménagé et meublé avec beaucoup de goût. Les prestations offertes par ce domaine sont exceptionnelles. Un accueil simple et chaleureux, par les hôtes, comme on aime. Un grand BRAVO à eux pour avoir redonné vie à ce très beau domaine, et bien sûr à l'équipe qui a œuvré à leurs côtés. Chacun peut être fier de son travail et du résultat !",
        nbStars : 5
    },
    {
        title : "Linda MONFERRAN",
        imgSrc : "/domaine/5.jpg",
        desc: "Nous avons célébré ce 27.07.24 un mariage dans ce domaine. Le lieu est magnifique, 40 couchages. il y avait même un grand dortoir pour loger les ados!!!! Ce domaine a vraiment tout pour plaire, ils ont même pensé au traiteur avec une grande cuisine équipée ET climatisée. Les propriétaires sont d'une grande gentillesse et très à l'écoute, soucieux de toujours s'améliorer. Un grand merci à eux !!!!! Vous pouvez y aller les yeux fermés, vous ne le regretterez pas !!",
        nbStars : 5
    }
]

const AboutPage = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <SmoothScroll>
            <main className='h-[70vw] mt-[30vh] bg-inherit flex items-center justify-center'>
                <div className="absolute z-0 w-full">
                    <AboutTitles data={data} setSelectedProject={setSelectedProject} />
                    <AboutDesc data={data} selectedProject={selectedProject} />
                </div>
              
                    
                {/* <Image src="/domaine/about3_1.jpg" alt='Domaine Lassalle Sait Créac' width={800} height={0} className='h-auto object-contain w-full'/> */}
            </main>
            <Slider avis={avis}/>
        </SmoothScroll>
  )
}

export default AboutPage

