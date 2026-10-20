import { useState } from "react";
import { FileText, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e714bc8a-806c-4139-b162-e33c968ce1b8",
          subject: `New portfolio message from ${formData.name}`,
          from_name: "Sumaiya Zakaria Portfolio",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (response.ok && String(result.success) === "true") {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      // Fallback: open the visitor's email app with the message prefilled, so nothing is lost.
      const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\n${formData.name}\n${formData.email}`);
      toast({
        title: "Opening your email app",
        description: "The form couldn't send, so your message is ready to send by email instead.",
      });
      window.location.href = `mailto:sumaiyatzakaria@gmail.com?subject=${subject}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sumaiyatzakaria@gmail.com",
      href: "mailto:sumaiyatzakaria@gmail.com",
    },
    {
      icon: FileText,
      label: "Resume",
      value: "Download PDF",
      href: "/Sumaiya_Zakaria_Resume.pdf",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sumaiyatzakaria",
      href: "https://www.linkedin.com/in/sumaiyatzakaria",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Irvine, CA, United States",
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {"Let's Work"} <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {"Looking for a Senior Technical PM, AI PM or Solutions leader? I'd love to connect. Drop me a message about a role, a product challenge, or payments, integrations and AI work."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                {"Feel free to reach out through any of the following channels. I'm always open to discussing new opportunities, product challenges, and innovative ideas."}
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.label === "LinkedIn" || info.label === "Resume" ? "_blank" : undefined}
                          rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                          className="text-foreground font-medium group-hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability & Work Authorization card */}
              <div className="mt-12 p-6 rounded-2xl border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Status &amp; Authorization</p>
                <p className="text-lg font-display font-semibold text-foreground">
                  Authorized to work in the US
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm text-emerald-500 font-medium">Based in Irvine, CA</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about the opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-ticket w-full py-4 rounded-none text-foreground font-mono font-semibold uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="btn-ticket-shimmer" />
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Get in Touch"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
