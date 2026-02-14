import { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const logoRef = useRef(null);
  const rotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      targetRotation.current = {
        x: -(deltaY / centerY) * 20,
        y: (deltaX / centerX) * 20,
      };
    };

    const animate = () => {
      rotation.current.x +=
        (targetRotation.current.x - rotation.current.x) * 0.1;
      rotation.current.y +=
        (targetRotation.current.y - rotation.current.y) * 0.1;

      if (logoRef.current) {
        logoRef.current.style.transform = `rotateX(${rotation.current.x.toFixed(2)}deg) rotateY(${rotation.current.y.toFixed(2)}deg)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer className="max-w-285 mx-auto p-10 flex flex-col justify-center items-center">
      <img onClick={scrollTop} ref={logoRef} src={logo} className="w-30 will-change-transform cursor-pointer"/>
      <a href="mailto:jopedroribeiro9@gmail.com" className="my-8 text-xl font-medium">
        jopedroribeiro9@gmail.com
      </a>
      <div className="flex gap-6">
        <a href="https://github.com/JPCRibeiro" target="blank" className="cursor-pointer">
          <Github/>
        </a>
        <a href="https://www.linkedin.com/in/jpcribeiro" target="blank" className="cursor-pointer">
          <Linkedin/>
        </a>
      </div>
    </footer>
  );
}
