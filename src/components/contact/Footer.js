import React, { useState } from "react";
import { ContactContainer, ContactTitle, FooterSection, Logo, LogoLink } from "../../styles/Contact.styled";
import { Reveal } from "../Reveal";
import {animateScroll as scroll} from 'react-scroll';
import Form from "./Contact";

export default function Footer() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { top, left, width, height } = event.target.getBoundingClientRect();

    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    const rotateXValue = (y - 0.5) * 70;
    const rotateYValue = (x - 0.5) * 70;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return(
    <FooterSection name="contato" onMouseMove={handleMouseMove}>
      <ContactContainer>
        <Reveal width="fit-content">
          <ContactTitle>
            Contato<span>.</span>
          </ContactTitle>
        </Reveal>
        <LogoLink onClick={toggleHome} rotatex={rotateX} rotatey={rotateY}>
          <Logo fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.75 17.02">
              <path className="cls-1" d="M0,6.07V5.74H.83v.31a1.77,1.77,0,0,0,.45,1.33,1.51,1.51,0,0,0,1.1.43,1.53,1.53,0,0,0,1.08-.42,1.73,1.73,0,0,0,.45-1.32V.74H1.85V0H4.74V6.07A2.37,2.37,0,0,1,4,8a2.44,2.44,0,0,1-1.68.62A2.42,2.42,0,0,1,.7,8,2.4,2.4,0,0,1,0,6.07Z"/>
              <path className="cls-1" d="M2.42,13.29V4.86H5.34a2.6,2.6,0,0,1,1.87.69A2.43,2.43,0,0,1,7.94,7.4a2.46,2.46,0,0,1-.73,1.87A2.53,2.53,0,0,1,5.34,10H3.25v3.31Zm.83-4h2a1.86,1.86,0,0,0,1.35-.49A1.79,1.79,0,0,0,7.09,7.4a1.76,1.76,0,0,0-.5-1.32A1.86,1.86,0,0,0,5.24,5.6h-2Z"/>
              <path className="cls-1" d="M3.76,11.24A4.19,4.19,0,0,1,5,8.17,4,4,0,0,1,8,6.93,5.52,5.52,0,0,1,9.09,7a4.76,4.76,0,0,1,.85.27,6.54,6.54,0,0,1,.6.32,3.62,3.62,0,0,1,.38.27L11,8l-.45.61-.11-.1-.34-.23A5.36,5.36,0,0,0,9.61,8,4.67,4.67,0,0,0,8.9,7.8,3.71,3.71,0,0,0,8,7.7a3.22,3.22,0,0,0-2.43,1,3.54,3.54,0,0,0-1,2.52,3.71,3.71,0,0,0,1,2.59,3.2,3.2,0,0,0,2.46,1.07A3.59,3.59,0,0,0,9,14.77a3.11,3.11,0,0,0,.77-.28,4.15,4.15,0,0,0,.56-.34,2.73,2.73,0,0,0,.35-.27l.12-.12.48.59-.13.13a4,4,0,0,1-.41.32,3.62,3.62,0,0,1-.66.4,5.44,5.44,0,0,1-.9.31A4.19,4.19,0,0,1,8,15.65,4,4,0,0,1,5,14.38,4.37,4.37,0,0,1,3.76,11.24Z"/>
              <path className="cls-1" d="M7.94,17V8.58h2.5A4.21,4.21,0,0,1,12,8.81a2,2,0,0,1,.94.83A2.64,2.64,0,0,1,13.29,11a2.36,2.36,0,0,1-.44,1.46,2.08,2.08,0,0,1-1.15.82v0l.21.34L13.75,17H12.8l-1.91-3.56H8.77V17Zm.83-4.3h2A1.62,1.62,0,0,0,12,12.26,1.74,1.74,0,0,0,12.44,11a1.52,1.52,0,0,0-.77-1.47,2.57,2.57,0,0,0-1.2-.21H8.77Z"/>
            </Logo>
        </LogoLink>
        <Form/>
      </ContactContainer>
    </FooterSection>
  )
}