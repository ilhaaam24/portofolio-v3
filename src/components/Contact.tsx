import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan berhasil dikirim! Saya akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ilham@gmail.com",
      link: "mailto:illham@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 816 1569 7675 ",
      link: "tel:+6281615697675",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Surabaya, Indonesia",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hubungi Saya</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Punya project atau pertanyaan? Jangan ragu untuk menghubungi saya</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border border-gray-100 bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-primary hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-primary">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-100 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Kirim Pesan</CardTitle>
                <CardDescription className="text-primary">Isi form di bawah ini dan saya akan merespon sesegera mungkin</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nama Lengkap
                      </label>
                      <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required className="border border-gray-200 placeholder:text-gray-400 rounded-md" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required className="border border-gray-200 placeholder:text-gray-400 rounded-md" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="Project Inquiry" value={formData.subject} onChange={handleChange} required className="border border-gray-200 placeholder:text-gray-400 rounded-md" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border border-gray-200 placeholder:text-gray-400 rounded-md resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-primary">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
