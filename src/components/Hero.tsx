import { Button } from "../components/ui/button";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import profilePhoto from "../assets/images/profile.png";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-primary" },
    { icon: Mail, href: "mailto:hello@johndoe.com", label: "Email", color: "hover:text-primary" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center bg-foreground pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-lg text-primary font-medium">Halo, Saya</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">Muhammad Ilham</h1>
              <p className="text-xl md:text-2xl text-primary">Full Stack Developer</p>
            </div>

            <p className="text-lg text-primary max-w-xl leading-relaxed">
              Saya membangun aplikasi web dan mobile yang modern, responsif, dan user-friendly. Dengan pengalaman bertahun-tahun dalam development, saya siap membantu mewujudkan ide digital Anda menjadi kenyataan.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-3  rounded-full border-2 border-primary bg-secondary hover:border-primary transition-all duration-300 ${social.color} text-primary hover:scale-110 hover:shadow-lg`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-secondary"
                onClick={() => {
                  const projectsSection = document.querySelector("#projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}>
                Lihat Portfolio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:text-primary hover:bg-secondary"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}>
                Hubungi Saya
              </Button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -bottom-8 z-20  text-primary flex flex-col items-center justify-center p-6 md:w-48 md:h-28 rounded-sm bg-white shadow-md">
                <h2>2+ year</h2>
                <h2>experience</h2>
              </div>
              <div className="relative z-0 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
