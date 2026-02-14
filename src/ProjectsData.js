import visuWallImg from "./assets/visuwall.png"; 
import vozInvisivelImg from "./assets/vozinvisivel.png"; 

export const projects = [
  {
    name: "VisuWall",
    imgSrc: visuWallImg,
    description: "Plataforma de wallpapers para explorar, compartilhar e baixar imagens em alta resolução postadas pelos próprios usuários.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Storage Bucket"],
    projectLink: "https://visuwall.vercel.app",
  },
  {
    name: "Voz Invisível",
    imgSrc: vozInvisivelImg,
    description: "Plataforma criada para dar voz às vítimas, permitindo que elas relatem casos de discriminação de forma anônima e segura.",
    techs: ["React", "React Native", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS"],
    projectLink: "https://vozinvisivel.com.br",
  },
]

/*
{
    name: "PromoTech",
    imgSrc: visuWallImg,
    description: "E-commerce de produtos eletrônicos e eletrodomésticos com dados obtidos via web scraping do site zoom.com.br.",
    techs: ["Vue.js", "JavaScript", "Tailwind CSS", "Python", "BeautifulSoup", "Flask", "MySQl", "AWS"],
    projectLink: "https://jpcribeiro-promotech.vercel.app/",
  },
*/