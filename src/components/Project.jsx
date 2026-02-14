import { ExternalLink } from "lucide-react"
import { projects } from "../ProjectsData"

export default function Project() {
  return (
    
    <>
      {projects.map((project) => (
        <div key={project.name} className="group cursor-pointer relative bg-white/2 flex flex-col transition-all duration-200 border border-white/5 hover:border-[#03e398]/20 rounded-xl">
          <div>
            <img src={project.imgSrc} alt="FinTrack" className="w-full h-full object-contain p-4"/>
          </div>
          <div className="p-6 bg-white/2 rounded-b-xl flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white/90 group-hover:text-[#03e398] transition-colors">{project.name}</h3>
                <a href={project.projectLink} target="blank" className="flex p-2 rounded-lg text-white/40 hover:text-[#03e398] hover:bg-[#03e398]/10 transition-all">
                  <ExternalLink size={20}/>
                </a>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-4 text-justify">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono text-[#03e398]/70 bg-[#03e398]/5 border border-[#03e398]/10 rounded-full">{tech}</span>
                ))}
              </div>
          </div>
        </div>
      ))}
    </>
  )
}