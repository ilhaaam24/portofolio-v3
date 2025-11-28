import react from "../assets/tools/react.webp";
import next from "../assets/tools/nextjs.webp";
import express from "../assets/tools/express.webp";
import node from "../assets/tools/node.webp";
import tailwind from "../assets/tools/tailwind.webp";
import postgres from "../assets/tools/postgresql.webp";
import git from "../assets/tools/git.webp";
import github from "../assets/tools/github.webp";
import laravel from "../assets/tools/laravel.webp";
import golang from "../assets/tools/golang.webp";
import css from "../assets/tools/css.webp";
import html from "../assets/tools/html.webp";
import js from "../assets/tools/javascript.webp";
import flutter from "../assets/tools/flutter.svg";
import figma from "../assets/tools/figma.svg";

const TechStack = () => {
  const techStack = [
    { title: "React", image: react },
    { title: "Next.js", image: next },
    { title: "Laravel", image: laravel },
    { title: "Express", image: express },
    { title: "Node.js", image: node },
    { title: "Tailwind CSS", image: tailwind },
    { title: "PostgreSQL", image: postgres },
    { title: "Git", image: git },
    { title: "Github", image: github },
    { title: "Golang", image: golang },
    { title: "CSS", image: css },
    { title: "HTML", image: html },
    { title: "JavaScript", image: js },
    { title: "Flutter", image: flutter },
    { title: "Figma", image: figma },
  ];
  return (
    <section id="tech-stack" className="py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">Mastering Development</h2>
        <p className="text-primary text-center mt-4 text-lg">Teknologi yang saya gunakan untuk membangun solusi digital</p>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-infinite-scroll">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={`tech-2-${index}`} className="flex-shrink-0 mx-4 px-8 py-4 bg-card rounded-sm shadow-sm  hover:border-secondary transition-colors duration-300 flex items-center gap-2 bg-white">
              <img src={tech.image} alt={tech.title} className="h-8 w-auto" />
              <span className="text-lg font-semibold text-primary whitespace-nowrap">{tech.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex animate-infinite-scroll-reverse">
          {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, index) => (
            <div key={`tech-2-${index}`} className="flex-shrink-0 mx-4 px-8 py-4 bg-card rounded-sm shadow-sm  hover:border-secondary transition-colors duration-300 flex items-center gap-2 bg-white">
              <img src={tech.image} alt={tech.title} className="h-8" />
              <span className="text-lg font-semibold text-primary whitespace-nowrap">{tech.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
