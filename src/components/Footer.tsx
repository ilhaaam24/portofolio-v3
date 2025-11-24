import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@johndoe.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-secondary mb-4">MI<span className="text-white">.</span></h3>
            <p className="text-muted-foreground text-sm">Full Stack Developer yang passionate dalam membangun solusi digital yang inovatif dan user-friendly.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} aria-label={social.label} className="p-2 bg-accent rounded-lg hover:bg-secondary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">© {currentYear} Muhammad Ilham. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
