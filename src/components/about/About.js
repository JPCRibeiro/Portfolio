import { AboutHeader, AboutSection, AboutText, AboutTextContainer, AboutTitle, Line, PerfilContainer, AboutLocal, ProfilePictureContainer } from "../../styles/About.styled";
import { Reveal } from "../Reveal";
import { GiEarthAmerica } from 'react-icons/gi';
import Stats from "./TechsAbout";
import perfilPicture from '../../assets/perfil.jpg';

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
              Seja bem-vindo ao meu portfolio, tenho 21 anos e moro no Rio de Janeiro. Programo há 2 anos e estudo diariamente para conseguir oportunidades para ingressar na área.
            </AboutText>
          </Reveal>
          <Reveal>
            <AboutText>
              Estou cursando Engenharia de Software no instituto INFNET, aprendendo Front-End e Back-End e gosto de conhecer diferentes tipos de frameworks para desenvolvimentos web.
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
            <ProfilePictureContainer>
              <img src={perfilPicture} alt="profile" />
            </ProfilePictureContainer>
            <AboutLocal>
              <GiEarthAmerica/>
              Rio de Janeiro, RJ - Brasil
            </AboutLocal>
            <AboutText>
              Gosto projetar e criar produtos, websites e experiências digitais para as pessoas.
            </AboutText>
          </Reveal>
        </PerfilContainer>
    </AboutSection>
  )
}