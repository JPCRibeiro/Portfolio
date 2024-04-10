import { Line, ProjectsSection, ProjectsTitle, ProjectsHeader, ProjectsContainer } from "../../styles/Projects.styled";
import { Reveal } from "../Reveal";
import { Project } from "./Project";
import project1Img from '../../assets/portal.jpg';
import project2Img from '../../assets/burguer.png';
import project3Img from '../../assets/amazon2.png';

export default function Projects() {
  return(
    <ProjectsSection name='projetos'>
      <ProjectsHeader>
        <Line></Line>
        <h3>
          <Reveal>
            <ProjectsTitle>
              Projetos
              <span>.</span>
            </ProjectsTitle>
          </Reveal>
        </h3>
      </ProjectsHeader>
      <ProjectsContainer>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </ProjectsContainer>
    </ProjectsSection>
  )
}

const projects = [
  {
    title: "Portal do Aluno",
    imgSrc: project1Img,
    code: "https://github.com/JPCRibeiro/Portal",
    projectLink: "https://jpcribeiro.github.io/Portal/",
    tech: ["React", "JavaScript", "React Router", "MUI"],
    description:
      "Plataforma online para que estudantes alcancem uma experiência educacional interativa e eficiente.",
    modalContent: (
      <>
        <p>
          Projetado para atender às necessidades dos alunos, fornecendo recursos valiosos para auxiliar no processo de aprendizagem. 
        </p>
        <p>
          Feito com React, utilizando um arquivo JSON externo e assim coletando os dados, como matrícula, nome e apostilas e usando React Router para a navegação do Portal.
        </p>
      </>
    ),
  },
  {
    title: "Burgeria E-Commerce",
    imgSrc: project2Img,
    code: "https://github.com/JPCRibeiro/Burgeria",
    projectLink: "https://jpcribeiro.github.io/Burgeria/",
    tech: ["Angular", "TypeScript", "Angular Router"],
    description:
      "E-commerce feito para o comércio de hambúrguer, para demonstrar alternativas de compras, além da presencial.",
    modalContent: (
      <>
        <p>
          E-Commerce de uma hamburgueria com objetivo de demonstrar o comércio online de alimentos.
        </p>
        <p>
          Feito com Angular, utilizando objetos para o modelo dos hambúrgers e dos pedidos e utilizei o Router do Angular para a navegação do site, junto com trocas de IDs dinamicamente.
        </p>
      </>
    ),
  },
  {
    title: "Amazon Clone",
    imgSrc: project3Img,
    code: "https://github.com/JPCRibeiro/Amazon-Clone",
    projectLink: "https://jpcribeiro.github.io/Amazon-Clone/",
    tech: ["Next", "JavaScript"],
    description:
      "Clone da homepage da Amazon, projetado para demonstrar os utensílios do site, no qual consegui refazer.",
    modalContent: (
      <>
        <p>
          Utilizando Next com sua estrutra mais recente e com reutilização de componentes, feito margem por margem para se assemelhar o máximo possível com a homepage do site original, com animações do slider e carousel semelhantes.
        </p>
      </>
    ),
  }
];

