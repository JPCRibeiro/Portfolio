import { Server } from "lucide-react";
import { CodeXml } from "lucide-react";
import profilePic from "../assets/profile-pic.jpg";
import SectionTopic from "./SectionTopic";
import { Globe } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="max-w-285 mx-auto p-10">
      <SectionTopic topic={"Sobre Mim"}/>
      <div className="mt-12 grid lg:grid-cols-2 gap-16 items-center text-justify">
        <div className="gap-6 flex flex-col text-center">
          <div className="flex justify-center flex-col items-center gap-4 w-full">
            <img src={profilePic} width={200} height={200} className="rounded-full border-2 border-white/5"/>
            <div className="flex gap-2 items-center">
              <Globe/>
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
        <div className="grid grid-cols-2 gap-4">
          <div className="group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-[#03e398]/20 hover:bg-[#03e398]/2 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#03e398]/10 flex items-center justify-center mb-4 group-hover:bg-[#03e398]/15 transition-colors">
              <CodeXml/>
            </div>
            <p className="text-white/80 font-semibold text-sm">Linguagens de Programação</p>
            <p className="text-white/40 text-sm mt-1">JavaScript/TypeScript, Python</p>
          </div>
          <div className="group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-[#03e398]/20 hover:bg-[#03e398]/2 transition-all duration-300">
            <div className="w-11 h-11 rounded-xl bg-[#03e398]/10 flex items-center justify-center mb-4 group-hover:bg-[#03e398]/15 transition-colors">
              <CodeXml/>
            </div>
            <p className="text-white/80 font-semibold text-sm">Frontend Frameworks</p>
            <p className="text-white/40 text-sm mt-1">React, Next.js, Vue</p>
          </div>
          <div className="group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-[#03e398]/20 hover:bg-[#03e398]/2 transition-all duration-200">
            <div className="w-11 h-11 rounded-xl bg-[#03e398]/10 flex items-center justify-center mb-4 group-hover:bg-[#03e398]/15 transition-colors">
              <Server/>
            </div>
            <p className="text-white/80 font-semibold text-sm">Backend Frameworks</p>
            <p className="text-white/40 text-sm mt-1">Node.js, Flask</p>
          </div>
          <div className="group p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-[#03e398]/20 hover:bg-[#03e398]/2 transition-all duration-200">
            <div className="w-11 h-11 rounded-xl bg-[#03e398]/10 flex items-center justify-center mb-4 group-hover:bg-[#03e398]/15 transition-colors">
              <Server/>
            </div>
            <p className="text-white/80 font-semibold text-sm">Infra</p>
            <p className="text-white/40 text-sm mt-1">AWS, GPC, Supabase, Docker</p>
          </div>
        </div>
      </div>
    </section>
  );
}
