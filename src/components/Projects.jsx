import SectionTopic from "./SectionTopic";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="max-w-285 mx-auto p-10">
      <SectionTopic topicInRight={false} topic={"Meus Projetos"}/>
      <div className="mt-16 grid md:grid-cols-2 gap-6">
        <Project/>
      </div>
    </section>
  )
}