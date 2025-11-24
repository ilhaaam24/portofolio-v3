import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, Send, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent")}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="text-2xl font-bold text-primary hover:text-primary transition-colors">
            MI<span className="text-foreground">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-primary hover:text-primary transition-colors font-medium relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button onClick={() => scrollToSection("#contact")} className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-7 rounded-full">
              <Send className="mr-2 " />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-primary hover:text-primary transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-[420px] pb-6" : "max-h-0")}>
          <div className="flex flex-col gap-4 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-primary hover:bg-primary hover:text-secondary hover:pl-6 duration-500 ease-in-out transition-all  font-medium py-2 border-b border-border/50">
                {item.label}
              </a>
            ))}
            <Button onClick={() => scrollToSection("#contact")} className="bg-primary hover:bg-primary/90 w-full text-primary">
              <span className="text-white">Hire Me</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
