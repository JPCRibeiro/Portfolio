import { Server, CodeXml, Globe } from "lucide-react";
import profilePic from "../assets/profile-pic.jpg";
import SectionTopic from "./SectionTopic";
import { MonitorSmartphone } from "lucide-react";

const Stacks = () => {
  const techs = [
    {
      icon: <CodeXml />,
      techsTitle: "Linguagens e Ferramentas",
      techs: "JavaScript/TypeScript, Python",
    },
    {
      icon: <MonitorSmartphone />,
      techsTitle: "Frameworks e Bibliotecas",
      techs: "React, Next.js, Vue.js, Node.js, Flask",
    },
    {
      icon: <Server />,
      techsTitle: "Infraestrutura e DevOps",
      techs: "AWS, GCP, Supabase, Docker",
    },
  ];

  return (
    <>
      {techs.map((tech, i) => (
        <div key={i} className="flex flex-col flex-1 gap-4 group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-[#03e398]/20 hover:bg-[#03e398]/2 transition-all duration-300">
          <div className="flex gap-4 w-full items-center">
            <div className="max-w-11 w-full h-11 rounded-xl bg-[#03e398]/10 flex items-center justify-center group-hover:bg-[#03e398]/15 transition-colors">
              {tech.icon}
            </div>
            <p className="text-white/80 font-semibold text-sm">
              {tech.techsTitle}
            </p>
          </div>
          <p className="text-white/40 text-sm mt-1">{tech.techs}</p>
        </div>
      ))}
    </>
  );
};

export default function AboutMe() {
  return (
    <section className="max-w-285 mx-auto p-10">
      <SectionTopic topic={"Sobre Mim"} />
      <div className="mt-12 grid lg:grid-cols-2 gap-16 items-center">
        <div className="gap-6 flex flex-col text-center">
          <div className="flex justify-center flex-col items-center gap-4 w-full">
            <img
              src={profilePic}
              width={200}
              height={200}
              className="rounded-full border-2 border-white/5"
            />
            <div className="flex gap-2 items-center">
              <Globe />
              Rio de Janeiro, RJ - Brasil
            </div>
          </div>
          <p>
            Cursando Engenharia de Software e desenvolvedor Fullstack apaixonado
            por transformar ideias complexas em soluções elegantes e
            performáticas. Com mais de 3 anos de experiência.
          </p>
          <p>
            Já realizei serviços para profissionais autônomos, quanto empresas
            sendo freelancer, também desenvolvendo projetos pessoais e
            aprendendo junto
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="flex gap-2 items-center font-medium">
          <svg className="fill-primary" viewBox="0 0 1024 1024" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"/>
          </svg>
          <span>Tecnologias que utilizo</span>
        </h4>
          <div className="flex flex-wrap gap-4">
            <Stacks/>
          </div>
        </div>
      </div>
    </section>
  );
}
