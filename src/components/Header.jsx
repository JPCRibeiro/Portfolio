import { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/logo.svg"; 
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-colors duration-200 ${isScrolled ? "bg-[rgb(12_14_19/85%)] backdrop-blur-xs border-b border-[#10131d] shadow-[inset_0_0_0_0px_#1f1f1fa8,0_0_0px_#000000bf,0_0_2px_#000000bf]" : "border-b border-b-transparent"}`}>
      <nav className="py-3 px-10 max-w-300 mx-auto flex justify-between items-center">
        <img src={logo} className="flex relative z-40 w-25 cursor-pointer" onClick={scrollTop}/>
        <div className="flex items-center gap-5">
          <a href="https://github.com/JPCRibeiro" target="blank" className="flex text-white/80 hover:text-white duration-200 transition-color">
            <SiGithub size={28}/>
          </a>
          <a href="https://www.linkedin.com/in/jpcribeiro" target="blank" className="flex text-white/80 hover:text-white duration-200 transition-color">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
          </a>
        </div>
      </nav>
    </header>
  )
}