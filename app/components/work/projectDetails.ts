import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiReact,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github?: string;
  demo?: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 0,
    name: "Portfolio 2023",
    description: "This is the fourth iteration of my portfolio.",
    technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
    techNames: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    techLinks: [
      "https://www.typescriptlang.org/",
      "https://reactjs.org/",
      "https://nextjs.org/",
      "https://tailwindcss.com/",
      "https://www.framer.com/motion/",
    ],
    // github: "https://github.com/nuIIpointerexception/www.seekvisualartist.com",
    demo: "https://www.seekvisualartist.com/",
    image: "/projects/portfolio2023.webp",
    available: true,
  },
  {
    id: 1,
    name: "NFTonPulse",
    description:
      "NFT marketplace on Pulse chain. I handled web3 integration part, smart contract development and backend development.",
    technologies: [SiReact, SiNodedotjs, SiExpress, SiSolidity, SiMongodb],
    techNames: ["React", "Node.js", "Express", "Solidity", "MongoDB"],
    techLinks: [
      "https://reactjs.org/",
      "https://nodejs.org/",
      "https://expressjs.com/",
      "https://docs.soliditylang.org/",
      "https://www.mongodb.com/",
    ],
    demo: "https://nftonpulse.io/",
    image: "/projects/nftonpulse.webp",
    available: true,
  },
  {
    id: 2,
    name: "2137AD",
    description:
      "2137AD Cinematic Universe. I built this site for the community.",
    technologies: [SiReact, SiTailwindcss],
    techNames: ["React", "Tailwind CSS"],
    techLinks: ["https://reactjs.org/", "https://tailwindcss.com/"],
    demo: "https://2137ad.com/",
    image: "/projects/2137ad.webp",
    available: true,
  },
  {
    id: 3,
    name: "Zombabies",
    description:
      "Minting and staking site for Zombabies NFT. I was in charge of building site for Zombabies V1 & V2 and built smart contract for it.",
    technologies: [SiReact, SiTailwindcss, SiSolidity],
    techNames: ["React", "Tailwind CSS", "Solidity"],
    techLinks: [
      "https://reactjs.org/",
      "https://tailwindcss.com/",
      "https://docs.soliditylang.org/",
    ],
    demo: "https://www.zombabies.io/",
    image: "/projects/Zombabies.webp",
    available: true,
  },
  {
    id: 4,
    name: "Cropper Finance",
    description:
      "Cropper is an automated market maker(AMM) built on Solana blockchain. I have taken part in building frontend side.",
    technologies: [SiVuedotjs, SiNuxtdotjs],
    techNames: ["Vue.js", "Nuxt.js"],
    techLinks: ["https://vuejs.org/", "https://nuxt.com/"],
    demo: "https://cropper.finance/",
    image: "/projects/Cropper Finance.webp",
    available: true,
  },
  {
    id: 5,
    name: "BuyForMeRetail",
    description:
      "An e-commerce site where users can buy things chosen by the website management team and retail them to make money.",
    technologies: [SiReact, SiTailwindcss, SiNodedotjs],
    techNames: ["React", "Tailwind CSS", "Node.js"],
    techLinks: [
      "https://reactjs.org/",
      "https://tailwindcss.com/",
      "https://nodejs.org/",
    ],
    demo: "https://www.buyformeretail.com/",
    image: "/projects/buyformeretail.webp",
    available: true,
  },
  {
    id: 6,
    name: "ShibaSocialClub",
    description: "Launchpad & Minting site for Shiba Social Club NFTs.",
    technologies: [SiReact, SiSolidity],
    techNames: ["React", "Solidity"],
    techLinks: ["https://reactjs.org/", "https://docs.soliditylang.org/"],
    demo: "https://shiba-nft-mint-site.vercel.app/",
    image: "/projects/shibasocialclub.webp",
    available: true,
  },
  {
    id: 8,
    name: "Coming Soon",
    description:
      "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
    technologies: [SiReact],
    techNames: ["React"],
    techLinks: ["https://reactjs.org/"],
    github: "https://github.com/nuIIpointerexception/",
    demo: "https://github.com/nuIIpointerexception/",
    image: "/projects/construction.webp",
    available: false,
  },
];
