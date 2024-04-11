import { CVButton, Header, Link, Links, Logo, LogoBox } from "../styles/Nav.styled";
import { motion as m } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import cv from '../assets/CV.pdf';
import logo from "../assets/logo-green.svg";

export default function HeaderNav() {
  return (
    <Header>
      <Links>
        <LogoBox 
        to="inicio"
        exact="true"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={100}
        offset={-10}
        >
          <Logo src={logo}></Logo>
        </LogoBox>
        <m.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="https://github.com/JPCRibeiro"
            target="blank"
            rel="nofollow noopener noreferrer"
          >
            <BsGithub size="2.6rem" />
          </Link>
        </m.span>
        <m.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="https://www.linkedin.com/in/jpcribeiro/"
            target="blank"
            rel="nofollow noopener noreferrer"
          >
            <BsLinkedin size="2.6rem" />
          </Link>
        </m.span>
      </Links>
      <CVButton onClick={() => window.open(cv)}>
        Currículo
      </CVButton>
    </Header>
  );
}
