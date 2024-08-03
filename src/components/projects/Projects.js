import { Line, ProjectsSection, ProjectsTitle, ProjectsHeader, ProjectsContainer } from "../../styles/Projects.styled";
import { Reveal } from "../Reveal";
import { Project } from "./Project";
import portalImg from '../../assets/portal.jpg';
import burgeriaImg from '../../assets/burguer.png';
import AmazonImg from '../../assets/amazon2.png';
import CineWorldImg from '../../assets/cine.svg';
import PromoTechImg from '../../assets/promotech.png'

export default function Projects() {
  return(
    <ProjectsSection name='projetos'>
      <ProjectsHeader>
        <Line></Line>
        <h3>
          <Reveal>
            <ProjectsTitle>
              Meus Projetos
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
    title: "PromoTech",
    imgSrc: PromoTechImg,
    code: "https://github.com/JPCRibeiro/PromoTech",
    projectLink: "https://jpcribeiro-promotech.vercel.app/",
    tech: ["Vue.js", "JavaScript", "Tailwind CSS", "Python", "Flask", "MySQL", "API Externa", "AWS"],
    description:
      "E-commerce de vendas de produtos eletrônicos e eletrodomésticos",
    modalContent: (
      <>
        <p>
          Website desenvolvido utilizando Python para o backend, realizando o web scrap do site: https://www.zoom.com.br para obter os preços, imagens e descrições de diversos produtos e assim essas informações são registradas ao banco de dados MySQL online utilizando o serviço RDS da AWS. Com o Flask, foi criado rotas para a API para disponibilizar os dados dos produtos para assim utilizar no frontend, hospedando a API na AWS, utilizando o serviço EC2 para o servidor Flask.
        </p>
        <p>
          Assim, o frontend é construído com Vue.js e TailwindCSS com axios para a busca da API online hospedada na AWS: http://produtos-ambiente-env-1.eba-njrz2a2f.sa-east-1.elasticbeanstalk.com/api/produtos
        </p>
      </>
    ),
  },
  {
    title: "Cine World",
    imgSrc: CineWorldImg,
    code: "https://github.com/JPCRibeiro/Cine-World",
    projectLink: "https://jpcribeiro-cineworld.vercel.app/",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "TMDB API"],
    description:
      "Site com informações sobre filmes, séries e atores e consultar os mais novos lançamentos de filmes e séries.",
    modalContent: (
      <p>
        Utilizando Next.js com sua estrutra mais recente e com reutilização de componentes, utilizando as rotas do Next e Tailwind CSS para estilização e uso da TMDB API para a vasta base de dados de filmes e séries, assim como a pesquisa sobre as informações.
      </p>
    ),
  },
  {
    title: "Burgeria",
    imgSrc: burgeriaImg,
    code: "https://github.com/JPCRibeiro/Burgeria-E-Commerce",
    projectLink: "https://jpcribeiro-burgeria.vercel.app/",
    tech: ["Angular", "TypeScript", "Angular Router"],
    description:
      "E-commerce feito para o comércio de hambúrguers e combos, para demonstrar alternativas de compras, além da presencial.",
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
    imgSrc: AmazonImg,
    code: "https://github.com/JPCRibeiro/Amazon-Clone",
    projectLink: "https://jpcribeiro-amazon.vercel.app/",
    tech: ["Next.js", "JavaScript"],
    description:
      "Clone da homepage da Amazon, projetado para demonstrar os utensílios do site, no qual consegui refazer.",
    modalContent: (
      <p>
        Utilizando Next.js com sua estrutra mais recente e com reutilização de componentes, feito margem por margem para se assemelhar o máximo possível com a homepage do site original, com animações do slider e carousel semelhantes.
      </p>
    ),
  },
  {
    title: "Portal do Aluno",
    imgSrc: portalImg,
    code: "https://github.com/JPCRibeiro/Portal-Aluno",
    projectLink: "https://jpcribeiro-portal-aluno.vercel.app",
    tech: ["React", "JavaScript", "React Router", "MUI"],
    description: "Plataforma online para que estudantes alcancem uma experiência educacional interativa e eficiente.",
    modalContent: (
      <>
        <p>
          Projetado para atender às necessidades dos alunos, fornecendo recursos valiosos para auxiliar no processo de aprendizagem. 
        </p>
        <p>
          Feito com React, utilizando um arquivo JSON externo e assim coletando os dados das apostilas utilizadas no portal, também há uso do React Router para a navegação do Portal.
        </p>
      </>
    ),
  },
];

