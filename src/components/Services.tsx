import { Code, Smartphone, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Membangun website modern dan responsif dengan teknologi terkini. Dari landing page hingga web application yang kompleks.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Modern UI/UX"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Mengembangkan aplikasi mobile native dan cross-platform untuk iOS dan Android dengan pengalaman user yang optimal.",
      features: ["Cross Platform", "Native Performance", "Clean Interface", "Offline Support"],
    },
    {
      icon: Cloud,
      title: "API Development",
      description: "Merancang dan membangun RESTful API dan GraphQL yang scalable, secure, dan well-documented untuk kebutuhan backend Anda.",
      features: ["RESTful ", "Authentication", "Documentation", "Scalable Architecture"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Layanan Saya</h2>
          <p className="text-white text-lg max-w-2xl mx-auto">Solusi digital yang disesuaikan dengan kebutuhan bisnis Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className=" bg-secondary shadow-none group border-none">
              <CardHeader>
                <div className="mb-4 p-3 bg-accent rounded-lg w-fit text-primary transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2 text-primary">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-primary">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
