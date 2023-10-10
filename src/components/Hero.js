import { HeroSection, HeroContainer, HeroTextBox, HeroTitle, SubTitle, Text, SeeMoreButton } from '../styles/Hero.styled';
import { Reveal } from './Reveal';

export default function Hero() {
  return(
    <HeroSection name='inicio'>
      <HeroContainer>
        <HeroTextBox>
          <Reveal>
            <HeroTitle>
              Olá<span>,</span> meu nome é João Pedro
            </HeroTitle>
          </Reveal>
          <Reveal>
            <SubTitle>
              Sou <span>Engenheiro de Software</span>.
            </SubTitle>
          </Reveal>
          <Reveal>
            <Text>
              Gosto de criar experiências virtuais para mim e para as pessoas, tentando melhorar a cada dia em tudo que faço.
            </Text>
          </Reveal>
          <Reveal>
            <SeeMoreButton
              to="sobre"
              exact="true"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-35}
            >
              Ver Mais
            </SeeMoreButton>
          </Reveal>
        </HeroTextBox>
      </HeroContainer>
    </HeroSection>
  )
}