import { AboutHeader, AboutSection, AboutText, AboutTextContainer, AboutTitle, Line, PerfilContainer, AboutLocal } from "../../styles/About.styled";
import { Reveal } from "../Reveal";
import { GiEarthAmerica } from 'react-icons/gi';
import Stats from "./TechsAbout";
import profilePicture from '../../assets/profile.svg';

export default function About() {
  return(
    <AboutSection name='sobre'>
      <AboutHeader>
        <h3>
          <Reveal>
            <AboutTitle>
              Sobre Mim
              <span>.</span>
            </AboutTitle>
          </Reveal>
        </h3>
        <Line/>
      </AboutHeader>
      <AboutTextContainer>
        <div>
          <Reveal>
            <AboutText>
              Meu João Pedro e seja bem-vindo ao meu portfolio, tenho 19 anos e moro no Rio de Janeiro. Programo há 2 anos e estudo diariamente para conseguir oportunidades para ingressar na área.
            </AboutText>
          </Reveal>
          <Reveal>
            <AboutText>
              Estou cursando Engenharia de Software no instituto INFNET, aprendendo Front-End e Back-End, estudando para aprender diferentes tipos de frameworks para desenvolvimentos web.
            </AboutText>
          </Reveal>
          <Reveal>
            <AboutText>
              Tenho facilidade de aprendizado e a todo momento busco me aprimorar cada vez mais.
            </AboutText>
          </Reveal>
        </div>
        <Stats/>
      </AboutTextContainer>
        <PerfilContainer>
          <Reveal>
            <img src={profilePicture} alt="profile" />
            <AboutLocal>
              <GiEarthAmerica/>
              Rio de Janeiro, Brasil
            </AboutLocal>
            <AboutText>
              Meu foco é projetar e criar produtos, websites e experiências digitais para as pessoas.
            </AboutText>
          </Reveal>
        </PerfilContainer>
    </AboutSection>
  )
}