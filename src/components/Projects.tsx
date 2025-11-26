import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExternalLink, EyeIcon } from "lucide-react";
import sewaMobilin from "../assets/images/sewa-mobilin.png";
import bankSha from "../assets/images/bank-sha.png";
import diaryFood from "../assets/images/diary-food.png";
import arenaku from "../assets/images/arenaku.png";
import sahabatBuku from "../assets/images/sahabat-buku.png";

const Projects = () => {
  const allProjects = [
    {
      title: "Sewa Mobilin",
      description: "Website rental mobil yang memudahkan pengguna dalam mencari mobil yang sesuai dengan kebutuhan mereka.",
      tags: ["React", "Next js", "Tailwind"],
      image: sewaMobilin,
    },
    {
      title: "Bank Sha | E-Wallet Application",
      description: "Aplikasi e-wallet yang memudahkan pengguna dalam melakukan transaksi dan mengelola saldo.",
      tags: ["Flutter", "Laravel", "Bloc", "MySQL"],
      image: bankSha,
    },
    {
      title: "Diary Food",
      description: "Website komunitas untuk membagikan resep masakan dan berbagi pengalaman memasak.",
      tags: ["Next Js", "Tailwind CSS", "Express Js", "Supabase"],
      image: diaryFood,
    },
    {
      title: "Arenaku",
      description: "Website booking lapangan online yang memudahkan pengguna dalam mencari lapangan yang sesuai dengan kebutuhan mereka.",
      tags: ["Laravel", "Tailwind", "MySQL", "Midtrans"],
      image: arenaku,
    },
    {
      title: "Sahabat Buku | Library App",
      description: "Aplikasi peminjaman buku sederhana - Submission Dicoding",
      tags: ["Flutter", "Firebase", "GetX"],
      image: sahabatBuku,
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, allProjects.length));
  };

  return (
    <section id="projects" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Innovations</h2>
          <p className="text-primary text-lg max-w-2xl mx-auto">Highlighting top projects that blend elegant design with cutting-edge technology.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-sm transition-all duration-300 group border-none text-primary bg-white  ">
              <div className="relative  md:h-72 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="gap-2">
                    <EyeIcon className="w-4 h-4" />
                    Details
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm text-primary">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs py-2 px-4 text-secondary bg-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleProjects < allProjects.length && (
          <div className="text-center">
            <Button size="lg" onClick={loadMore} className="bg-primary hover:bg-primary/90 text-secondary">
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
