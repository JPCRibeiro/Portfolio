import { styled } from "styled-components";
import { SectionWrapper } from "./GlobalCss.styled";
import { Link as LinkScroll } from "react-scroll";
import backImg from "../assets/background.jpg";

export const HeroSection = styled.section`
  min-height: 100svh;
  position: relative;
  isolation: isolate;
  background: black;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    background: linear-gradient(transparent, rgb(12, 14, 19));
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -2;
    inset: 0;
    opacity: 0.3;
    background-image:url(${backImg}); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const HeroContainer = styled(SectionWrapper)`
  //margin-bottom: 9.6rem;
  margin-top: 80px;

  //@media (max-width: 768px) {
    //margin-bottom: 4.8rem;
  //}
`

export const HeroTextBox = styled.div`
  position: relative;
  z-index: 10;
  width: fit-content;
  margin: 4.8rem 0;
`

export const HeroTitle = styled.h1`
  font-size: 9.6rem;
  font-weight: 900;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 5.6rem;
  }

  span {
    color: var(--primary-color);
  }
`

export const SubTitle = styled.h2`
  font-size: 3.6rem;
  margin-top: 1.6rem;
  font-weight: 200;

  span {
    font-weight: bold;
    color: var(--primary-color);
  }
`

export const Text = styled.p`
  margin: 2.4rem 0;
  max-width: 700px;
  font-weight: 200;
`

export const SeeMoreButton = styled(LinkScroll)`
  justify-content: center;
  align-items: center;
  display: flex;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 1.2rem 2.4rem;
  background: var(--primary-color);
  color: #080808;
  font-size: 1.8rem;
  border-radius: 4px;
  position: relative;
  z-index: 20;
  overflow: hidden;
  transition: opacity .2s;

  &:hover {
    opacity: 0.8;
  }
`